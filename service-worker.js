self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/wise/',
        '/wise/index.html',
        '/wise/styles.css',
        '/wise/script.js',
        '/wise/images/icons/icon-72x72.png',
        '/wise/images/icons/icon-96x96.png',
        // Добавь сюда остальные ресурсы, которые нужно кэшировать
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
