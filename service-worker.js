/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "442847ef9233f638c46f7561da1a7c7c"
  },
  {
    "url": "assets/css/0.styles.b50a27c5.css",
    "revision": "7b49e1e0314a884a00ffbb597399b7b2"
  },
  {
    "url": "assets/img/picture.png",
    "revision": "6ba28915f46c646780e3abecb80a78f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.73ddf946.js",
    "revision": "7fbfa425d30b85166dd225cb289fa6cd"
  },
  {
    "url": "assets/js/11.ddc90c29.js",
    "revision": "4b2a698fccff964b01e026773c29e317"
  },
  {
    "url": "assets/js/12.d5d75899.js",
    "revision": "d5bc0f9cf4abc1887a24a7b9aef4d401"
  },
  {
    "url": "assets/js/2.b8fc3024.js",
    "revision": "a1de68825bbe8d952149b7093add7125"
  },
  {
    "url": "assets/js/3.704af2e8.js",
    "revision": "24f609a8cb7fdd365ce6962c865d8d90"
  },
  {
    "url": "assets/js/4.e4a19fdd.js",
    "revision": "d70b79deb027fea2e9f3a36cb13fd9c2"
  },
  {
    "url": "assets/js/5.b400846e.js",
    "revision": "10aac27ae1e5ee66dfcd94704e86a1d7"
  },
  {
    "url": "assets/js/6.48c973a7.js",
    "revision": "f4c360869f000c7546ae5a989308bb9b"
  },
  {
    "url": "assets/js/7.11ac420f.js",
    "revision": "47225cda0635ce9c0e7828746e960470"
  },
  {
    "url": "assets/js/8.b46c469b.js",
    "revision": "36a79d7497010a079bab062912f51518"
  },
  {
    "url": "assets/js/9.ecf706f3.js",
    "revision": "c95320add0d02df64d90aafd80575e2b"
  },
  {
    "url": "assets/js/app.0d175867.js",
    "revision": "d8be6fad38e76744a1590a6cb73b14c5"
  },
  {
    "url": "contributing.html",
    "revision": "e722a07a98cbaab1e24de64ae3d253fa"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5f747c24ae2fb7f8fc30169d0a08c220"
  },
  {
    "url": "guide/index.html",
    "revision": "eafd8afb06ee8e38e3e02ec8b4196d3c"
  },
  {
    "url": "icons/_head.html",
    "revision": "5b7c9ec85076defcc1242542c84093f6"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b7e6580f6c5e76f2493872cd767fec69"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "349f31ba3abee1645b3eb98e86174fc7"
  },
  {
    "url": "icons/android-chrome-maskable-192x192.png",
    "revision": "b7e6580f6c5e76f2493872cd767fec69"
  },
  {
    "url": "icons/android-chrome-maskable-512x512.png",
    "revision": "349f31ba3abee1645b3eb98e86174fc7"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "8a0375cdf26c769285dc51ce0804e3fd"
  },
  {
    "url": "index.html",
    "revision": "0c126b3c8006db6fd51605d768c866a9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
