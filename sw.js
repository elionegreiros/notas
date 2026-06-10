// sw.js - Service Worker para PWA
const CACHE_NAME = 'academic-manager-v2';
const urlsToCache = [
  './',
  './index.html',
  './estilo.css',
  './script.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js'
];

// Instalação
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Cache aberto');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Ativação
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Ativando...');
  event.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map(key => {
      if (key !== CACHE_NAME) {
        console.log('[ServiceWorker] Removendo cache antigo', key);
        return caches.delete(key);
      }
    })))
  );
  self.clients.claim();
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});

// Sincronização em segundo plano
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    console.log('[ServiceWorker] Sincronizando dados...');
    event.waitUntil(syncData());
  }
});

async function syncData() {
  const cache = await caches.open('pending-data');
  const requests = await cache.keys();
  for (const request of requests) {
    const response = await cache.match(request);
    if (response) {
      const data = await response.json();
      console.log('[ServiceWorker] Enviando dados pendentes:', data);
      await cache.delete(request);
    }
  }
}