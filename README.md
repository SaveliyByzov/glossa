# Glossa

Офлайн-тренажёр грамматики и лексики: норвежский (букмол), латынь, древнеанглийский, итальянский, сербский.
Одна кодовая база — PWA на чистых HTML + CSS + ES-модулях, без сборки и без зависимостей.
Работает в браузере, ставится на телефон «как приложение» и собирается в APK / iOS-приложение через Capacitor.

Документы: [CONTRACT.md](CONTRACT.md) (архитектура и схема данных), [docs/PEDAGOGY.md](docs/PEDAGOGY.md) (методика),
[docs/DESIGN.md](docs/DESIGN.md) (дизайн-система), `docs/linguistics/` (курсы).

---

## Запуск локально

Нужен любой статический сервер (ES-модули и Service Worker не работают с `file://`).

```bash
# вариант 1 — Node (без установки пакетов; отдаёт файлы с Cache-Control: no-cache — удобно при разработке)
npm run serve            # = node tools/serve.mjs 8080

# вариант 2 — npx serve
npx serve .

# вариант 3 — Python
python -m http.server 8080
```

Откройте <http://localhost:8080/>. Демо-курс для отладки (все блоки теории и все 9 типов упражнений) —
<http://localhost:8080/?demo=1> (флаг живёт до закрытия вкладки; `?demo=0` — выключить).

### После правок файлов

Service Worker отдаёт всё из кэша (cache-first), поэтому после изменения кода или данных пересоберите его:

```bash
npm run build:sw         # = node tools/build-sw.mjs
```

Скрипт сканирует `index.html`, `manifest.webmanifest`, `css/`, `js/`, `data/`, `icons/`, прописывает список в
`sw.js` и ставит версию кэша = хэш содержимого. Открытое приложение покажет тост «Доступна новая версия» → «Обновить».
Заодно генерируется `js/filelist.js` — список файлов `data/`, чтобы движок подтягивал `uNN.ex.js` без лишних 404.

### Проверки

```bash
npm test                 # node:test: проверка ответов, SRS, разметка, мастерство/серия/XP, валидатор
npm run validate         # валидатор всех курсов: node tools/validate.mjs [nb la …] [--strict]
```

Валидатор проверяет схему `data/<lang>/*.js` по контракту: уникальность id (юниты, уроки, лексемы), типы блоков
теории, все 9 типов упражнений (индексы `answer`, число `___` = числу `answers`, `blanks` внутри таблицы и не в
колонке меток, `wrong` внутри `tokens`, корзины `classify`, `alt` у `order`), ссылки на навыки, незакрытую разметку
и то, что каждый эталонный ответ засчитывается самим движком.

---

## Установка на телефон (PWA)

PWA ставится только с адреса **https** (или `localhost`), поэтому для телефона приложение нужно где-то опубликовать —
см. «Бесплатный хостинг» ниже. После первого открытия всё кэшируется и работает без интернета.

**iPhone / iPad (Safari):** откройте адрес → кнопка «Поделиться» → **«На экран „Домой“»** → «Добавить».
Приложение запускается с иконки, во весь экран, полностью офлайн.

**Android (Chrome):** откройте адрес → меню ⋮ → **«Установить приложение»** (или баннер «Добавить на главный экран»).

### Бесплатный хостинг

* **GitHub Pages:** создайте репозиторий, загрузите файлы проекта (папки `docs/`, `design/`, `tests/`, `tools/`
  не мешают, но можно и не загружать) → Settings → Pages → Source: *Deploy from a branch*, ветка `main`, папка `/ (root)`.
  Через минуту приложение доступно по `https://<логин>.github.io/<репозиторий>/`. Все пути в приложении относительные.
* **Netlify:** <https://app.netlify.com/drop> — перетащите папку проекта (или `www/` после `npm run build:www`) в окно
  браузера. Получите адрес вида `https://<имя>.netlify.app`.

Перед публикацией выполните `npm run build:sw`, чтобы `sw.js` знал актуальные файлы.

---

## Нативные приложения (Capacitor)

Capacitor оборачивает ту же веб-версию в нативную оболочку. Веб-файлы копируются в `www/` скриптом
`tools/build-www.mjs` (он же пересобирает `sw.js`). Конфигурация — `capacitor.config.json` (`webDir: "www"`).

Один раз:

```bash
npm install                       # @capacitor/cli, core, android, ios
npm run build:www
npx cap add android               # создаст папку android/
npx cap add ios                   # создаст папку ios/ (только на Mac)
```

### APK для Android (Windows / macOS / Linux)

1. Установите [Android Studio](https://developer.android.com/studio) (с ним ставятся SDK и JDK).
2. `npm run cap:android` — соберёт `www/`, синхронизирует и откроет проект в Android Studio.
3. В Android Studio: **Build → Build App Bundle(s) / APK(s) → Build APK(s)**.
   Готовый файл: `android/app/build/outputs/apk/debug/app-debug.apk` — скопируйте на телефон и установите
   (разрешите установку из неизвестных источников). Для Google Play — *Generate Signed App Bundle*.

### iOS (нужен Mac с Xcode)

1. Установите Xcode из App Store и CocoaPods (`sudo gem install cocoapods`).
2. `npm run cap:ios` — соберёт `www/`, синхронизирует и откроет проект в Xcode.
3. В Xcode выберите свою команду (Signing & Capabilities → Team; подойдёт бесплатный Apple ID),
   подключите iPhone и нажмите ▶ Run. Для App Store — Product → Archive.

После любых изменений веб-части: `npm run cap:sync` (или `cap:android` / `cap:ios`).

---

## Перенос прогресса

Прогресс хранится локально в браузере/приложении (`localStorage`, ключ `glossa:v1`).
Чтобы перенести его на другое устройство или из браузера в установленное приложение:

1. **Профиль → Резервная копия → Экспорт** — скачается файл `glossa-progress-ГГГГ-ММ-ДД.json`.
2. Передайте файл на другое устройство (облако, почта, мессенджер).
3. Там: **Профиль → Импорт** → выберите файл → подтвердите замену.

Формат файла версионирован (`version`), старые копии автоматически мигрируются. Делайте экспорт перед очисткой
данных браузера: «очистить историю/данные сайтов» удаляет и прогресс.

---

## Устройство кода

```
index.html, manifest.webmanifest, sw.js (генерируется), icons/
css/tokens.css, css/app.css      — дизайн-система (UI/UX); css/dev.css — временные мелочи разработчика
data/courses.js                  — реестр курсов; data/<lang>/index.js, uNN.js, uNN.ex.js — курсы
data/pedagogy.js                 — параметры XP, серии, SRS, мастерства, достижений
js/app.js                        — оболочка, маршруты, регистрация SW
js/router.js store.js config.js courses.js markup.js answer.js srs.js mastery.js gamify.js
js/session.js progress.js tts.js ui.js dom.js util.js
js/exercises/<type>.js           — 9 типов упражнений + autogen.js (упражнения из лексики)
js/views/*.js                    — экраны: home, course, lesson-intro, session (+ результат), review, vocab, profile
tools/                           — build-sw, build-www, serve, validate, make-icons.py
tests/                           — node:test
```

Клавиатура на десктопе: **1–9** — вариант/плитка/корзина, **Enter** — проверить/дальше, **Backspace** — убрать
последнюю плитку, **Esc** — выйти из сессии. Кнопки спецсимволов над полем; **Shift+клик** — заглавная буква.
