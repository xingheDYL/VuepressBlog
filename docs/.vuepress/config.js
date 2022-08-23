const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')
const headConf = require('./config/head/')
const secret = require("./secret.js");

module.exports = {
    // dest: 'gb-pages',//打包目录
    // base: '/vuepress/',
    title: "星河",
    // description: '给时光以生命，给岁月以文明',
    head: headConf,

    //主题配置
    // theme: '',
    themeConfig: {
        nav,
        // sidebar: 'auto', // 自动形成侧边导航
        sidebar,
        logo: '/avatar.png', //导航栏头像
        // authorAvatar: 'http://qiniu.dyl.fit/blog/avatar.png', //首页右侧头像
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        smoothScroll: true,
        sidebarDepth: 2,
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            }
        },
        // 最后更新时间
        lastUpdated: true,
        lastUpdated: '上次更新',
        // 作者
        author: 'duànyàlóng',
        // 备案号
        record: '皖ICP备2021015742号',
        recordLink: "https://beian.miit.gov.cn/",
        // 项目开始时间
        // startYear: '2022',
        //git地址
        repo: 'xingheDYL/VuepressBlog',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页！',
        //评论
        valineConfig: {
            appId: secret.valineAppId,
            appKey: secret.valineAppKey,
            placeholder: '填写邮箱可以收到回复哦!',
            notify: true, // 邮件提醒
            verify: true, // 验证码
            recordIP: true
        },
    },
    plugins,
    markdown: {
        lineNumbers: true //代码显示行号
    }

}