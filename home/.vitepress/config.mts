import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Collapse Launcher",
  description: "An advanced launcher for HoYoverse Games",
  head: [
    ['meta', { property: 'og:title', content: 'Collapse Launcher' }],
    ['meta', { property: 'og:description', content: 'An advanced launcher for HoYoverse Games. Built with C#/.NET with WinUI and open sourced. Supports all PC games published by miHoYo/HoYoverse with many advanced features like game repair, delta patch, game settings, etc.' }],
    ['meta', { property: 'og:image', content: 'https://collapselauncher.com/img/banner.webp' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:url', content: 'https://collapselauncher.com' }],
    ['meta', { property: 'og:license', content: 'https://collapselauncher.com/docs/license' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '24x24', href: '/favicon-24x24.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'description', content: 'An advanced launcher for HoYoverse Games. Built with C#/.NET with WinUI and open sourced. Supports all PC games published by miHoYo/HoYoverse with many advanced features like game repair, delta patch, game settings, etc.' }],
    ['meta', { name: 'keywords', content: 'HoYoverse, miHoYo, Games, Launcher, Collapse Launcher, C#, .NET, WinUI, WinUI3, Genshin Impact, Honkai: Impact 3rd, HI3, Honkai: Star Rail, HSR, Zenless Zone Zero, ZZZ' }],
    ['link', { rel: 'canonical', href: 'https://collapselauncher.com' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Collapse Launcher' }],
    ['meta', { name: 'twitter:description', content: 'An advanced launcher for HoYoverse Games' }],
    ['meta', { name: 'twitter:image', content: 'https://collapselauncher.com/img/banner.webp' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'Collapse Launcher Team' }],
    ['link', { rel: 'preload', href: '/img/logo.webp', as: 'image'}],
    ['link', { rel: 'preload', href: 'https://fonts.gstatic.com/s/outfit/v11/QGYvz_MVcBeNP4NJtEtq.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous'}],
    ['link', { rel: 'preload', href: 'https://fonts.gstatic.com/s/outfit/v11/QGYvz_MVcBeNP4NJuktqQ4E.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous'}],
    ['Cache-Control', {rel: 'Cache-Control', content: 'public, max-age=3600'}]
  ],
  appearance: 'dark',
  themeConfig: {
    search:{
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/features' },
      { text: 'History', link: '/releasehistory' },
      { text: 'Team', link: '/team' },
      { text: 'Blog', link: 'https://blog.collapselauncher.com/', target: '_blank' },
      { text: 'Status', link: 'https://status.collapselauncher.com', target: '_blank' },
      { text: 'Grafana Dashboard', link: 'https://grafana.bagelnl.my.id/public-dashboards/4164a652b5f14d25a3cf867ebc45270d?orgId=1', target: '_blank' }
    ],

    sidebar: [
      {
        text: 'Download',
        items: [
          { text: 'Latest Stable', link: 'https://github.com/CollapseLauncher/Collapse/releases/latest', target: '_blank' },
          { text: 'Latest Preview', link: '/pre-release', target: '_blank' }
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/docs/installation' },
          { text: 'First launch', link: '/docs/first-launch' },
          { text: 'Installing games', link: '/docs/game-installation' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Feature matrix', link: '/features' },
          { text: 'Delta patch', link: '/feature/delta-patch' },
          { text: 'Command line arguments', link: '/feature/cli-args' },
          { text: 'Data synchronization', link: '/feature/database' },
        ]
      },
      {
        text: 'Advanced Features',
        items: [
          { text: 'Game launch commands', link: '/feature/game-commands' },
        ]
      },
      {
        text: 'Frequently Asked Questions',
        items: [
          { text: 'QnA', link: '/docs/faq/qna' },
          { text: 'Game common issues', link: '/docs/faq/game-issues' }
        ]
      },
      {
        text: 'For Developers',
        items: [
          {text: 'Building', link: 'docs/building'},
          {text: 'Contribution guidelines', link: 'docs/contrib'},
          {text: 'Development flows', link: 'docs/development-flows'}
        ]
      },
      {
        text: 'Legal',
        items: [
          {text: 'Privacy policy', link: 'docs/legals/privacy'},
          {text: 'Launcher license', link: 'docs/legals/license'},
          {text: 'Third party notices', link: 'docs/legals/third_party_notices'},
          {text: 'Code signing policy', link: 'docs/legals/code-signing-policy'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CollapseLauncher/Collapse' },
      { icon: 'discord', link: 'https://discord.gg/vJd2exaS7j' }
    ]
  },
  sitemap:{
    hostname: 'https://collapselauncher.com'
  },
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha'
    }
  },
  vite: {
    plugins: [],
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue', '.css']
    },
    optimizeDeps: {
      exclude: ['vuetify'],
      include: ['vue']
    },
    ssr: {
      noExternal: ['vuetify']
    }
  }
})

