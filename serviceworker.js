var cacheName = 'catPWAv2';
var filesToCache = ['index.html', 'app.js', 'localforage.js', 'cat.jpg'];

//caches app shell
self.addEventListener('install', function(e){
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache){
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
    })
  );
});

//clears existing cache
self.addEventListener('activate', function(e){
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if (key !== cacheName && key !== dataCachesName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

//fetches files from cache or network
self.addEventListener('fetch', function(e){
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
  );
});
