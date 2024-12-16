import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Collapse Launcher",
  description: "An advanced launcher for HoYoverse Games",
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { property: 'og:title', content: 'Collapse Launcher' }],
    ['meta', { property: 'og:description', content: 'An advanced launcher for HoYoverse Games' }],
    ['meta', { property: 'og:image', content: 'https://collapse.launcher.gg/img/banner.webp' }],
    ['meta', { property: 'og:url', content: 'https://collapselauncher.com' }],
  ],
  themeConfig: {
    search:{
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
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
  }
})

