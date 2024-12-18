// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import transition from './transition.vue'

export default {
  extends: DefaultTheme,
  Layout: transition,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme