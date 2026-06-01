# Meshchersky 1 — Видеоплатформа

Каталог видео-контента с категориями (сценариями), кастомным видеоплеером и дизайн-системой «Liquid Glass». Сборка — статический экспорт (SSG), данные хранятся в Supabase (PostgreSQL + Storage).

---

## 🚀 Технологический стек

| Технология | Назначение |
|------------|------------|
| **Next.js 16** (App Router) | Фреймворк. Режим сборки — `output: "export"` (статический HTML) |
| **React 19** | UI-библиотека |
| **TypeScript** | Типизация |
| **Tailwind CSS 3** | Утилитарные стили |
| **Supabase** | База данных (PostgreSQL) + файловое хранилище для видео/изображений |
| **Lucide React** | Иконки |
| **Bun** | Пакетный менеджер и рантайм |

---

## 📁 Структура проекта

```
app/
├── components/          # Переиспользуемые React-компоненты
│   ├── CategoryCard.tsx    # Карточка категории в сетке
│   ├── Header.tsx          # Шапка (логотип, навигация, поиск, тема)
│   ├── Logo.tsx            # SVG-логотипы (Monogram + Text)
│   ├── ThemeToggle.tsx     # Переключатель светлой/тёмной темы
│   ├── VideoList.tsx       # Плейлист (список видео справа от плеера)
│   └── VideoPlayer.tsx     # Кастомный HTML5-видеоплеер с контролами
├── context/
│   └── ThemeContext.tsx    # React Context для темы (light/dark) + localStorage
├── lib/
│   ├── api.ts              # Все запросы к Supabase (БД + Storage)
│   └── supabase.ts         # Инициализация клиента Supabase
├── sections/            # Секции главной страницы
│   ├── Categories.tsx      # Сетка категорий (загрузка из Supabase)
│   ├── Footer.tsx          # Подвал
│   ├── Hero.tsx            # Геро-секция с Bento-гридом и фоновым видео
│   └── Player.tsx          # Секция плеера + плейлиста
├── types/
│   └── index.ts            # TypeScript-интерфейсы (Scenario, Video, Photo)
├── globals.css             # Глобальные стили + дизайн-система «Liquid Glass»
├── layout.tsx              # Корневой layout (шрифт Inter, метаданные SEO)
└── page.tsx                # Главная страница (состояние фильтров + поиска)
public/                    # Статические файлы (видео, изображения)
next.config.ts             # Конфиг Next.js (статический экспорт)
tailwind.config.ts         # Конфиг Tailwind
```

---

## 🏛️ Архитектура приложения

Главная страница (`page.tsx`) управляет двумя глобальными состояниями:
- `activeCategory` — ID выбранной категории (сценария)
- `searchQuery` — текст поиска по видео

```
page.tsx (activeCategory, searchQuery)
└── ThemeProvider
    └── PageContent
        ├── Header          ← searchQuery (поисковый ввод)
        ├── Hero            ← статическая секция
        ├── Categories      ← activeCategory (выбор/сброс категории)
        ├── Player          ← activeCategory + searchQuery (плеер + плейлист)
        └── Footer          ← статическая секция
```

---

## 🧩 Описание компонентов и секций

### Секции (`app/sections/`)

| Компонент | Тип | Описание |
|-----------|-----|----------|
| **Hero.tsx** | Server Component | Фоновое видео `forest.mp4` + Bento-грид из стеклянных карточек: заголовок, CTA, превью видео, статистика, быстрые ссылки, логотип |
| **Categories.tsx** | Client Component | Загружает сценарии из Supabase (`getScenarios`). Скелетон-загрузка. Горизонтальная сетка. Кнопка «All» для сброса фильтра |
| **Player.tsx** | Client Component | Загружает видео из Supabase. Фильтрация по категории + поиск. Двухколоночный layout: плеер слева, плейлист справа |
| **Footer.tsx** | Server Component | Логотип, навигация, копирайт |

### Компоненты (`app/components/`)

| Компонент | Тип | Описание |
|-----------|-----|----------|
| **Header.tsx** | Client Component | Fixed-шапка. Логотип, навигация (Home / Scenarios / Video), раскрывающийся поиск, переключатель темы |
| **CategoryCard.tsx** | Client Component | Карточка с изображением из Supabase Storage или иконкой (Users, Heart, Building2, TrendingUp, TreePine). Поддержка active-статуса |
| **VideoPlayer.tsx** | Client Component | Кастомные HTML5-контролы: Play/Pause, прогресс-бар (с перемоткой), громкость (слайдер), Mute, Fullscreen. Автоскрытие контролов через 4 сек |
| **VideoList.tsx** | Client Component | Вертикальный скроллируемый плейлист. Миниатюры, индикатор активного трека, длительность MM:SS |
| **ThemeToggle.tsx** | Client Component | Кнопка Sun/Moon через `useTheme()`. SSR-safe (mounted-защита) |
| **Logo.tsx** | Client Component | Два SVG-логотипа: `LogoMonogram` (круг с M) и `LogoText` (M + декоративная линия) |

---

## 🔌 API-слой (`app/lib/api.ts`)

Все обращения к Supabase централизованы в одном файле:

| Функция | Описание |
|---------|----------|
| `getScenarios()` | Все активные сценарии, сортировка по `order_index` |
| `getScenarioBySlug(slug)` | Один сценарий по slug |
| `getVideosByScenario(id)` | Активные видео конкретного сценария |
| `getAllVideos()` | Все активные видео |
| `getPhotosByScenario(id)` | Активные фото сценария |
| `getVideoUrl(path)` | Публичный URL из Storage (bucket `videos`) |
| `getThumbnailUrl(path)` | Публичный URL из Storage (bucket `thumbnails`) |
| `getImageUrl(path)` | Публичный URL из Storage (bucket `photos`) |

Клиент Supabase инициализируется в `app/lib/supabase.ts` из переменных окружения.

---

## 🗄️ Схема базы данных (Supabase)

Таблицы:

### `scenarios` — Категории/сценарии
| Поле | Тип | Описание |
|------|-----|----------|
| `id` | uuid | PK |
| `title` | text | Название категории |
| `slug` | text | URL-идентификатор |
| `description` | text | Описание |
| `image_path` | text | Путь к изображению в Storage (bucket `photos`) |
| `icon_name` | text | Название иконки (users, heart, building2, trendingUp, treePine) |
| `ambient_audio_path` | text | Путь к фоновому аудио |
| `order_index` | int | Порядок сортировки |
| `active` | boolean | Видимость |
| `created_at` | timestamptz | Дата создания |

### `videos` — Видео
| Поле | Тип | Описание |
|------|-----|----------|
| `id` | uuid | PK |
| `scenario_id` | uuid | FK → scenarios |
| `title` | text | Название |
| `subtitle` | text | Подзаголовок |
| `storage_path` | text | Путь в Storage (bucket `videos`) |
| `thumbnail_path` | text | Путь к превью (bucket `thumbnails`) |
| `duration_sec` | int | Длительность в секундах |
| `highlights` | text[] | Таймкоды/моменты |
| `order_index` | int | Порядок |
| `active` | boolean | Видимость |
| `created_at` | timestamptz | Дата создания |

### `photos` — Фотографии
| Поле | Тип | Описание |
|------|-----|----------|
| `id` | uuid | PK |
| `scenario_id` | uuid | FK → scenarios |
| `title` | text | Название |
| `subtitle` | text | Подзаголовок |
| `storage_path` | text | Путь в Storage |
| `order_index` | int | Порядок |
| `active` | boolean | Видимость |
| `created_at` | timestamptz | Дата создания |

---

## ⚙️ Переменные окружения

Создай файл `.env.local` в корне (есть пример `.env.local.example`):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

> `NEXT_PUBLIC_` означает, что переменные доступны на клиенте. Используйте только публичный анонимный ключ.

---

## 🎨 Дизайн-система «Liquid Glass»

Реализована в `globals.css`:

- **CSS-переменные** для светлой/тёмной темы (через `data-theme="dark"` на `<html>`)
- **4 варианта стекла**:
  - `.liquid-glass` — стандартное
  - `.liquid-glass-strong` — насыщенное
  - `.liquid-glass-dark` — тёмное
  - `.icon-glass` — для иконок
- **Типографика**: display / headline / title / body / caption / micro
- **Кнопки**: `.btn-liquid`, `.btn-liquid-filled`
- **Прогресс-бар**: `.progress-glass-track`

Переключение темы сохраняется в `localStorage` (ключ `mesh-theme`).

---

## 🖥️ Локальный запуск

### Установка зависимостей

```bash
bun install
```

### Запуск dev-сервера

```bash
bun run dev
```

Открой http://localhost:3000

### Сборка проекта

```bash
bun run build
```

Результат сборки — статические файлы в папке `dist/` (указано в `next.config.ts`).

### Доступные скрипты

| Скрипт | Команда | Описание |
|--------|---------|----------|
| `dev` | `next dev` | Dev-сервер с hot reload |
| `build` | `next build` | Сборка статического экспорта |
| `start` | `next start` | Запуск production-сервера (не используется при SSG) |
| `lint` | `next lint` | Проверка ESLint |

---

## ⚠️ Известные ограничения

1. **Статическая сборка** (`output: "export"`) — нет API Routes, нет серверного рендеринга в runtime.
2. **Статистика в Hero** — значения (`6 videos`, `46K views`) захардкожены, не связаны с реальными данными БД.
3. **Нефункциональные кнопки плеера** — `SkipForward` и `Settings2` пока не реализованы.
4. **Ссылки в Footer** — About, Contacts, Privacy не ведут на реальные страницы (нет роутов).
5. **Поиск** — фильтрует только по `title` видео, по `subtitle` поиск не работает.
6. **Изображения** — оптимизация Next.js отключена (`images.unoptimized: true`), необходимо для статического экспорта.

---

## 📄 Лицензия

Приватный проект.
