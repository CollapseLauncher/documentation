import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Collapse Launcher",
  description: "An advanced launcher for HoYoverse Games",
  head: [
    ['link', { rel: 'icon', href: 'icon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/team' }
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
          { text: 'Feature matrix', link: '/features' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CollapseLauncher/Collapse' },
      { icon: 'discord', link: 'https://discord.gg/vJd2exaS7j' }
    ]
  }
})

