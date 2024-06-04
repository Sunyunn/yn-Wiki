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
      '是一个由宇宁创建的个人博客，主要分享编程开发知识，该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。',
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
      // docs: {
      //   sidebar: {
      //     hideable: true,
      //   },
      // },
      navbar: {
        title: '宇宁',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,// 把导航栏样式设置为静态,而不禁用主题切换能力
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '自留教程',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://huhohoo.com',
            label: '友链',
            position: 'left',
          },
          // ,{
          //   href: 'https://github.com/Sunyunn/myWiki',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          // {
          //   label: '更多',
          //   position: 'right',
          //   items: [
          //     { label: '归档', to: 'blog/archive' },
          //     { label: '笔记', to: 'docs/skill' },
          //     { label: '资源', to: 'resources' },
          //     { label: '友链', to: 'friends' },
          //     { label: '工具推荐', to: 'docs/tools' },
          //   ],
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 宇宁, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
