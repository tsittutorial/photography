const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/wedding.html',
  '/about.html',
  '/css/style.css',
  '/css/wedding.css',
  '/css/about.css',
  '/assests/img/logo.png',
  '/assests/img/weddi-logo.png',
  '/assests/img/banner.jpg',
  '/assests/img/engagement.jpeg',
  '/assests/img/wedding.jpeg',
  '/assests/img/mehandi.jpg',
  '/assests/img/half saree.jpeg',
  '/assests/img/baby.webp',
  '/assests/img/birthday.webp',
  '/assests/img/chirstian.webp',
  '/assests/img/pre-wedding.webp',
  '/assests/img/fashion.webp',
  '/assests/img/pic1.jpeg',
  '/assests/img/pic2.jpeg',
  '/assests/img/pic4.jpeg',
  '/assests/img/review.PNG',
  '/assests/img/mirror.jpg',
  '/assests/img/cam.jpg' 
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
