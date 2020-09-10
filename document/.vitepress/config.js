module.exports = {
  themeConfig: {
    sidebarDepth: 0,
    smoothScroll: true,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '纠正错误',
    repo: "TaleLin/lin-ui",
    docsRepo: "TaleLin/lin-ui-doc",
    docsBranch: 'develop',
    logo: '/images/left-logo.png',
    lastUpdated: '上次更新',
    nav: [{
        text: '介绍',
        link: '/start/'
      },
      {
        text: '入门',
        link: '/index2.html'
      }
    ],
    sidebar: [{
      link: '/start/',
      text: '入门',
      children: [
        {
          link: '/start/',
          text: '快速开始',
        },
        {
          link: '/start/QA',
          text: '常见问题'
        },
        {
          link: '/start/component',
          text: '组件上手'
        },
        {
          link: '/start/event',
          text: '事件'
        },
        {
          link: '/start/class',
          text: '外部样式类使用'
        },
        {
          link: '/start/contribute',
          text: '贡献指南'
        },
        {
          link: '/start/wx',
          text: 'wx.lin使用方法'
        }
      ]
    }]
  }
}