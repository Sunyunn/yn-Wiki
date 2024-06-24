const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'yu',
  //tagline: '',
  url: 'https://yn-wiki.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Sunyunn', // Usually your GitHub org/user name.
  projectName: 'myWiki', // Usually your repo name.
  customFields: { // 自定义字段
    bio: '居安思危，善假于物',
    description:
      '是一个由宇宁创建的个人博客，主要分享编程开发知识，该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。'
  }, 
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Sunyunn/myWiki/tree/main/yn-wiki/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Sunyunn/myWiki/tree/main/yn-wiki/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'author',
          content: '宇宁',
        },
        {
          name: 'keywords',
          content: 'blog, javascript, web, layui, java, mysql, oracle',
        },
        {
          name: 'keywords',
          content: '后端开发者, 面向全栈, 收藏者, 记录者',
        },
      ],
      navbar: {
        title: '宇宁',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,// 把导航栏样式设置为静态,而不禁用主题切换能力
        items: [
          {to: '/blog/archive', label: '博客', position: 'right'},
          {to: '/docs/skill', label: '笔记', position: 'right'},
          {
            label: '更多',
            position: 'right',
            items: [
              { label: '友链 宇豪',href: 'https://huhohoo.com'},
              { label: 'Follow 张旭乾', href: 'https://zxuqian.cn'},
              { label: 'Follow 愧怍', href: 'https://kuizuo.cn'}
            ]
          }
          // ,{
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '学习',
            items: [
              {
                label: '笔记',
                to: '/docs/skill',
              },
            ],
          },
          {
            title: '社交',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Sunyunn/yn-Wiki',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              }
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 宇宁, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // giscus 评论功能
      giscus:{
        repo:'Sunyunn/yn-Wiki',
        repoId:'R_kgDOMCmV6Q',
        category:'General',
        categoryId:'DIC_kwDOMCmV6c4CgVeg'
      }
    }),
});
