// Service Worker Glossa — СГЕНЕРИРОВАН tools/build-sw.mjs, не редактируйте вручную.
// Стратегия: cache-first для всего приложения; новые версии — по сообщению SKIP_WAITING из приложения.
const VERSION = 'ea9f32970cf7';
const CACHE = `glossa-${VERSION}`;
const PRECACHE = [
  "./",
  "./css/app.css",
  "./css/dev.css",
  "./css/style-b.css",
  "./css/style-c.css",
  "./css/sync.css",
  "./css/tokens.css",
  "./data/ang/index.js",
  "./data/ang/u01.ex.js",
  "./data/ang/u01.js",
  "./data/ang/u02.ex.js",
  "./data/ang/u02.js",
  "./data/ang/u03.ex.js",
  "./data/ang/u03.js",
  "./data/ang/u04.ex.js",
  "./data/ang/u04.js",
  "./data/ang/u05.ex.js",
  "./data/ang/u05.js",
  "./data/ang/u06.ex.js",
  "./data/ang/u06.js",
  "./data/ang/u07.ex.js",
  "./data/ang/u07.js",
  "./data/ang/u08.ex.js",
  "./data/ang/u08.js",
  "./data/courses.js",
  "./data/demo/index.js",
  "./data/demo/u01.ex.js",
  "./data/demo/u01.js",
  "./data/it/index.js",
  "./data/it/u01.ex.js",
  "./data/it/u01.js",
  "./data/it/u02.ex.js",
  "./data/it/u02.js",
  "./data/it/u03.ex.js",
  "./data/it/u03.js",
  "./data/it/u04.ex.js",
  "./data/it/u04.js",
  "./data/it/u05.ex.js",
  "./data/it/u05.js",
  "./data/it/u06.ex.js",
  "./data/it/u06.js",
  "./data/it/u07.ex.js",
  "./data/it/u07.js",
  "./data/it/u08.ex.js",
  "./data/it/u08.js",
  "./data/la/index.js",
  "./data/la/u01.ex.js",
  "./data/la/u01.js",
  "./data/la/u02.ex.js",
  "./data/la/u02.js",
  "./data/la/u03.ex.js",
  "./data/la/u03.js",
  "./data/la/u04.ex.js",
  "./data/la/u04.js",
  "./data/la/u05.ex.js",
  "./data/la/u05.js",
  "./data/la/u06.ex.js",
  "./data/la/u06.js",
  "./data/la/u07.ex.js",
  "./data/la/u07.js",
  "./data/la/u08.ex.js",
  "./data/la/u08.js",
  "./data/nb/index.js",
  "./data/nb/u01.ex.js",
  "./data/nb/u01.js",
  "./data/nb/u02.ex.js",
  "./data/nb/u02.js",
  "./data/nb/u03.ex.js",
  "./data/nb/u03.js",
  "./data/nb/u04.ex.js",
  "./data/nb/u04.js",
  "./data/nb/u05.ex.js",
  "./data/nb/u05.js",
  "./data/nb/u06.ex.js",
  "./data/nb/u06.js",
  "./data/nb/u07.ex.js",
  "./data/nb/u07.js",
  "./data/nb/u08.ex.js",
  "./data/nb/u08.js",
  "./data/pedagogy.js",
  "./data/sr/index.js",
  "./data/sr/u01.ex.js",
  "./data/sr/u01.js",
  "./data/sr/u02.ex.js",
  "./data/sr/u02.js",
  "./data/sr/u03.ex.js",
  "./data/sr/u03.js",
  "./data/sr/u04.ex.js",
  "./data/sr/u04.js",
  "./data/sr/u05.ex.js",
  "./data/sr/u05.js",
  "./data/sr/u06.ex.js",
  "./data/sr/u06.js",
  "./data/sr/u07.ex.js",
  "./data/sr/u07.js",
  "./data/sr/u08.ex.js",
  "./data/sr/u08.js",
  "./data/sr/u09.ex.js",
  "./data/sr/u09.js",
  "./data/sr/u10.ex.js",
  "./data/sr/u10.js",
  "./data/sync.js",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/icon-maskable.svg",
  "./icons/icon.svg",
  "./index.html",
  "./js/answer.js",
  "./js/app.js",
  "./js/config.js",
  "./js/courses.js",
  "./js/dom.js",
  "./js/exercises/autogen.js",
  "./js/exercises/choice.js",
  "./js/exercises/classify.js",
  "./js/exercises/cloze.js",
  "./js/exercises/common.js",
  "./js/exercises/fix.js",
  "./js/exercises/flashcard.js",
  "./js/exercises/index.js",
  "./js/exercises/match.js",
  "./js/exercises/order.js",
  "./js/exercises/paradigm.js",
  "./js/exercises/transform.js",
  "./js/exercises/translate.js",
  "./js/filelist.js",
  "./js/gamify.js",
  "./js/markup.js",
  "./js/mastery.js",
  "./js/merge.js",
  "./js/progress.js",
  "./js/qr.js",
  "./js/router.js",
  "./js/session.js",
  "./js/srs.js",
  "./js/store.js",
  "./js/sync.js",
  "./js/tts.js",
  "./js/ui.js",
  "./js/util.js",
  "./js/views/common.js",
  "./js/views/course.js",
  "./js/views/home.js",
  "./js/views/lesson-intro.js",
  "./js/views/profile.js",
  "./js/views/review.js",
  "./js/views/session.js",
  "./js/views/sync-section.js",
  "./js/views/theory.js",
  "./js/views/vocab.js",
  "./js/views/words.js",
  "./js/words.js",
  "./manifest.webmanifest"
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // по одному: отсутствие одного файла не должно ломать установку
    await Promise.all(PRECACHE.map((url) => cache.add(new Request(url, { cache: 'reload' })).catch((err) => console.warn('[sw] не закэширован', url, err))));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key.startsWith('glossa-') && key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // навигация (в т. ч. ?demo=1): всегда оболочка index.html из кэша
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      return (await cache.match('./index.html')) || (await cache.match('./')) || fetch(req);
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const res = await fetch(req);
      // докэшируем то, что появилось после сборки (например, новый файл курса)
      if (res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    } catch (err) {
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});
