---
title: Development Workflows | Collapse Launcher
---

# Development Workflows
Each big project has development workflows, helping developers ship code in a timely and efficient manner.

This section will explain how Collapse project handle commits and release publishing flows.

::: tip
If the images are too small to see, click on them to zoom in!
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
* `main` branch is locked for "Force Push"
* Stable branch may get force pushed during what we called "Stable Sync" where the Stable branch gets caught-up with the `main` branch until the next major/minor Preview release
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
    4. CNB (Mainland China)
* App Packer script can be inspected in [our release repository](https://github.com/CollapseLauncher/CollapseLauncher-ReleaseRepo/blob/main/pack_signed_velopack.bat)
* Both Portable and Installer artifacts will be uploaded to [main repository 'Releases' section](https://github.com/CollapseLauncher/Collapse/releases)
:::
