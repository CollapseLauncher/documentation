---
title: Development Flows | Collapse Launcher
---

# Development Flows
Any software development needs a certain flows on actions to do on each commits and releases. This section will explain how Collapse project handle commits and release publishing flows.

::: tip
If the images are too small to see, click on them to zoom.
:::

## Code Submission Flow

<figure style="text-align: center">
  <a>
    <img src='/img/docs/Collapse-gitScheme.svg' title="Collapse code repository scheme" alt="Collapse code repository scheme" loading="lazy" style="display: block; margin: 0 auto;" width="auto" data-zoomable>
  </a>
</figure>

::: info
* Code quality scan (Qodana) on main branch runs every Sunday, Wednesday, and Friday
* Qodana scan runs on every Feature/Fix Pull Requests with comment alerts
* All submitted commits are scanned for vulnerability (Snyk) and Licence Compliance (FOSSA)
* Main branch is locked for "Force Push"
* Stable branch might get force pushed on what we called "Stable sync" where Stable branch gets matched with Main branch until the next major/minor Preview release
:::

## Release Publication Flow

<figure style="text-align: center">
  <a>
    <img src='/img/docs/Collapse-appPublication.svg' title="Collapse code repository scheme" alt="Collapse code repository scheme" loading="lazy" style="display: block; margin: 0 auto;" width="auto" data-zoomable>
  </a>
</figure>

::: info
* Available CDNs:
    1. GitHub (Main)
    2. Cloudflare (Cloudfare R2, Southeast Asia region)
    3. GitLab
    4. CODING (Mainland China)
* App Packer script can be inspected in [our release repository](https://github.com/CollapseLauncher/CollapseLauncher-ReleaseRepo/blob/main/pack_signed_velopack.bat)
* Both Portable and Installer artifacts will be uploaded to [main repository 'Releases' section](https://github.com/CollapseLauncher/Collapse/releases)
:::

<script setup>
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';

onMounted(() => {
  const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-bg').trim();
  mediumZoom('[data-zoomable]', { background: backgroundColor || '#fff' });
});
</script>

<style>
  .medium-zoom-overlay {
    z-index: 10000 !important;
    background: var(--vp-c-bg) !important;
  }
  .medium-zoom-image--opened {
    z-index: 10001 !important;
  }
</style>