import {themes} from 'prism-react-renderer';

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
          //自动生成文章上次修改时间
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Sunyunn/myWiki/tree/main/yn-wiki/blog',
          //自动生成文章上次修改时间
          showLastUpdateTime: true,
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
          // {
          //   label: '更多',
          //   position: 'right',
          //   items: [
          //     { label: '友链 宇豪',href: 'https://huhohoo.com'},
          //   ]
          // }
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
                label: '算法入门',
                to: 'https://www.hello-algo.com/',
              },
            ],
          },
          {
            title: '社交',
            items: [
              { label: '关于我', to: '/aboutMe' },
              {
                label: 'GitHub',
                href: 'https://github.com/Sunyunn/yn-Wiki',
              },
              {
                label: '博客园',
                href: 'https://www.cnblogs.com/synn',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              { label: 'Hohoo\'\s Blog',to: 'https://huhohoo.com'},
              { label: '峰华前端工程师', to: 'https://zxuqian.cn'},
              { label: '愧怍', to: 'https://kuizuo.cn'},
              { label: 'roc 云原生',to: 'https://imroc.cc/'},
            ],
          },
        ],
        copyright: `<p>Copyright © ${new Date().getFullYear()} 宇宁, Inc. Built with Docusaurus.</p>
        <br />本站所有内容遵循 <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans" 
        style="color: hsl(210deg, 100%, 80%)">CC BY-NC 4.0 协议</a>，转载须注明署名和出处，且不可用于商业用途。
        若与其他同步平台协议冲突，以本网站为准。`,
      },
      prism: {
        theme: themes.oneLight,
        darkTheme: themes.oneDark,
      },
      // giscus 评论功能
      giscus:{
        repo:'Sunyunn/yn-Wiki',
        repoId:'R_kgDOMCmV6Q',
        category:'General',
        categoryId:'DIC_kwDOMCmV6c4CgVeg'
      },
      plugins: [
        'docusaurus-plugin-sass'
      ],
    }),
});
