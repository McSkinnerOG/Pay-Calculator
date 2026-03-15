const CACHE = "pay-calculator-v3";

const FILES = [
"/",
"/index.html",
"/manifest.json"
];
self.addEventListener("activate", event => {

  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();

});
self.addEventListener("install", e => {

e.waitUntil(
caches.open(CACHE)
.then(cache => cache.addAll(FILES))
);

});

self.addEventListener("fetch", e => {

e.respondWith(
caches.match(e.request)
.then(res => res || fetch(e.request))
);

});
