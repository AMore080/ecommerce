const CodeMovie = "code-movie-site-v1"
const assets = [
  "/",
  "/index.html",
  "/styles/App.css",
  "/styles/index.css",
  "/js/app.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CodeMovie).then(cache => {
      cache.addAll(assets)
    })
  )
})