import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Collapse Launcher",
  description: "An advanced launcher for HoYoverse Games",
  head: [
    ['meta', { property: 'og:title', content: 'Collapse Launcher' }],
    ['meta', { property: 'og:description', content: 'An advanced launcher for HoYoverse Games' }],
    ['meta', { property: 'og:image', content: 'https://collapselauncher.com/img/banner.webp' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:url', content: 'https://collapselauncher.com' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.webp' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.webp' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.webp' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
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
      { text: 'Team', link: '/team' },
      { text: 'Docs', link: '/features' }
    ],

    sidebar: [
      {
        text: 'Download',
        items: [
          { text: 'Latest Stable', link: '/latest-release' },
          { text: 'Latest Preview', link: '/pre-releaser' }
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
        text: 'For Developers',
        items: [
          {text: 'Contribution guidelines', link: 'docs/contrib'}
        ]
      },
      {
        text: 'Legals',
        items: [
          {text: 'License', link: 'docs/license'},
          {text: 'Third party notices', link: 'docs/third_party_notices'}
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
  lastUpdated: true
})

