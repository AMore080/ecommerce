const { StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/client/public/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Implement asset caching
registerRoute(
  //callback function to filter requests (JS, CSS files) to be cached (Unit 28) 
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    // cache storage name.
    cacheName: 'asset-cache',
    plugins: [
      // This plugin will cache responses with these headers to a maximum-age of 30 days unit 28
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);