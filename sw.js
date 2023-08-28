self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./style.css", "./images/icons8-check-96.png",
             "./images/icons8-todo-list-arcade-96.png", 
             "./images/icons8-uncheck-all-96.png"]);
        })
    );
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});