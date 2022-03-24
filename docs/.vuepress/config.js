module.exports = {
  dest: 'dist',
  title: '此间少年',
  description: '我的个人博客',
  head: [
    ['link', { rel: 'icon', href: '/icon.jpeg' }],
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    navbar:[ // 导航栏配置
      {text: 'JavaScript', link: '/javascript/prototype/' },
      {
        text: 'Vue源码分析',
        children: [
          { text: 'vue2.0', link: '/vue/' },
          {text: 'vue3.0', link: '/vueNext/'}
        ]
      },
      {text: 'React源码分析', link: '/react/'}      
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
      '/interviewCompany/': [
        {
          text: '面试记录',
          children: [
            {
              text: 'XXX公司',
              link: '/interviewCompany/company1'
            },
            {
              text: '2公司',
              link: '/interviewCompany/company2'
            },
          ],
        }
      ],
      '/interviewQuestion/': [
        {
          text: '常见面试题',
          children: [
            {
              text: 'HTML',
              link: '/interviewQuestion/html'
            },
            {
              text: 'CSS',
              link: '/interviewQuestion/css'
            },
            {
              text: 'JavaScript',
              link: '/interviewQuestion/javascript'
            },
            {
              text: 'Vue',
              link: '/interviewQuestion/vue'
            },
            {
              text: 'React',
              link: '/interviewQuestion/react'
            },
            {
              text: 'Webpack',
              link: '/interviewQuestion/webpack'
            },
            {
              text: 'HTTP',
              link: '/interviewQuestion/http'
            },
          ],
        }
      ]
    }, // 侧边栏配置
    sidebarDepth: 0, // 侧边栏显示1级
  }
}