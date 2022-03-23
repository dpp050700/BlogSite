module.exports = {
  dest: 'dist',
  title: '此间少年',
  description: '我的个人博客',
  head: [
    ['link', { rel: 'icon', href: '/icon.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    navbar:[ // 导航栏配置
      {text: 'JavaScript', link: '/javascript/prototype/' },
      {text: 'Vue', link: '/vue/'},
      {text: 'React', link: '/react/'}      
    ],
    sidebar: {
      '/javascript/': [
        {
          text: 'JavaScript',
          children: [
            {
              text: '原型原型链',
              link: '/javascript/prototype/'
            },
            {
              text: '继承',
              link: '/javascript/继承/'
            }
          ],
        }
      ],
      '/interview/': [
        {
          text: '面试记录',
          children: [
            {
              text: 'XXX公司',
              link: '/interview/A'
            },
          ]
          // link: '/javascript/prototype/'
        }
      ]
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
}