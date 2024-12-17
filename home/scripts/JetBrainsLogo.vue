<template>
  <a href="https://jb.gg/OpenSourceSupport" class="logo-container">
    <div class="logo-wrapper dark-only">
      <img src="/img/logo/rider-light.svg" alt="Rider logo." loading="lazy" class="logo dark-only" />
      <img src="/img/logo/resharper-light.svg" alt="ReSharper logo." loading="lazy" class="logo dark-only" />
      <img src="/img/logo/qodana-light.svg" alt="Qodana logo." loading="lazy" class="logo dark-only" />
    </div>
    <div class="logo-wrapper light-only">
      <img src="/img/logo/rider-dark.svg" alt="Rider logo." loading="lazy" class="logo light-only" />
      <img src="/img/logo/resharper-dark.svg" alt="ReSharper logo." loading="lazy" class="logo light-only" />
      <img src="/img/logo/qodana-dark.svg" alt="Qodana logo." loading="lazy" class="logo light-only" />
    </div>
  </a>
  <p class="attribution">
      Copyright © 2024 JetBrains s.r.o. Rider, ReSharper, Qodana and their respective logos are trademarks of JetBrains s.r.o.
    </p>
</template>

<style scoped>
.logo {
  height: 80px;
  display: block;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: row;
}

.attribution {
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
}

html.dark .light-only {
  display: none !important;
}

html:not(.dark) .dark-only {
  display: none !important;
}
</style>