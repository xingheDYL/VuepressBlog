module.exports = [
    ['meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ['meta', {
        name: 'renderer',
        content: 'webkit'
    }],
    ['meta', {
        name: 'referrer',
        content: 'never'
    }],
    ['meta', {
        'data-draft-node': 'block',
        'data-draft-type': 'table',
        'data-size': 'normal',
        'data-row-style': 'normal'
    }],

    ['link', {
        rel: 'icon',
        href: '/logo.png'
    }],
    ['link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/vuepress/favicon-16x16.png'
    }],
    ['link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/vuepress/favicon-32x32.png'
    }],
    ['link', {
        rel: 'mask-icon',
        href: '/vuepress/safari-pinned-tab.svg'
    }],
    ['link', {
        rel: 'manifest',
        href: '/manifest.json'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/vuepress/apple-touch-icon-57x57.png'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/vuepress/apple-touch-icon-60x60.png'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/vuepress/apple-touch-icon-72x72.png'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/vuepress/apple-touch-icon-76x76.png'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/vuepress/apple-touch-icon-120x120.png'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/vuepress/apple-touch-icon-144x144.png'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/vuepress/apple-touch-icon-152x152.png'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/vuepress/apple-touch-icon-180x180.png'
    }],

    ['meta', {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
    }],
    ['meta', {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
    }],
    ['meta', {
        name: 'msapplication-TileImage',
        content: '/vuepress/msapplication-icon-144x144.png'
    }],
    ['meta', {
        name: 'msapplication-TileColor',
        content: '#000000'
    }],

    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?db15e22a7d0dfd0940560fa10024d468";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`],
    ["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
    }],
    // ["script", { "language": "javascript", "type": "text/javascript", "src": "/js/MouseClickEffect.js" }]
]