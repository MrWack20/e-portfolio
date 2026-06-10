// Joaquin Hao Portfolio — Service Worker
// Stale-while-revalidate: serve cache instantly, refresh in background.

const CACHE = 'jah-v1';

const PRECACHE = [
  '/',
  '/index.html',
  '/about.html',
  '/projects.html',
  '/contact.html',
  '/data/portfolio.js',
  '/scripts/shared.js',
  '/scripts/home.js',
  '/scripts/about.js',
  '/scripts/projects.js',
  '/scripts/contact.js',
  '/styles/tokens.css',
  '/styles/home.css',
  '/styles/about.css',
  '/styles/projects.css',
  '/styles/contact.css',
  '/styles/ost.css',
  '/assets/portrait.jpg',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
];

// Install — pre-cache core shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activate — clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — stale-while-revalidate for same-origin requests
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(e.request);

      // Always kick off a network refresh in the background
      const fresh = fetch(e.request).then(res => {
        if (res.ok) cache.put(e.request, res.clone());
        return res;
      }).catch(() => null);

      // Return cached immediately if available, else wait for network
      return cached || fresh;
    })
  );
});
