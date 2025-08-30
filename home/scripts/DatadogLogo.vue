<template>
  <a href="https://jb.gg/OpenSourceSupport" class="logo-container" target="_blank">
    <div class="logo-wrapper dark-only">
      <img src="/img/logo/dd_logo_h_white.svg" title="Datadog logo" alt="Datadog logo" loading="lazy" class="logo" />
    </div>
    <div class="logo-wrapper light-only">
      <img src="/img/logo/dd_logo_h_rgb.svg" title="Datadog logo" alt="Datadog logo" loading="lazy" class="logo" />
    </div>
  </a>
  <p class="attribution">
      Copyright © 2025 Datadog, Inc.
    </p>
</template>

<style scoped>
.logo-container {
  display: inline-flex; /* Makes <a> tag a inline-flex container */
  flex-direction: row; /* Horizontal layout */
  justify-content: center; /* Center images horizontally */
  align-items: center; /* Align images vertically */
  gap: 10px; /* Space between images */
}

.attribution {
 font-size: small;
}

.logo-wrapper {
  display: flex; /* Makes <a> tag a flex container */
  flex-direction: row; /* Horizontal layout */
  flex-wrap: wrap; /* Wrap contents */
  justify-content: center; /* Center images horizontally */
  align-items: center; /* Align images vertically */
  gap: 10px; /* Space between images */
}

.logo {
  height: 70px;
  width: auto; /* Maintain aspect ratio */
  margin: 0; /* Remove unwanted margins */
  flex: 0 0 auto; /* Prevent any stretching */
}


html.dark .light-only {
  display: none !important;
}

html:not(.dark) .dark-only {
  display: none !important;
}
</style>
