# Meshchersky 1 — Адаптивный Квиз (Video Guide)

## Описание проекта

Пошаговый видео-квиз на графе вопросов произвольной глубины. Пользователь проходит цепочку выборов (пол → сценарий жизни → состав компании → подтип), в конце получает персональное видео. Глубина квиза определяется графом в базе данных, не зашита в код.

**Ключевая фича:** добавление новых уровней вопросов в БД автоматически удлиняет квиз без изменения кода фронтенда.

---

## Технологический стек

| Технология | Версия | Назначение |
|------------|--------|------------|
| Next.js | 16.2.6 | Фреймворк, статический экспорт (`output: "export"`) |
| React | 19 | UI-библиотека |
| TypeScript | 5 | Типизация |
| Tailwind CSS | 3.4.17 | Утилитарные стили |
| Framer Motion | 12.40.0 | Анимации переходов между шагами |
| Supabase | 2.49.0 | PostgreSQL + Storage (видео, иконки, изображения) |
| Lucide React | 0.400.0 | Иконки в системных компонентах |
| Bun | latest | Пакетный менеджер и рантайм |

---

## Структура проекта

```
app/
├── sections/              # Экраны квиза
│   ├── WelcomeScreen.tsx      # Стартовый экран с фонарик-эффектом
│   ├── QuestionScreen.tsx     # Экран вопроса (повторяется N раз)
│   └── ResultScreen.tsx       # Финальное видео + summary пути
│
├── components/            # Переиспользуемые компоненты
│   ├── QuizOptionCard.tsx     # Карточка варианта (Liquid Glass + иконка)
│   ├── QuizProgress.tsx       # Индикатор прогресса (точки)
│   ├── QuizNavigation.tsx     # Кнопки «Назад» / «В начало»
│   ├── BackgroundMedia.tsx    # Фоновое видео/изображение
│   ├── ResultPlayer.tsx       # Кастомный видеоплеер для результата
│   ├── Logo.tsx               # SVG-логотипы (Monogram + Text)
│   └── ThemeToggle.tsx        # Переключатель темы (отключён)
│
├── hooks/
│   └── useQuizState.ts        # Ядро квиза — управление состоянием + localStorage
│
├── context/
│   └── ThemeContext.tsx       # React Context для темы (dark по умолчанию)
│
├── lib/
│   ├── api.ts                 # Все запросы к Supabase
│   └── supabase.ts            # Инициализация клиента Supabase
│
├── types/
│   └── index.ts               # TypeScript-интерфейсы (QuizNode, QuizEdge, QuizResult, QuizState)
│
├── globals.css               # Дизайн-система Liquid Glass + цвета + анимации
├── layout.tsx                # Корневой layout (шрифт Inter, метаданные SEO)
└── page.tsx                  # Главная страница — единый экран с 3 состояниями

public/                        # Статические файлы
├── img-006.jpg               # Фон WelcomeScreen (шишка на сосне)
├── logo-text.svg             # Текстовый логотип
├── monogram.svg              # Монограмма
└── videos/                   # Финальные видео (если не используется Storage)
    ├── final-home-alone-male.mp4
    ├── final-home-alone-female.mp4
    ├── final-home-kids.mp4
    └── final-home-couple.mp4
```

---

## Архитектура приложения

### Главная страница (page.tsx)

Единый экран с тремя состояниями, управляемыми через `useQuizState`:

```
page.tsx
├── BackgroundMedia              ← фоновое видео/изображение текущего узла
├── AnimatePresence (Framer Motion)
│   ├── WelcomeScreen            ← currentNode === null
│   ├── QuestionScreen           ← isComplete === false
│   │   └── QuizOptionCard[]     ← варианты ответа (дети текущего узла)
│   └── ResultScreen             ← isComplete === true
│       └── ResultPlayer         ← персональное видео
└── QuizNavigation               ← «Назад» / «В начало»
```

**Принцип:** нет жёсткого списка экранов. Только 3 типа, переключаемые динамически:
- `!currentNode` → Welcome
- `isComplete` → Result
- иначе → Question (повторяется N раз — определяет граф БД)

### Хук useQuizState (ядро квиза)

| Поле | Тип | Описание |
|------|-----|----------|
| `currentNode` | `QuizNode \| null` | Текущий узел графа |
| `options` | `QuizNode[]` | Дочерние узлы — варианты ответа |
| `path` | `QuizNode[]` | Полная история выборов |
| `isComplete` | `boolean` | Флаг завершения (дошли до листа) |
| `result` | `QuizResult \| null` | Финальное видео |
| `isLoading` | `boolean` | Флаг загрузки |

| Метод | Описание |
|-------|----------|
| `startQuiz()` | Загружает стартовый узел (`slug = 'start'`) и его детей |
| `selectOption(id)` | Выбор варианта → загрузка его детей. Если детей нет — лист, загружает `result` |
| `goBack()` | Возврат на шаг назад по `path` |
| `reset()` | Сброс в начало + очистка `localStorage` |

**Ключевой момент:** `selectOption` проверяет `children.length === 0`. Если детей нет — автоматически конец квиза, независимо от глубины графа.

---

## База данных (Supabase)

### Таблица quiz_nodes — узлы графа

```sql
CREATE TABLE quiz_nodes (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug        TEXT NOT NULL UNIQUE,        -- машинное имя: gender_m, scenario_home
    label       TEXT NOT NULL,               -- текст на кнопке
    type        TEXT NOT NULL,               -- start | question | option | result
    category    TEXT NOT NULL,               -- gender | scenario | company | subgender | result
    icon        TEXT,                        -- путь к SVG или emoji
    image_url   TEXT,                        -- фоновая картинка
    video_url   TEXT,                        -- видео-луп для фона
    description TEXT,                        -- подсказка
    sort_order  INT DEFAULT 0,
    is_active   BOOLEAN DEFAULT true,
    created_at  TIMESTAMPTZ DEFAULT now()
);
```

**Текущие данные:** 13 узлов
- `start` (1) → `gender_m`, `gender_f` (2) → 5 сценариев → 3 company → 2 subgender

### Таблица quiz_edges — связи (ребра графа)

```sql
CREATE TABLE quiz_edges (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    from_node_id UUID NOT NULL REFERENCES quiz_nodes(id) ON DELETE CASCADE,
    to_node_id   UUID NOT NULL REFERENCES quiz_nodes(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ DEFAULT now(),
    UNIQUE(from_node_id, to_node_id)
);
```

**Текущие данные:** 29 связей
- `start` → 2 gender → 10 scenario → 15 company → 2 subgender

**Конец квиза определяется автоматически:** если у узла нет исходящих связей — это лист графа.

### Таблица quiz_results — финальные видео

```sql
CREATE TABLE quiz_results (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node_id     UUID NOT NULL UNIQUE REFERENCES quiz_nodes(id) ON DELETE CASCADE,
    video_url   TEXT NOT NULL,
    poster_url  TEXT,
    path_title  TEXT NOT NULL,               -- "Мужчина, возвращение домой, один, мужчина"
    path_slugs  TEXT[] NOT NULL,             -- ["gender_m", "scenario_home", ...]
    path_hash   TEXT UNIQUE,                 -- md5 для быстрого поиска
    title       TEXT,
    description TEXT,
    duration    INT,
    is_active   BOOLEAN DEFAULT true,
    created_at  TIMESTAMPTZ DEFAULT now()
);
```

**Текущие данные:** 4 результата для листов:
- `subgender_male`, `subgender_female`, `company_with_kids`, `company_couple`

---

## API-слой (lib/api.ts)

### Функции для работы с графом

```typescript
export async function getNodeById(id: string): Promise<QuizNode | null>
export async function getNodeBySlug(slug: string): Promise<QuizNode | null>
export async function getStartNode(): Promise<QuizNode | null>
export async function getNextOptions(nodeId: string): Promise<QuizNode[]>
export async function getResultByNodeId(nodeId: string): Promise<QuizResult | null>
export async function getResultByHash(pathHash: string): Promise<QuizResult | null>
export async function getPathNodes(nodeIds: string[]): Promise<QuizNode[]>
```

### Работа с Storage

```typescript
export function getStorageUrl(bucket: string, path: string): string
// Возвращает: http://supabasekong-.../storage/v1/object/public/{bucket}/{path}
```

---

## Типы данных (types/index.ts)

```typescript
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

export interface QuizState {
  currentNode: QuizNode | null;
  options: QuizNode[];
  path: QuizNode[];
  isComplete: boolean;
  result: QuizResult | null;
  isLoading: boolean;
}
```

---

## Дизайн-система

### Цветовая палитра (globals.css)

| Токен | Hex | Назначение |
|-------|-----|------------|
| `--granite` | `#968766` | Брендовый акцент, кнопки, glow |
| `--bg` | `#28282D` | Anthracite — основной фон |
| `--bg-deep` | `#1E1E22` | Глубокий тёмный |
| `--fg` | `#FFFFFF` | Основной текст |
| `--fg-secondary` | `#AEA79A` | Подписи |
| `--cloudy` | `#AEA79A` | Вторичный текст |
| `--jumbo` | `#898B80` | Третичный текст |

### Liquid Glass (классы)

| Класс | Эффект |
|-------|--------|
| `.liquid-glass` | Стандартное стекло (blur 4px) |
| `.liquid-glass-strong` | Насыщенное (blur 50px) |
| `.liquid-glass-dark` | Тёмное (для контролов плеера) |
| `.icon-glass` | Круглый glass-эффект для иконок |

### Типографика

| Класс | Размер | Назначение |
|-------|--------|------------|
| `.text-display` | 48px / 56px | Заголовки экранов |
| `.text-headline` | 32px / 40px | Подзаголовки |
| `.text-title` | 24px / 32px | Названия карточек |
| `.text-body` | 16px / 24px | Основной текст |
| `.text-caption` | 14px / 20px | Подписи |
| `.text-micro` | 12px / 16px | Мелкий текст |

### Анимации

| Элемент | Технология | Описание |
|---------|------------|----------|
| Переходы экранов | Framer Motion `AnimatePresence` + `key` | Fade/slide при смене экрана |
| Карточки | Framer Motion `stagger` | Появление с задержкой `index * 0.05` |
| Логотип | CSS `@keyframes logoPulse` | Пульсация + blur + glow |
| Фонарик Welcome | `requestAnimationFrame` + lerp | Инерационное следование за курсором (factor 0.08) |

---

## Переменные окружения

Файл `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=http://supabasekong-x7dy6klhbhj9vqfm9zr3b1ky.192.168.1.196.sslip.io
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

> Обе переменные с `NEXT_PUBLIC_` — доступны на клиенте. Используйте только публичный анонимный ключ.

---

## Команды

```bash
bun install          # Установка зависимостей
bun run dev          # Dev-сервер (localhost:3000)
bun run build        # Статическая сборка в dist/
bun run lint         # ESLint
```

---

## Как добавить новый уровень в квиз (без изменения кода)

1. **Создать узлы** в `quiz_nodes`:
```sql
INSERT INTO quiz_nodes (slug, label, type, category, sort_order) VALUES
('new_level_option1', 'Вариант 1', 'option', 'new_category', 1),
('new_level_option2', 'Вариант 2', 'option', 'new_category', 2);
```

2. **Создать связи** в `quiz_edges`:
```sql
INSERT INTO quiz_edges (from_node_id, to_node_id)
SELECT parent.id, child.id
FROM quiz_nodes parent, quiz_nodes child
WHERE parent.slug = 'previous_node' AND child.slug IN ('new_level_option1', 'new_level_option2');
```

3. **Если новый узел — лист** (конец квиза), добавить результат в `quiz_results`:
```sql
INSERT INTO quiz_results (node_id, video_url, path_title, path_slugs, path_hash)
SELECT id, 'videos/final.mp4', 'Путь...', ARRAY['...'], md5('...')
FROM quiz_nodes WHERE slug = 'new_level_option1';
```

4. **Готово** — квиз автоматически станет длиннее на 1 шаг.

---

## Известные ограничения

1. **Статическая сборка** (`output: "export"`) — нет API Routes, нет SSR в runtime
2. **Видеоплеер** — кнопки `SkipForward` и `Settings2` не функциональны (заглушки)
3. **Тема** — жёстко зафиксирована на `dark`. Переключатель есть в коде, но не используется
4. **Framer Motion на мобильных** — может работать менее плавно на слабых устройствах
5. **Supabase Storage** — для статического экспорта все медиа должны быть доступны по публичным URL

---

## Частые задачи

### Добавить новый сценарий
- Добавить узел в `quiz_nodes` (category: 'scenario')
- Связать с `gender_m` и `gender_f` в `quiz_edges`
- Связать с `company_*` в `quiz_edges`
- Добавить 4 результата в `quiz_results` (через company/subgender)

### Изменить фоновое видео шага
- Обновить `video_url` в `quiz_nodes` для нужного узла
- Или загрузить новое видео в Supabase Storage и обновить путь

### Добавить аналитику
- Создать таблицу `quiz_analytics` (session_id, path, completed_at, result_id)
- Добавить запись в `selectOption` при достижении результата

### Добавить A/B тест
- Убрать `UNIQUE` с `node_id` в `quiz_results`
- Добавить поле `variant` (A/B) в `quiz_results`
- В `getResultByNodeId` добавить рандомный выбор варианта

---

## Контакты и ресурсы

- **Проект:** Meshchersky 1 — Видеогид по жилому комплексу
- **Бренд:** adharashop.ru
- **Разработчик:** jmilo
- **Лицензия:** Приватный проект
