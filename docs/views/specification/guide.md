---
title: XINGHE GUIDE
date: 2020-03-26
tags:
 - vuepress
categories:
 - 规范 Standard
isShowComments: true
sidebar: false
publish: true
sticky: 1
---

<Boxx/>

开始使用此博客的一些注意事项和说明。

[[toc]]

<!-- more -->

# xinghe

<p align="center">
   <a href="https://zpj80231.github.io/znote/views/specification/guide.html" target="_blank"><img alt="Read the Docs" src="https://img.shields.io/badge/Docs-GetStarted-red?style=flat-square&logo=buffer"></a>
   <a href="https://github.com/zpj80231/znote" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-znote-d05577?style=flat-square&logo=github"></a>
   <br/>
   <a href="https://github.com/vuejs/vuepress" target="_blank"><img alt="VuePress" src="https://img.shields.io/badge/VuePress-build-05a564?style=flat-square&logo=vue.js"></a>
   <a href="https://github.com/vuepress-reco/vuepress-theme-reco" target="_blank"><img alt="Reco" src="https://img.shields.io/badge/Reco-theme-137cbd?style=flat-square&logo=vue.js"></a>
   <br/>
   <a href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="CC4.0 BY-SA" src="https://img.shields.io/static/v1?label=CC%20%204.0&message=BY-SA&color=yellow&style=flat-square"></a>
   <a href="LICENSE"><img alt="LICENSE" src="https://img.shields.io/badge/License-MIT-orange?style=flat-square"></a>
   <br/>
   <a href="https://zpj80231.gitee.io/znote/"><img alt="znote site" src="https://img.shields.io/badge/znote-pages-a06bc1?style=flat-square&logo=zulip"></a>
</p>

- 本仓库由vuepress和主题reco自我美化构建而来，代码使用 [MIT](https://github.com/SigureMo/notev/blob/master/LICENSE) 协议进行开源<br/>
但是全部文档内容使用 [CC 4.0 BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) 协议进行发布（注明出处）

- 已全局适配`手机模式`和`暗黑模式（iOS自适应）`请自行体验

- 国内访问：[https://xinghedyl.gitee.io/vuepress/](https://xinghedyl.gitee.io/vuepress/) 速度加载会快一点

![](/vuepress/znote.png)

## 项目介绍

- 知识点复习和面试总结（不断完善中，欢迎加入！）
- 技术栈知识点笔记总结（知识小结）
- 个人牢骚发布点（生活随笔）
- 其它...

## 项目架构

- 采用vuepress和主题reco构建

```lua
##需要自己写主题样式的话，在.vuepress/ 下新建theme文件夹并按如下目录布局
Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├── theme  // 主题
│   │    │   ├── components // 组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── layouts // 布局(包括首页在内)
│   │    │   ├── styles  // 样式
│   │    │   ├── util 	 // 工具
│   │    │   ├── index.js // 入口配置
│   │    │   ├── noopModule.js // 依赖注入
│   │    │   ├── package.json  // 主题依赖
│   │    │   ├── README.md     // 主题说明
│   │    └── config.js
│   ├── about   // 项目模块
│   ├── views   // 项目模块
│   └── README.md   // 首页
└── package.json //项目依赖
```

## 项目运行

- 在项目文件夹下执行命令，加载依赖：`npm install`
- 在项目文件夹下执行命令，运行项目：`npm run docs:dev`
- 待启动成功后打开地址即可：[http://localhost:8080/](http://localhost:8080/)

## 开始编写markdown

- 参考示例：

```yaml
---
title: 文章标题
date: 2020-02-02
tags:
 - 标签
categories:
 - 分类
keys:
 - '123456' //文章加密密码
sticky: 1   //文章置顶 1, 2, 3, ...
isShowComments: false //是否开启评论
publish: true //文章是否发布
---

<Boxx/> //随机展示名人名言

[[toc]] //目录链接

- 这里可以写`摘要`等其它

<!-- more --> //在<!-- more -->之前的内容会展示为文章摘要

## 正式开始你的markdown

- I am the text...
```

## 写在最后

如果在博客中遇到什么问题，不要一上来就问我，我对那些不经过自己思考的人（即抛出没有价值的问题）很反感，毕竟只有自己淌过的坑才能深入理解、印象深刻。

当然，遇到一些`有价值`的问题，还是欢迎来找我共同进步滴😉~~

关于如何提问，在 github 中这个项目可以说是相当 nice 了，可以的话一定要过一遍，于人于己都有莫大的好处：[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)

在 blog 搭建中遇到问题，推荐先去以下几个网址找答案：

- vuepress官网：[https://vuepress.vuejs.org/zh/](https://vuepress.vuejs.org/zh/)
- vuepress自定义开发主题：[https://vuepress.vuejs.org/zh/theme/writing-a-theme.html](https://vuepress.vuejs.org/zh/theme/writing-a-theme.html)
- vuepress-theme-reco官网：[https://vuepress-theme-reco.recoluan.com/](https://vuepress-theme-reco.recoluan.com/)

## 关于友链

近期也发现有好些人要加 [友链](/other/friends.html) 的，在这里我也说一下吧：

你可以复用我的blog，但是`需要在你的 blog 创新一些东西`，尽量体现自己独特的创意或价值，然后俺给你加友链。毕竟千篇一律的友链没有必要是吧！


*Thanks for you!*

<Reward/>
