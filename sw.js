// Пустой сервис-воркер: нужен только для установки приложения.
// Ничего не кэширует, страницы всегда берутся из сети, поэтому обновления приходят сразу.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});
self.addEventListener('fetch', function () {});
