<template>
  <a href="https://sentry.io/about/" class="logo-container" target="_blank">
    <img src="/img/logo/sentry-light.svg" title="Sentry logo"alt="Sentry logo" class="logo dark-only" loading="lazy"/>
    <img src="/img/logo/sentry-dark.svg" title="Sentry logo" alt="Sentry logo" class="logo light-only" loading="lazy"/>
  </a>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.logo-container {
  display: inline-block; /* Makes <a> tag a inline-block container */
}

.logo {
  height: 70px;
}

html.dark .light-only {
  display: none !important;
}

html:not(.dark) .dark-only {
  display: none !important;
}
</style>
