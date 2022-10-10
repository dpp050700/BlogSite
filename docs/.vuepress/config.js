module.exports = {
  dest: 'dist',
  title: '此间少年',
  description: '我的个人博客',
  head: [
    ['link', { rel: 'icon', href: '/icon.jpeg' }],
  ],
  base: '/BlogSite/',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {
        text: '前端三剑客',
        items: [
          {text: 'HTML', link: '/html/' },
          {text: 'CSS', link: '/css/' },
          {text: 'JavaScript', link: '/javascript/prototype/' },
        ]
      },
      {
        text: 'HTTP',
        link: '/http/'
        // items: [
        //   {text: 'vue2.0', link: '/vue/' },
        //   {text: 'vue3.0', link: '/vueNext/'},
        //   {text: 'React源码分析', link: '/react/'},
        // ]
      },
      {
        text: '前端框架',
        items: [
          {text: 'vue2.0', link: '/vue/' },
          {text: 'vue3.0', link: '/vueNext/'},
          {text: 'React源码分析', link: '/react/'},
        ]
      },
      {
        text: '打包工具',
        items: [
          {text: 'webpack', link: '/webpack/' },
          {text: 'rollup', link: '/rollup/'},
          {text: 'vite', link: '/vite/'},
        ]
      },
      {
        text: '面试分享',
        items: [
          {text: '面试八股文', link: '/interviewQuestion/html/' },
          {text: '面试记录', link: '/interviewCompany/company1/'}
        ]
      },
    ],
    sidebar: {
      '/javascript/': [
        {
          title: 'JavaScript',
          children: [
            {
              title: '原型原型链',
              path: '/javascript/prototype/'
            },
            {
              title: '继承',
              path: '/javascript/extends/'
            },
            {
              title: '作用域',
              path: '/javascript/context/'
            },
            {
              title: '闭包',
              path: '/javascript/closure/'
            },
            {
              title: '变量提升',
              path: '/javascript/hoisting/'
            },
            {
              title: 'this指向',
              path: '/javascript/this/'
            },
            {
              title: '立即执行函数',
              path: '/javascript/IIFE/'
            },
            {
              title: 'instance原理',
              path: '/javascript/instanceof/'
            },
            {
              title: 'bind、apply、call.js',
              path: '/javascript/bind-apply-call/'
            },
            {
              title: '函数柯里化',
              path: '/javascript/curry/'
            },
            {
              title: 'V8垃圾回收机制',
              path: '/javascript/v8/'
            },
            {
              title: '浮点数精度',
              path: '/javascript/float/'
            },
            {
              title: 'new操作符',
              path: '/javascript/new/'
            },
            {
              title: '事件循环机制',
              path: '/javascript/event-loop/'
            },{
              title: 'promise原理',
              path: '/javascript/promise/'
            },
            {
              title: 'generator原理',
              path: '/javascript/generator/'
            }
          ],
        }
      ],
      '/interviewCompany/': [
        {
          title: '面试记录',
          children: [
            {
              title: 'XXX公司',
              path: '/interviewCompany/company1/'
            },
            {
              title: '2公司',
              path: '/interviewCompany/company2/'
            },
          ],
        }
      ],
      '/interviewQuestion/': [
        {
          title: '常见面试题',
          children: [
            {
              title: 'HTML',
              path: '/interviewQuestion/html/'
            },
            {
              title: 'CSS',
              path: '/interviewQuestion/css/'
            },
            {
              title: 'JavaScript',
              path: '/interviewQuestion/javascript/'
            },
            {
              title: 'Vue',
              path: '/interviewQuestion/vue/'
            },
            {
              title: 'React',
              path: '/interviewQuestion/react/'
            },
            {
              title: 'Webpack',
              path: '/interviewQuestion/webpack/'
            },
            {
              title: 'HTTP',
              path: '/interviewQuestion/http/'
            },
            {
              title: '手撕代码',
              path: '/interviewQuestion/code/'
            },
            {
              title: '手撕算法',
              path: '/interviewQuestion/algorithm/'
            },
          ],
        }
      ],
      '/vue/': [
        {
          title: '数据驱动',
          collapsable: false,
          children: [
              ['data-driven/', 'Introduction'],
              'data-driven/new-vue'
          ]
        }
      ]
    }, // 侧边栏配置
    sidebarDepth: 0, // 侧边栏显示1级
  }
}