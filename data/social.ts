export type Social = {
    github?: string
    email?: string
  }
  
  type SocialValue = {
    href?: string
    title: string
    icon: string
    color: string
  }
  
  const social: Social = {
    github: 'https://github.com/Sunyunn',
    email: 'm15189788652@163.com',
  }
  
  const socialSet: Record<keyof Social | 'rss', SocialValue> = {
    github: {
      href: social.github,
      title: 'GitHub',
      icon: 'ri:github-line',
      color: '#010409',
    },
    email: {
      href: social.email,
      title: '邮箱',
      icon: 'ri:mail-line',
      color: '#D44638',
    },
    rss: {
      href: '/blog/rss.xml',
      title: 'RSS',
      icon: 'ri:rss-line',
      color: '#FFA501',
    },
  }
  
  export default socialSet