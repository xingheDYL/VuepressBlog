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
    "revision": "cb806501eeda7c618eb0aadf39df36b0"
  },
  {
    "url": "about/index.html",
    "revision": "79a5e1165fba7863896679bd042ad0c0"
  },
  {
    "url": "assets/css/0.styles.fd593ea1.css",
    "revision": "7af2fa1f174d99e9af67b6e6ef9aa748"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.714973c6.js",
    "revision": "17d8c933420c1daf85aff78566a3b9bf"
  },
  {
    "url": "assets/js/10.605c97c5.js",
    "revision": "42c850f884c1c41f6babadad5aa755e2"
  },
  {
    "url": "assets/js/11.cda2d4c5.js",
    "revision": "8671c0c1f35a74ca85a4beb955e9f484"
  },
  {
    "url": "assets/js/12.d2795b04.js",
    "revision": "661e2982df69ccca18e2d47b7d207f0c"
  },
  {
    "url": "assets/js/13.e6741c2c.js",
    "revision": "5e5aca342d5d816ccf83832c351ff06a"
  },
  {
    "url": "assets/js/14.f19691cf.js",
    "revision": "f29dfc41d70948b8249f5b445c2784b6"
  },
  {
    "url": "assets/js/15.b95992e0.js",
    "revision": "5bd5710243a2020452beecb6f60d135a"
  },
  {
    "url": "assets/js/16.51ed07e4.js",
    "revision": "8d7cf32f138958f352269bc338f10aa1"
  },
  {
    "url": "assets/js/17.88abbad4.js",
    "revision": "ee6db050f12e780c11a8c825e10764f5"
  },
  {
    "url": "assets/js/18.6d2e8a9a.js",
    "revision": "554a65a7ef178a2e8627e1486394e7a3"
  },
  {
    "url": "assets/js/19.5521dfa2.js",
    "revision": "b31ed10d0908075f2bb4adc53f723522"
  },
  {
    "url": "assets/js/2.f88cd517.js",
    "revision": "007c1b83890cd74cde3d6849d9a70a51"
  },
  {
    "url": "assets/js/20.e4d9feb9.js",
    "revision": "92654598a45bf7b538c4a4f98174e3a4"
  },
  {
    "url": "assets/js/21.3f0b20dd.js",
    "revision": "dc8e7ffe74babb0fc2ddf1fc5a989af4"
  },
  {
    "url": "assets/js/22.b5e558a9.js",
    "revision": "9889759f2bbf569ce791b3dbe5096bde"
  },
  {
    "url": "assets/js/23.cc010548.js",
    "revision": "b78fb89fb604ab3166dbaffa2b21758f"
  },
  {
    "url": "assets/js/24.ab034ce7.js",
    "revision": "de053c8b4270b34dc11f2a42b696c9b9"
  },
  {
    "url": "assets/js/25.601a7591.js",
    "revision": "6329f1f2bfe4b53b9e1a23ba3fe72f63"
  },
  {
    "url": "assets/js/26.eaf8deb7.js",
    "revision": "12f9a95fbf7a7127f736147a6a26e8c2"
  },
  {
    "url": "assets/js/27.50666a73.js",
    "revision": "325c72296ca2eb8fea6b1727ca97a387"
  },
  {
    "url": "assets/js/28.e94c6413.js",
    "revision": "dfc5bbcff03b85b2e2afa54d3ad83703"
  },
  {
    "url": "assets/js/29.f7bc3208.js",
    "revision": "36447a1822eacac153c46e23399c1e16"
  },
  {
    "url": "assets/js/30.048cbda5.js",
    "revision": "1294cb0dd8ec00af31eaa277279e8ec6"
  },
  {
    "url": "assets/js/31.0a8ad341.js",
    "revision": "2c29a18e8d45473b8e9ea5bceb901b96"
  },
  {
    "url": "assets/js/32.4ef01622.js",
    "revision": "35965c3f3a8f465fb4a3b44b9df59a7b"
  },
  {
    "url": "assets/js/33.3cddd142.js",
    "revision": "41847d15faca41c36b1bd5e0912189c5"
  },
  {
    "url": "assets/js/34.2bc803f4.js",
    "revision": "5cfe336c2b219173dd326476eb0244eb"
  },
  {
    "url": "assets/js/4.d42d0f8e.js",
    "revision": "43a66eb4fe90df3cef32324aeda15589"
  },
  {
    "url": "assets/js/5.f0cbd4a3.js",
    "revision": "ed4be0714962b922793a27bd8814b9bd"
  },
  {
    "url": "assets/js/6.93e05c27.js",
    "revision": "aa919f87ad931ca1a0f39956a159c250"
  },
  {
    "url": "assets/js/7.a3c0d9f8.js",
    "revision": "ccfe17c16cc76e4fd52ae3f9dddf7160"
  },
  {
    "url": "assets/js/8.9f15368b.js",
    "revision": "a00557863d74ca797c30128ef4742008"
  },
  {
    "url": "assets/js/9.d33723a1.js",
    "revision": "2ab7216f9fb840891d49e469d2393b4d"
  },
  {
    "url": "assets/js/app.6f7503cd.js",
    "revision": "4d6d9817e8437fd443f4320801e386aa"
  },
  {
    "url": "avatar.png",
    "revision": "a89678ac9563b06f54a6f278daa49de9"
  },
  {
    "url": "categories/index.html",
    "revision": "8e36db6a0697c6dce81ccd6276f867dc"
  },
  {
    "url": "categories/前端 Front-end/index.html",
    "revision": "6772269d0855774b6396592025c025e5"
  },
  {
    "url": "categories/后端 Back-end/index.html",
    "revision": "ec0290b97f63d671e5cca4ac7b7d36f7"
  },
  {
    "url": "categories/规范 Standard/index.html",
    "revision": "ccad14323384ddcee6373fb38ae88f85"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "index.html",
    "revision": "3d052493e73c68af99dbc7793e27d2ed"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "1accd5b8cf6b247868929f2e98b6812c"
  },
  {
    "url": "logo.png",
    "revision": "75a7175d16facb204b22f536bb9bb289"
  },
  {
    "url": "other/friends.html",
    "revision": "b92f6b246cac5b37a2efbc46cffeecc4"
  },
  {
    "url": "other/project.html",
    "revision": "43248a80a91b2b059e56da62a6bb807c"
  },
  {
    "url": "tag/index.html",
    "revision": "89258130f87002957e2b3a2663dadd08"
  },
  {
    "url": "tag/IO模型/index.html",
    "revision": "dc68f0aa3560544efd58a409cca230d3"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "274e02decb5ee3f86ce86847cdd4477f"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "40e7658cdaca766716e164b623714f0d"
  },
  {
    "url": "tag/poi/index.html",
    "revision": "891c1c10c16386ee6ed2f151b2f5d8ca"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "240d24dd4cace4de42d732b115c1e9b5"
  },
  {
    "url": "tag/分布式/index.html",
    "revision": "563d844ef0f7900614ab7a8a4434f960"
  },
  {
    "url": "tag/源码分析/index.html",
    "revision": "ceeb5875ce940b51791e600faba42db7"
  },
  {
    "url": "timeline/index.html",
    "revision": "08e35f5fb85905c94cd9ef051845dc02"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "views/backend/ArrayList.html",
    "revision": "d5075ff415aed2bb246a2e042bf59325"
  },
  {
    "url": "views/backend/EasyExcel.html",
    "revision": "8455f561ff32853406321ffe0d0eb23d"
  },
  {
    "url": "views/backend/HashMap.html",
    "revision": "1fff80cf8bb8ea5d4bc8bc4e9324df4c"
  },
  {
    "url": "views/backend/itext.html",
    "revision": "657a20be7ee051e2eb36b254adb073ac"
  },
  {
    "url": "views/backend/java_io模型.html",
    "revision": "b5700797ded3e05be73abce510514f3b"
  },
  {
    "url": "views/frontend/reco-info.html",
    "revision": "6b13ef903d9298f4870e1a159586468f"
  },
  {
    "url": "views/frontend/vuepress-plugin-boxx.html",
    "revision": "507ac0a3c78ea35acf36211cbd9dd98e"
  },
  {
    "url": "views/index.html",
    "revision": "ca6f384ab385d7df653e7f362c43d5af"
  },
  {
    "url": "views/specification/guide.html",
    "revision": "31d8da67b765345a0d8bc98a6747ce3e"
  },
  {
    "url": "vuepress/android-chrome-192x192.png",
    "revision": "c9e32c4dc8764cfc7e5b7a13771a2f14"
  },
  {
    "url": "vuepress/android-chrome-512x512.png",
    "revision": "dc6d4703b55a3a4273fe1b906f022563"
  },
  {
    "url": "vuepress/apple-touch-icon-120x120.png",
    "revision": "aca5f9ce7aff36245ae262dff595d0de"
  },
  {
    "url": "vuepress/apple-touch-icon-152x152.png",
    "revision": "4a999ef21d86256ea277b2f23bd0bd4a"
  },
  {
    "url": "vuepress/apple-touch-icon-180x180.png",
    "revision": "b1bffec5d656865886b7336a59a94401"
  },
  {
    "url": "vuepress/apple-touch-icon-57x57.png",
    "revision": "7ae9f6028ae7e58e784f7f006c1b1902"
  },
  {
    "url": "vuepress/apple-touch-icon-60x60.png",
    "revision": "ccba5c67847684194179d64aa996a781"
  },
  {
    "url": "vuepress/apple-touch-icon-72x72.png",
    "revision": "6f63676dd29d51891e9a9921947c77bf"
  },
  {
    "url": "vuepress/apple-touch-icon-76x76.png",
    "revision": "cc4159e14bf07dac50be9a1b3d05ec09"
  },
  {
    "url": "vuepress/apple-touch-icon.png",
    "revision": "b1bffec5d656865886b7336a59a94401"
  },
  {
    "url": "vuepress/favicon-16x16.png",
    "revision": "a95d55ee9164ac2d295287f577fc9caf"
  },
  {
    "url": "vuepress/favicon-32x32.png",
    "revision": "c3d1d95b9b8c82e14083eeb7a62da466"
  },
  {
    "url": "vuepress/msapplication-icon-144x144.png",
    "revision": "0495b48d6df2671dcd9cca864ea69934"
  },
  {
    "url": "vuepress/safari-pinned-tab.svg",
    "revision": "da18cbd56328aea79d471efbee77ba53"
  },
  {
    "url": "xinghe.png",
    "revision": "57d9b1b699a244f00f610ab201dc0554"
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
