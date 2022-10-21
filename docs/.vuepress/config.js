import { defaultTheme } from '@vuepress/theme-default'

export default {
    title: '原色计划',
    base: '/yuanse-project/',
    description: 'yuanse-project',
    head: [['link', { rel: 'icon', href: `/logo-assets/touch/yuanse_logo.png` }]],

    theme: defaultTheme({
        contributors: false,
        smoothScroll: true,
        
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'About', link: '/about/' },
            { text: 'Weibo', link: 'https://weibo.com/u/1830011525' },
            { text: 'Bilibili', link:'https://space.bilibili.com/20961537'},
            { text: 'View on Github', link:'https://github.com/Yuanse-Association/yuanse-project'}
        ],

        sidebarDepth: 2,
        sidebar: [
            '/',
            '/Overview',
            '/cos/',
            '/sd/',
            '/oenn/',
            '/Bulter/',
            '/Create/',
            '/Photo/',
            '/Info/',
            '/PublicRelations/'
        ]
    })
}