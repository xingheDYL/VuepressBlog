//导航栏
module.exports = [
    { text: '主页', link: '/index.html', icon: 'reco-home' },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    {
        text: '其它',
        icon: 'reco-document',
        items: [{
            text: 'Projects🎈',
            items: [{
                text: 'My Project',
                link: '/other/project',
            }]
        }, {
            text: 'Common sites🎈',
            items: [{
                    text: '✔ 友 链 →',
                    link: '/other/friends',
                },
                {
                    text: 'Java 8 API Documentation',
                    link: 'https://docs.oracle.com/javase/8/docs/api/index.html',
                },
                {
                    text: 'Spring',
                    link: 'https://spring.io/',
                },
                {
                    text: 'Stackoverflow',
                    link: 'https://stackoverflow.com/',
                },
                {
                    text: 'LeetCode',
                    link: 'https://leetcode.cn/',
                },
                {
                    text: 'Vue.js',
                    link: 'https://cn.vuejs.org/',
                },
                {
                    text: 'Linux命令大全',
                    link: 'https://www.linuxcool.com/',
                },
            ]
        }, ]
    },
    { text: '关于我', link: '/about/', icon: 'reco-message' }
]