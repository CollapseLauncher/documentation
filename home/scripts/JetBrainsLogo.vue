<template>
  <a href="https://jb.gg/OpenSourceSupport" class="logo-container">
    <div class="logo-wrapper dark-only">
      <img src="/img/logo/rider-light.svg" alt="Rider logo." loading="lazy" class="logo" />
      <img src="/img/logo/resharper-light.svg" alt="ReSharper logo." loading="lazy" class="logo" />
      <img src="/img/logo/qodana-light.svg" alt="Qodana logo." loading="lazy" class="logo" />
    </div>
    <div class="logo-wrapper light-only">
      <img src="/img/logo/rider-dark.svg" alt="Rider logo." loading="lazy" class="logo" />
      <img src="/img/logo/resharper-dark.svg" alt="ReSharper logo." loading="lazy" class="logo" />
      <img src="/img/logo/qodana-dark.svg" alt="Qodana logo." loading="lazy" class="logo" />
    </div>
  </a>
  <p class="attribution">
      Copyright © 2024 JetBrains s.r.o. Rider, ReSharper, Qodana and their respective logos are trademarks of JetBrains s.r.o.
    </p>
</template>

<style scoped>
.logo-container {
  display: flex; /* Makes <a> tag a flex container */
  flex-direction: row; /* Horizontal layout */
  justify-content: center; /* Center images horizontally */
  align-items: center; /* Align images vertically */
  gap: 10px; /* Space between images */
}

.logo-wrapper {
  display: flex; /* Makes <a> tag a flex container */
  flex-direction: row; /* Horizontal layout */
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
