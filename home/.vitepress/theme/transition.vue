<!-- .vitepress/theme/Layout.vue -->
<!-- https://vitepress.dev/guide/extending-default-theme#using-view-transitions-api -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, onMounted } from 'vue'
import mediumZoom from 'medium-zoom'

const { isDark } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})

// Add the image zoom functionality
onMounted(() => {
  setTimeout(() => {
    const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-bg').trim();
    mediumZoom('.vp-doc img', { background: backgroundColor || '#fff' });
  }, 100);
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <img class="VPImage image-src" src="/img/logo.webp" srcset="/img/logo.webp 1x, /img/logo@2x.webp 2x" alt="Collapse Launcher Logo" />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

/* Image zoom styles */
.medium-zoom-overlay {
  z-index: 10000 !important;
  background: var(--vp-c-bg) !important;
}

.medium-zoom-image--opened {
  z-index: 10001 !important;
}
</style>