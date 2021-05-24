/* 监听安装事件，install 事件一般是被用来设置你的浏览器的离线缓存逻辑 */
this.addEventListener("install", function (event) {
  /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
  event.waitUntil(
    /* 创建一个名叫V1的缓存版本 */
    caches
      .open("v1").then(function (cache) {
        /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
        return cache.addAll([
          "./index.html",
          "./images/favicon.ico",
          "./manifest.json",
          "./t.json"
        ])
      })
      .then(() => this.skipWaiting())
  );
});


/* 注册fetch事件，拦截全站的请求 */
this.addEventListener("fetch", function (event) {
  console.log('xxxxx', 222)
  event.respondWith(
    // magic goes here

    /* 在缓存中匹配对应请求资源直接返回 */
    caches.match(event.request)
    // {
    //   ...event.request,
    //   body: 'xxxx'
    // }
  );
});
