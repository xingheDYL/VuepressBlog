//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'frontend/reco-info',
                'frontend/vuepress-plugin-boxx',
            ]
        },
        {
            title: '后端 Back-end',
            collapsable: true,
            children: [
                'backend/ArrayList',
                'backend/HashMap',
                'backend/itext',
                'backend/EasyExcel',
                'backend/java_io模型',
            ]
        },
        {
            title: '随笔 Essay',
            collapsable: true,
            children: []
        }

    ]
}