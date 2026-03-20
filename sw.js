// CS Wi-Fi — Service Worker
// Versão do cache — incrementar ao atualizar o app
const CACHE_VERSION = 'cswifi-v1';
const CACHE_ASSETS  = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// Instala e armazena assets no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      return cache.addAll(CACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Limpa caches antigos ao ativar nova versão
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Estratégia: Network First com fallback para cache
// Garante dados atualizados quando online, funciona offline
self.addEventListener('fetch', event => {
  // Ignora requisições para APIs externas e speedtest
  const url = event.request.url;
  if (url.includes('script.google.com') ||
      url.includes('speed.cloudflare.com') ||
      url.includes(':8080') ||
      url.includes('speedtest')) {
    return; // deixa passar sem cache
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Atualiza cache com versão mais recente
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Offline: serve do cache
        return caches.match(event.request).then(cached => {
          return cached || caches.match('/index.html');
        });
      })
  );
});
