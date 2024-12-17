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
.logo-wrapper {
  display: flex;
  flex-direction: row; /* Horizontal alignment */
  justify-content: center; /* Center logos horizontally */
  align-items: center; /* Align logos vertically */
  gap: 10px; /* Add space between images */
  flex-wrap: wrap; /* Allows wrapping if needed */
}

.logo {
  height: 70px;
  width: auto; /* Maintain aspect ratio */
  flex: 0 0 auto; /* Prevent stretching */
  margin: 0; /* Remove unwanted margins */
}

html.dark .light-only {
  display: none !important;
}

html:not(.dark) .dark-only {
  display: none !important;
}
</style>
