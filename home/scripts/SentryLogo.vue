<template>
  <a href="https://sentry.io/about/">
    <img src="/img/logo/sentry-light.svg" alt="Sentry Logo" class="logo dark-only" loading="lazy"/>
    <img src="/img/logo/sentry-dark.svg" alt="Sentry Logo" class="logo light-only" loading="lazy"/>
  </a>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
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
