<template>
  <a href="https://explore.transifex.com/collapse-launcher/collapse-mainapp/" target="_blank">
    <img src="/img/logo/transifex.svg" alt="Collapse Launcher Localization at Transifex" class="logo" loading="lazy"/>
  </a>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.logo {
  height: 80px;
  box-sizing: border-box; /* Ensure the border is included in the element's total width and height */
}

html.dark .logo {
  border: 5px solid #f9f9f9; /* Add a light border in dark mode */
  background-color: #f9f9f9; /* Fill the border with a light background color in dark mode */
}

html:not(.dark) .logo {
  border: 5px solid transparent; /* No border in light mode */
  background-color: transparent; /* No background color in light mode */
}
</style>