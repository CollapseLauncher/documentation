// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import transition from './transition.vue'
import MarkdownLoader from '../components/md-loader.vue'
import { vuetify } from '../components/vuetify.vue'
import { VCard, VCardText, VCardTitle, VTimeline, VTimelineItem, VIcon, VBtn } from 'vuetify/components'
import "@catppuccin/vitepress/theme/mocha/peach.css"

export default {
  extends: DefaultTheme,
  Layout: transition,
  enhanceApp({ app, router, siteData }) {
    app.component('MarkdownLoader', MarkdownLoader)

    app.use(vuetify)
    app.component('VTimeline', VTimeline)
    app.component('VTimelineItem', VTimelineItem)
    app.component('VCard', VCard)
    app.component('VCardTitle', VCardTitle)
    app.component('VCardText', VCardText)
    app.component('VIcon', VIcon)
    app.component('VBtn', VBtn)
  },
} satisfies Theme