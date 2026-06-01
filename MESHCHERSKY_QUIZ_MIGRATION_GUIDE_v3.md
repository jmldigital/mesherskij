# Гайд: Миграция Meshchersky 1 — от каталога к адаптивному квизу

## 1. Общая концепция изменений

### Было (старая версия)
- Главная страница с категориями (сценариями)
- Отдельная страница плеера с плейлистом
- Навигация: Home → Scenarios → Video
- Данные: таблицы `scenarios`, `videos`, `photos`
- Пользователь выбирает категорию → видит список видео → кликает видео → смотрит

### Стало (новая версия)
- **Один экран**, состояние которого меняется пошагово
- Пошаговый квиз: пользователь проходит **граф вопросов произвольной глубины**
- На каждом шаге — выбор из вариантов (карточки Liquid Glass)
- В конце — финальное видео (одно, не плейлист)
- Данные: таблицы `quiz_nodes`, `quiz_edges`, `quiz_results`
- Навигация отсутствует, есть только "Назад" и "В начало"
- **Ключевое: количество шагов определяется графом в БД, не зашито в код**

---

## 2. Текущая схема базы данных (Supabase)

### 2.1 Таблица `quiz_nodes` — узлы графа

```sql
CREATE TABLE quiz_nodes (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug        TEXT NOT NULL UNIQUE,        -- машинное имя
    label       TEXT NOT NULL,               -- текст на кнопке/карточке
    type        TEXT NOT NULL CHECK (type IN ('start', 'question', 'option', 'result')),
    category    TEXT NOT NULL,               -- группировка: gender, scenario, company, subgender, result

    -- Медиа для каждого узла
    icon        TEXT,                        -- emoji или lucide-иконка
    image_url   TEXT,                        -- фоновая картинка карточки
    video_url   TEXT,                        -- видео-луп для фона карточки

    description TEXT,                        -- подсказка под заголовком
    sort_order  INT DEFAULT 0,               -- порядок отображения
    is_active   BOOLEAN DEFAULT true,
    created_at  TIMESTAMPTZ DEFAULT now()
);
```

**Текущие данные (13 узлов):**

| slug | label | type | category |
|------|-------|------|----------|
| `start` | Кто вы? | start | root |
| `gender_m` | М | option | gender |
| `gender_f` | Ж | option | gender |
| `scenario_home` | Возвращение домой | option | scenario |
| `scenario_nature` | Утро внутри природы | option | scenario |
| `scenario_guest` | Гости без хлопот | option | scenario |
| `scenario_evening` | Вечер на высоте | option | scenario |
| `scenario_own` | Свой круг | option | scenario |
| `company_alone` | Один / Одна | option | company |
| `company_with_kids` | С детьми | option | company |
| `company_couple` | Пара | option | company |
| `subgender_male` | мужчина | option | subgender |
| `subgender_female` | женщина | option | subgender |

**Ключевое отличие от старой схемы:**
- Раньше: `scenarios` → `videos` (иерархия 2 уровня)
- Сейчас: `quiz_nodes` → `quiz_edges` → `quiz_nodes` (граф N уровней)
- Каждый узел — это потенциальная "карточка" на экране
- **Глубина квиза не ограничена** — может быть 3, 5, 8, 20 шагов

### 2.2 Таблица `quiz_edges` — связи (ребра графа)

```sql
CREATE TABLE quiz_edges (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    from_node_id UUID NOT NULL REFERENCES quiz_nodes(id) ON DELETE CASCADE,
    to_node_id   UUID NOT NULL REFERENCES quiz_nodes(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ DEFAULT now(),
    UNIQUE(from_node_id, to_node_id)
);

CREATE INDEX idx_edges_from ON quiz_edges(from_node_id);
CREATE INDEX idx_edges_to ON quiz_edges(to_node_id);
```

**Текущие данные (29 связей):**

| from | to | Описание |
|------|-----|----------|
| `start` | `gender_m`, `gender_f` | Выбор пола |
| `gender_m`, `gender_f` | 5 сценариев каждый | Выбор сценария |
| `scenario_*` | `company_alone`, `company_with_kids`, `company_couple` | Выбор состава |
| `company_alone` | `subgender_male`, `subgender_female` | Уточнение пола |
| `company_with_kids`, `company_couple` | — | ЛИСТЫ (конец) |
| `subgender_male`, `subgender_female` | — | ЛИСТЫ (конец) |

**Конец квиза определяется автоматически:** если у узла нет исходящих связей — это лист графа, значит финал.

### 2.3 Таблица `quiz_results` — финальные видео

```sql
CREATE TABLE quiz_results (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node_id     UUID NOT NULL UNIQUE REFERENCES quiz_nodes(id) ON DELETE CASCADE,
    video_url   TEXT NOT NULL,               -- финальное видео
    poster_url  TEXT,                        -- постер/превью для плеера
    path_title  TEXT NOT NULL,               -- "Мужчина, возвращение домой, один, мужчина"
    path_slugs  TEXT[] NOT NULL,             -- ["gender_m", "scenario_home", "company_alone", "subgender_male"]
    path_hash   TEXT UNIQUE,                 -- md5 для быстрого поиска
    title       TEXT,                        -- заголовок над видео
    description TEXT,                        -- описание под видео
    duration    INT,                         -- длительность в секундах
    is_active   BOOLEAN DEFAULT true,
    created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_results_node ON quiz_results(node_id);
CREATE INDEX idx_results_path_hash ON quiz_results(path_hash);
CREATE INDEX idx_results_path_slugs ON quiz_results USING GIN(path_slugs);
```

**Текущие данные (4 результата):**

| node_id (лист) | path_title | video_url |
|---------------|------------|-----------|
| `subgender_male` | Мужчина, возвращение домой, один, мужчина | `final-home-alone-male.mp4` |
| `subgender_female` | Женщина, возвращение домой, один, женщина | `final-home-alone-female.mp4` |
| `company_with_kids` | Возвращение домой, с детьми | `final-home-kids.mp4` |
| `company_couple` | Возвращение домой, пара | `final-home-couple.mp4` |

**Принцип:** Каждый лист графа = один результат. Узел `type = 'result'` не обязателен — лист определяется отсутствием детей в `quiz_edges`.

---

## 3. Новый API-слой (`app/lib/api.ts`)

### Удалить (старые функции):
```typescript
// ❌ УДАЛИТЬ:
- getScenarios()
- getScenarioBySlug(slug)
- getVideosByScenario(id)
- getAllVideos()
- getPhotosByScenario(id)
- getVideoUrl(path)
- getThumbnailUrl(path)
- getImageUrl(path)
```

### Добавить (новые функции):

```typescript
// ✅ НОВЫЕ:

/**
 * Получить узел по ID
 */
export async function getNodeById(id: string): Promise<QuizNode | null>

/**
 * Получить узел по slug
 */
export async function getNodeBySlug(slug: string): Promise<QuizNode | null>

/**
 * Получить стартовый узел (slug = 'start')
 */
export async function getStartNode(): Promise<QuizNode | null>

/**
 * Получить доступные варианты для текущего узла
 * Возвращает массив дочерних узлов (по связям from_node_id)
 * Если массив пуст — текущий узел является листом (конец квиза)
 */
export async function getNextOptions(nodeId: string): Promise<QuizNode[]>

/**
 * Получить финальное видео по ID узла-листа
 */
export async function getResultByNodeId(nodeId: string): Promise<QuizResult | null>

/**
 * Получить результат по хешу пути (альтернативный способ)
 */
export async function getResultByHash(pathHash: string): Promise<QuizResult | null>

/**
 * Получить весь путь от start до текущего узла (для отображения summary)
 */
export async function getPathNodes(nodeIds: string[]): Promise<QuizNode[]>
```

### Типы данных (`app/types/index.ts`):

```typescript
// ❌ УДАЛИТЬ старые типы:
// interface Scenario { ... }
// interface Video { ... }
// interface Photo { ... }

// ✅ НОВЫЕ типы:
export interface QuizNode {
  id: string;
  slug: string;
  label: string;
  type: 'start' | 'question' | 'option' | 'result';
  category: string;
  icon: string | null;
  image_url: string | null;
  video_url: string | null;
  description: string | null;
  sort_order: number;
  is_active: boolean;
}

export interface QuizEdge {
  id: string;
  from_node_id: string;
  to_node_id: string;
}

export interface QuizResult {
  id: string;
  node_id: string;
  video_url: string;
  poster_url: string | null;
  path_title: string;
  path_slugs: string[];
  path_hash: string;
  title: string | null;
  description: string | null;
  duration: number | null;
}

// Состояние квиза на фронтенде
export interface QuizState {
  currentNode: QuizNode | null;
  options: QuizNode[];       // дети текущего узла
  path: QuizNode[];          // полная история выборов
  isComplete: boolean;
  result: QuizResult | null;
  isLoading: boolean;
}
```

---

## 4. Архитектура UI: 3 типа экранов (не фиксированное количество)

### 4.1 Типы экранов

| Тип | Когда показывается | Сколько раз |
|-----|-------------------|-------------|
| `welcome` | В начале, до старта | **1 раз** |
| `question` | На каждом шаге выбора | **N раз** (определяется графом в БД) |
| `result` | В конце, когда дошли до листа | **1 раз** |

**Важно:** `question` показывается столько раз, сколько уровней в графе. Если завтра добавишь 3 новых уровня в БД — квиз автоматически станет длиннее без изменения кода.

### 4.2 Визуальная структура

```
┌─────────────────────────────────────────┐
│  [Единый экран с фоновым видео/image]   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │     ЗАГОЛОВОК (вопрос)          │    │
│  │     Подзаголовок                │    │
│  │                                 │    │
│  │  ┌─────┐ ┌─────┐ ┌─────┐       │    │
│  │  │  М  │ │  Ж  │ │     │       │    │
│  │  │ ♂️  │ │ ♀️  │ │ ... │       │    │
│  │  └─────┘ └─────┘ └─────┘       │    │
│  │                                 │    │
│  │  [Назад]              [Сброс]   │    │
│  │                                 │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

### 4.3 Определение текущего экрана (динамическое)

```typescript
// НЕТ жёсткого списка экранов!
// Только 3 типа, переключаемые по состоянию

function getScreenType(state: QuizState): 'welcome' | 'question' | 'result' {
  if (!state.currentNode) return 'welcome';
  if (state.isComplete) return 'result';
  return 'question';  // показывается N раз подряд
}
```

---

## 5. Компоненты — что оставить, что удалить, что создать

### ❌ УДАЛИТЬ (не нужны в одноэкранном квизе):
```
app/sections/
  ├── Categories.tsx      ← удалить (не нужна сетка категорий)
  ├── Player.tsx          ← удалить (не нужен плеер + плейлист)
  └── Footer.tsx          ← удалить или упростить до минимума

app/components/
  ├── Header.tsx          ← удалить (нет навигации)
  ├── CategoryCard.tsx    ← удалить (заменить на QuizOptionCard)
  ├── VideoList.tsx       ← удалить (нет плейлиста)
  └── ThemeToggle.tsx     ← оставить, но перенести в Settings
```

### ✅ ОСТАВИТЬ (переиспользовать):
```
app/components/
  ├── VideoPlayer.tsx     ← оставить, адаптировать для fullscreen
  ├── Logo.tsx            ← оставить
  └── ThemeToggle.tsx     ← оставить (в меню/настройках)

app/context/
  └── ThemeContext.tsx    ← оставить без изменений

app/lib/
  ├── supabase.ts         ← оставить
  └── api.ts              ← переписать полностью

globals.css               ← оставить (Liquid Glass)
```

### 🆕 СОЗДАТЬ (новые компоненты):

```
app/
├── page.tsx                    ← полностью переписать (один экран)
├── layout.tsx                  ← оставить, убрать Header/Footer
│
├── sections/
│   ├── WelcomeScreen.tsx       ← стартовый экран с CTA
│   ├── QuestionScreen.tsx      ← экран вопроса с вариантами (повторяется N раз)
│   └── ResultScreen.tsx        ← финальное видео
│
├── components/
│   ├── QuizOptionCard.tsx      ← карточка варианта (Liquid Glass)
│   ├── QuizProgress.tsx        ← индикатор прогресса (точки/шаги)
│   ├── QuizNavigation.tsx      ← кнопки Назад / В начало
│   ├── BackgroundMedia.tsx     ← фоновое видео/картинка
│   └── ResultPlayer.tsx        ← fullscreen плеер результата
│
├── hooks/
│   ├── useQuizState.ts         ← управление состоянием квиза
│   └── useBackgroundMedia.ts   ← управление фоновым видео
│
├── types/
│   └── index.ts                ← переписать (новые типы)
│
└── lib/
    └── api.ts                  ← переписать (новые функции)
```

---

## 6. Детальное описание ключевых компонентов

### 6.1 `useQuizState.ts` — хук управления состоянием (САМЫЙ ВАЖНЫЙ)

```typescript
'use client';

import { useState, useCallback, useEffect } from 'react';
import { QuizNode, QuizResult, QuizState } from '@/app/types';
import { getStartNode, getNodeById, getNextOptions, getResultByNodeId } from '@/app/lib/api';

export function useQuizState() {
  const [state, setState] = useState<QuizState>({
    currentNode: null,
    options: [],
    path: [],
    isComplete: false,
    result: null,
    isLoading: false,
  });

  // Загрузка стартового узла
  const startQuiz = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    const startNode = await getStartNode();
    if (startNode) {
      const options = await getNextOptions(startNode.id);
      setState({
        currentNode: startNode,
        options,
        path: [startNode],
        isComplete: false,
        result: null,
        isLoading: false,
      });
    }
  }, []);

  // Выбор варианта
  const selectOption = useCallback(async (nodeId: string) => {
    setState(prev => ({ ...prev, isLoading: true }));

    const selectedNode = await getNodeById(nodeId);
    if (!selectedNode) return;

    // Загружаем детей выбранного узла
    const children = await getNextOptions(nodeId);

    if (children.length === 0) {
      // ЛИСТ ГРАФА — конец квиза!
      const result = await getResultByNodeId(nodeId);
      setState(prev => ({
        ...prev,
        currentNode: selectedNode,
        path: [...prev.path, selectedNode],
        isComplete: true,
        result,
        isLoading: false,
      }));
    } else {
      // Есть куда идти дальше
      setState(prev => ({
        ...prev,
        currentNode: selectedNode,
        options: children,
        path: [...prev.path, selectedNode],
        isLoading: false,
      }));
    }
  }, []);

  // Назад
  const goBack = useCallback(() => {
    setState(prev => {
      if (prev.path.length <= 1) return prev; // нельзя назад от start

      const newPath = prev.path.slice(0, -1);
      const previousNode = newPath[newPath.length - 1];

      // Перезагружаем опции для предыдущего узла
      getNextOptions(previousNode.id).then(options => {
        setState(p => ({ ...p, options }));
      });

      return {
        ...prev,
        currentNode: previousNode,
        path: newPath,
        isComplete: false,
        result: null,
      };
    });
  }, []);

  // Сброс в начало
  const reset = useCallback(() => {
    setState({
      currentNode: null,
      options: [],
      path: [],
      isComplete: false,
      result: null,
      isLoading: false,
    });
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    if (state.path.length > 0) {
      localStorage.setItem('quiz_progress', JSON.stringify({
        pathSlugs: state.path.map(n => n.slug),
        isComplete: state.isComplete,
      }));
    }
  }, [state.path, state.isComplete]);

  return {
    ...state,
    startQuiz,
    selectOption,
    goBack,
    reset,
  };
}
```

**Ключевой момент:** `selectOption` проверяет `children.length === 0`. Если детей нет — это автоматически конец, независимо от того, на каком по счёту шаге мы находимся.

### 6.2 `QuestionScreen.tsx` — экран вопроса (повторяется N раз)

```tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { QuizNode } from '@/app/types';
import { QuizOptionCard } from '@/app/components/QuizOptionCard';
import { QuizProgress } from '@/app/components/QuizProgress';
import { QuizNavigation } from '@/app/components/QuizNavigation';

interface QuestionScreenProps {
  node: QuizNode;
  options: QuizNode[];
  path: QuizNode[];
  onSelect: (nodeId: string) => void;
  onBack: () => void;
  onReset: () => void;
}

export function QuestionScreen({ 
  node, 
  options, 
  path, 
  onSelect, 
  onBack, 
  onReset 
}: QuestionScreenProps) {
  return (
    <motion.div
      key={node.id}  // ключ меняется при смене узла → анимация
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      {/* Прогресс: текущий шаг / примерная глубина */}
      <QuizProgress 
        currentStep={path.length} 
        totalSteps={path.length + 1}  // примерно, можно убрать
      />

      {/* Заголовок вопроса */}
      <h1 className="text-display text-center mb-2 text-white">
        {node.label}
      </h1>
      {node.description && (
        <p className="text-body text-center mb-8 text-white/70">
          {node.description}
        </p>
      )}

      {/* Сетка вариантов — адаптируется под количество */}
      <div className={`
        grid gap-4 max-w-5xl w-full
        ${options.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : ''}
        ${options.length === 3 ? 'grid-cols-1 md:grid-cols-3' : ''}
        ${options.length === 4 ? 'grid-cols-2 md:grid-cols-4' : ''}
        ${options.length >= 5 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' : ''}
      `}>
        <AnimatePresence mode="popLayout">
          {options.map((option, i) => (
            <QuizOptionCard
              key={option.id}
              node={option}
              index={i}
              onSelect={() => onSelect(option.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Навигация */}
      <QuizNavigation
        canGoBack={path.length > 1}
        onBack={onBack}
        onReset={onReset}
      />
    </motion.div>
  );
}
```

**Ключевой момент:** `key={node.id}` на `motion.div` — при смене узла Framer Motion автоматически запускает анимацию выхода/входа. Этот компонент **монтируется заново** на каждом шаге, независимо от того, 3-й это шаг или 15-й.

### 6.3 `QuizOptionCard.tsx` — карточка варианта

```tsx
'use client';

import { motion } from 'framer-motion';
import { QuizNode } from '@/app/types';

interface QuizOptionCardProps {
  node: QuizNode;
  index: number;
  onSelect: () => void;
}

export function QuizOptionCard({ node, index, onSelect }: QuizOptionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
      className="liquid-glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer min-h-[180px] transition-shadow hover:shadow-lg"
    >
      {node.icon && (
        <span className="text-5xl">{node.icon}</span>
      )}
      <span className="text-title text-center text-white">{node.label}</span>
      {node.description && (
        <span className="text-caption text-center text-white/60">{node.description}</span>
      )}
    </motion.button>
  );
}
```

### 6.4 `page.tsx` — единая точка входа

```tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useQuizState } from '@/app/hooks/useQuizState';
import { WelcomeScreen } from '@/app/sections/WelcomeScreen';
import { QuestionScreen } from '@/app/sections/QuestionScreen';
import { ResultScreen } from '@/app/sections/ResultScreen';
import { BackgroundMedia } from '@/app/components/BackgroundMedia';

export default function Home() {
  const { 
    currentNode, 
    options, 
    path, 
    isComplete, 
    result,
    isLoading,
    startQuiz, 
    selectOption, 
    goBack, 
    reset 
  } = useQuizState();

  // Определяем текущий экран (3 типа, не фиксированное количество)
  const screenType = !currentNode 
    ? 'welcome' 
    : isComplete 
      ? 'result' 
      : 'question';

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Фоновое видео/изображение — меняется при смене узла */}
      <BackgroundMedia 
        videoUrl={currentNode?.video_url}
        imageUrl={currentNode?.image_url}
        isTransitioning={isLoading}
      />

      {/* Контент с анимацией переходов */}
      <AnimatePresence mode="wait">
        {screenType === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onStart={startQuiz} />
          </motion.div>
        )}

        {screenType === 'question' && currentNode && (
          <QuestionScreen
            key={currentNode.id}  // важно: ключ меняется при смене узла
            node={currentNode}
            options={options}
            path={path}
            onSelect={selectOption}
            onBack={goBack}
            onReset={reset}
          />
        )}

        {screenType === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ResultScreen
              result={result}
              path={path}
              onReset={reset}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
```

**Ключевой момент:** `AnimatePresence mode="wait"` с `key` на каждом экране. При смене `screenType` или `currentNode.id` старый экран анимируется выход, новый — вход. Это работает для **любого количества шагов**.

---

## 7. Flow пользователя (динамический)

### Пример 1: Квиз из 3 шагов (короткий)

```
[WELCOME]
    ↓ (startQuiz)
[QUESTION: start] → выбираем "gender_m"
    ↓ (selectOption → children.length > 0)
[QUESTION: gender_m] → выбираем "scenario_home"
    ↓ (selectOption → children.length > 0)
[QUESTION: scenario_home] → выбираем "company_with_kids"
    ↓ (selectOption → children.length === 0! ЛИСТ!)
[RESULT] → показываем видео для company_with_kids
    ↓ (reset)
[WELCOME]
```

### Пример 2: Квиз из 5 шагов (полный путь через subgender)

```
[WELCOME]
    ↓
[QUESTION: start] → "gender_m"
    ↓
[QUESTION: gender_m] → "scenario_home"
    ↓
[QUESTION: scenario_home] → "company_alone"
    ↓
[QUESTION: company_alone] → "subgender_male"
    ↓ (selectOption → children.length === 0! ЛИСТ!)
[RESULT] → показываем видео для subgender_male
```

### Пример 3: Добавили новый уровень (без изменения кода!)

В БД добавляем:
- `quiz_nodes`: `time_morning`, `time_evening` (category: time)
- `quiz_edges`: `subgender_male → time_morning`, `subgender_male → time_evening`
- `quiz_edges`: `time_morning → result_xxx` (новый лист)
- `quiz_results`: новая запись для `time_morning`

```
... (те же 4 шага)
[QUESTION: subgender_male] → "time_morning"
    ↓ (selectOption → children.length === 0! ЛИСТ!)
[RESULT] → показываем видео
```

Квиз автоматически стал на 1 шаг длиннее. **Код не менялся.**

---

## 8. Анимации и переходы

### 8.1 Между шагами question (универсальная)

```
Пользователь кликает карточку
    │
    ├──► Карточка: scale(1.05) + glow (200ms)
    ├──► Все карточки: fade out + slide down (300ms)
    ├──► BackgroundMedia: crossfade к новому фону (500ms)
    ├──► Заголовок: fade out → change text → fade in (400ms)
    └──► Новые карточки: stagger fade in + slide up (300ms each, 50ms delay)
```

Реализация через `key={currentNode.id}` в `QuestionScreen` — Framer Motion делает всё автоматически.

### 8.2 Переход к результату

```
Последний выбор (лист графа)
    │
    ├──► Все UI элементы: fade out (400ms)
    ├──► Background: fade to black (500ms)
    ├──► Показать ResultScreen: fade in (600ms)
    └──► Автостарт видео (после готовности плеера)
```

### 8.3 Техническая реализация

```tsx
// AnimatePresence для enter/exit анимаций
<AnimatePresence mode="wait">
  <motion.div
    key={currentNodeId}  // ключ меняется → триггерит анимацию
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

---

## 9. Адаптация стилей Liquid Glass

### 9.1 Что оставить без изменений

- CSS-переменные темы (light/dark)
- Классы `.liquid-glass`, `.liquid-glass-strong`, `.liquid-glass-dark`
- Типографика (display, headline, title, body, caption, micro)
- Кнопки `.btn-liquid`, `.btn-liquid-filled`

### 9.2 Что адаптировать

**Карточки вариантов** (новый компонент):
```css
.quiz-option-card {
  @apply liquid-glass;
  @apply rounded-2xl;
  @apply p-6;
  @apply flex flex-col items-center justify-center;
  @apply gap-3;
  @apply cursor-pointer;
  @apply transition-all duration-200;
  @apply min-h-[160px];
}

.quiz-option-card:hover {
  @apply liquid-glass-strong;
  @apply scale-105;
  @apply shadow-lg;
}

.quiz-option-card:active {
  @apply scale-95;
}

.quiz-option-card .icon {
  @apply text-4xl;
}

.quiz-option-card .label {
  @apply text-title;
  @apply text-center;
}
```

**Прогресс-индикатор** (новый компонент):
```css
.quiz-progress {
  @apply flex gap-2;
}

.quiz-progress-dot {
  @apply w-2 h-2 rounded-full;
  @apply bg-white/20;
  @apply transition-all duration-300;
}

.quiz-progress-dot.active {
  @apply bg-white;
  @apply w-6;  /* расширяется */
}

.quiz-progress-dot.completed {
  @apply bg-white/60;
}
```

---

## 10. Управление состоянием (State Management)

### 10.1 Локальное состояние (достаточно для MVP)

```typescript
// app/hooks/useQuizState.ts

const [state, setState] = useState<QuizState>({
  currentNode: null,
  options: [],
  path: [],
  isComplete: false,
  result: null,
  isLoading: false,
});

// Сохранение в localStorage (восстановление при перезагрузке)
useEffect(() => {
  const saved = localStorage.getItem('quiz_progress');
  if (saved) {
    const { pathSlugs, isComplete } = JSON.parse(saved);
    // Восстанавливаем: загружаем узлы по slug'ам
    restoreSession(pathSlugs, isComplete);
  }
}, []);

useEffect(() => {
  if (state.path.length > 0) {
    localStorage.setItem('quiz_progress', JSON.stringify({
      pathSlugs: state.path.map(n => n.slug),
      isComplete: state.isComplete,
    }));
  }
}, [state.path, state.isComplete]);
```

### 10.2 URL-состояние (опционально, для шеринга)

```typescript
// Кодировать путь в URL hash
// example.com/#path=gender_m,scenario_home,company_alone,subgender_male

useEffect(() => {
  const hash = state.path.map(n => n.slug).join(',');
  window.location.hash = hash ? `path=${hash}` : '';
}, [state.path]);
```

---

## 11. Edge Cases и обработка ошибок

| Сценарий | Обработка |
|----------|-----------|
| Пользователь обновил страницу на середине | Восстановить из localStorage |
| Пользователь вручную изменил URL | Валидировать путь, если невалиден — сбросить |
| Узел не имеет исходящих связей (лист) | Считать result, попытаться найти видео |
| У узла есть дети, но ни один не active | Показать "Нет доступных вариантов" + кнопку назад |
| Видео не загрузилось | Показать fallback (картинка + кнопка "Повторить") |
| Нет интернета | Кэшировать узлы в localStorage, показывать offline-сообщение |
| Пользователь жмёт "Назад" на первом шаге | Игнорировать или показать "Вы уверены, что хотите выйти?" |
| Результат не найден для листа | Показать "Видео в разработке" + кнопку "Попробовать другой путь" |
| Граф зациклен (ошибка данных) | Ограничить глубину path (например, 50 шагов), потом сброс |

---

## 12. Чеклист для агента

### Фаза 1: Подготовка БД
- [ ] Создать таблицы `quiz_nodes`, `quiz_edges`, `quiz_results`
- [ ] Заполнить `quiz_nodes` (13 узлов: start, gender×2, scenario×5, company×3, subgender×2)
- [ ] Заполнить `quiz_edges` (29 связей)
- [ ] Заполнить `quiz_results` (4 результата для листов)
- [ ] Проверить связи через SQL-запросы
- [ ] Убедиться что листы графа (без исходящих связей) имеют результаты

### Фаза 2: API-слой
- [ ] Переписать `app/types/index.ts`
- [ ] Переписать `app/lib/api.ts`
- [ ] Удалить старые функции
- [ ] Добавить новые функции (getNodeById, getNextOptions, getResultByNodeId, getStartNode)
- [ ] Протестировать API

### Фаза 3: Хук состояния
- [ ] Создать `useQuizState.ts`
- [ ] Реализовать startQuiz
- [ ] Реализовать selectOption (с проверкой children.length === 0)
- [ ] Реализовать goBack
- [ ] Реализовать reset
- [ ] Добавить localStorage
- [ ] Протестировать на графе разной глубины

### Фаза 4: Компоненты
- [ ] Создать `QuizOptionCard.tsx`
- [ ] Создать `QuizProgress.tsx`
- [ ] Создать `QuizNavigation.tsx`
- [ ] Создать `BackgroundMedia.tsx`
- [ ] Создать `ResultPlayer.tsx`
- [ ] Адаптировать `VideoPlayer.tsx` для fullscreen

### Фаза 5: Экраны
- [ ] Создать `WelcomeScreen.tsx`
- [ ] Создать `QuestionScreen.tsx` (key={node.id} для анимаций)
- [ ] Создать `ResultScreen.tsx`

### Фаза 6: Главная страница
- [ ] Переписать `app/page.tsx`
- [ ] Удалить `app/sections/Categories.tsx`
- [ ] Удалить `app/sections/Player.tsx`
- [ ] Удалить `app/components/Header.tsx`
- [ ] Удалить `app/components/CategoryCard.tsx`
- [ ] Удалить `app/components/VideoList.tsx`

### Фаза 7: Стили
- [ ] Добавить стили для `.quiz-option-card`
- [ ] Добавить стили для `.quiz-progress`
- [ ] Проверить адаптивность
- [ ] Проверить тёмную тему

### Фаза 8: Анимации
- [ ] Добавить Framer Motion
- [ ] Реализовать переходы между шагами (AnimatePresence + key)
- [ ] Реализовать hover-эффекты карточек
- [ ] Реализовать переход к результату

### Фаза 9: Тестирование гибкости графа
- [ ] Пройти полный путь квиза (5 шагов: start→gender→scenario→company→subgender)
- [ ] Пройти короткий путь (3 шага: start→gender→scenario→company_with_kids)
- [ ] Добавить тестовый узел в БД (новый уровень)
- [ ] Убедиться что квиз автоматически стал длиннее
- [ ] Удалить тестовый узел
- [ ] Убедиться что квиз вернулся к исходной длине
- [ ] Проверить кнопку "Назад" на разных шагах
- [ ] Проверить кнопку "В начало"
- [ ] Проверить восстановление после обновления
- [ ] Проверить мобильную версию
- [ ] Проверить тёмную/светлую тему

---

## 13. Пример данных для тестирования

### Текущий граф (13 узлов, 29 связей, 4 результата):

```
start (Кто вы?)
├── М
│   ├── Возвращение домой
│   │   ├── Один/Одна → мужчина → [ВИДЕО: final-home-alone-male.mp4]
│   │   ├── Один/Одна → женщина → [ВИДЕО: final-home-alone-female.mp4]
│   │   ├── С детьми → [ВИДЕО: final-home-kids.mp4]
│   │   └── Пара → [ВИДЕО: final-home-couple.mp4]
│   ├── Утро внутри природы → [та же структура company]
│   ├── Гости без хлопот → [та же структура company]
│   ├── Вечер на высоте → [та же структура company]
│   └── Свой круг → [та же структура company]
└── Ж → [та же структура]
```

### Тестовые пути:

| Путь | Шагов | Результат |
|------|-------|-----------|
| start → М → Возвращение домой → С детьми | 3 | `company_with_kids` |
| start → М → Возвращение домой → Один/Одна → мужчина | 4 | `subgender_male` |
| start → Ж → Утро в природе → Пара | 3 | `company_couple` |
| start → М → Гости без хлопот → Один/Одна → женщина | 4 | `subgender_female` |

---

## 14. Вопросы для уточнения (задать заказчику)

1. **Нужна ли аналитика?** (какие пути самые популярные, где бросают)
2. **Нужен ли A/B тест?** (разные видео на один путь)
3. **Мобильная версия:** карточки в 1 колонку или 2?
4. **Переходные видео:** между шагами показывать видео-луп или просто анимацию?
5. **Звук:** фоновая музыка во время квиза или только в видео?
6. **Шеринг:** нужна ли кнопка "Поделиться результатом"?
7. **Авторизация:** нужен ли личный кабинет с историей прохождений?
8. **Прогресс:** показывать "Шаг 3 из 7" или просто точки без цифр?
9. **Возврат:** кнопка "Назад" на каждом шаге или только на некоторых?

---

## 15. Пример структуры финального `page.tsx`

```tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useQuizState } from '@/app/hooks/useQuizState';
import { WelcomeScreen } from '@/app/sections/WelcomeScreen';
import { QuestionScreen } from '@/app/sections/QuestionScreen';
import { ResultScreen } from '@/app/sections/ResultScreen';
import { BackgroundMedia } from '@/app/components/BackgroundMedia';

export default function Home() {
  const { 
    currentNode, 
    options, 
    path, 
    isComplete, 
    result,
    isLoading,
    startQuiz, 
    selectOption, 
    goBack, 
    reset 
  } = useQuizState();

  // 3 типа экрана, не фиксированное количество
  const screenType = !currentNode 
    ? 'welcome' 
    : isComplete 
      ? 'result' 
      : 'question';

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Фоновое видео/изображение */}
      <BackgroundMedia 
        videoUrl={currentNode?.video_url}
        imageUrl={currentNode?.image_url}
        isTransitioning={isLoading}
      />

      {/* Контент с анимацией переходов */}
      <AnimatePresence mode="wait">
        {screenType === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onStart={startQuiz} />
          </motion.div>
        )}

        {screenType === 'question' && currentNode && (
          <QuestionScreen
            key={currentNode.id}  // анимация при смене узла
            node={currentNode}
            options={options}
            path={path}
            onSelect={selectOption}
            onBack={goBack}
            onReset={reset}
          />
        )}

        {screenType === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ResultScreen
              result={result}
              path={path}
              onReset={reset}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
```

---

**Конец гайда.**
