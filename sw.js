const CACHE='nethsara-ani-subs-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json'])));self.skipWaiting();});
self.addEventListener('fetch',e=>{ if(e.request.url.includes('firestore')||e.request.url.includes('firebase')||e.request.url.includes('googleapis')) return; e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html')))); });
