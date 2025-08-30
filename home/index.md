---
# https://vitepress.dev/reference/default-theme-home-page
title: Collapse Launcher - Advanced Game Launcher
layout: home
head:
  - - meta
    - name: title
      content: Collapse Launcher - Advanced Game Launcher

hero:
  name: "Collapse Launcher"
  text: "An advanced launcher for HoYoverse Games"
  tagline: Control the games you play
  image:
    src: /img/logo.webp
    alt: Collapse Launcher Logo
    style:
      opacity: 0.8
      position: absolute
      z-index: 0
  actions:
    - theme: brand
      text: Download Latest Release
      link: https://github.com/CollapseLauncher/Collapse/releases/latest
      target: "_blank"
    - theme: brand
      text: Download Beta Release
      link: /pre-release
      target: "_blank"
    - theme: alt
      text: Feature Docs
      link: /features
    - theme: alt
      text: Installation Guide
      link: /docs/installation
    - theme: alt
      text: FAQ
      link: /docs/faq/qna
    - theme: alt
      text: Meet the Team
      link: /team
features:
  - title: Multi-region Support
    details: Manage multiple region (including cross-server region) games.

  - title: Game Installation Repair
    details: Validate & repair all game assets without opening the game itself.

  - title: Sophon API Support
    details: Use the new Sophon API on supported games for a faster and smaller game download and update experience.
    link: docs/faq/qna.html#q-what-is-sophon-downloader-mode
    linkText: Learn more

  - title: Customization
    details: Set custom background for each game region. Supports both still image and video formats.

  - title: Delta Patch
    details: Benefit from an up to 10x smaller update package for certain region by utilizing HDiffZ folder comparison method.
    link: feature/delta-patch
    linkText: Learn more
    
  - title: Code you can Trust
    details: All published binaries go through several verification & validation steps by the core development team and are code-signed (courtesy of SignPath) before being published to users, guaranteeing a safe experience for all.
    linkText: Learn more
    link: docs/development-flows
    
---
<script setup>
  import './index.css'
  import vtuberLogo from './scripts/index.logo.vue';
  import JetBrainsLogo from './scripts/JetBrainsLogo.vue';
  import TransifexLogo from './scripts/TransifexLogo.vue';
  import SignPathLogo from './scripts/SignPathLogo.vue';
  import SentryLogo from './scripts/SentryLogo.vue';
  import footerHi from './scripts/footer.vue';
  import copyright from './scripts/copyright.vue';
  import DigitalOceanLogo from './scripts/DigitalOceanLogo.vue';
  import DatadogLogo from './scripts/DatadogLogo.vue';

  if (typeof document !== 'undefined') {
    document.title = "Collapse Launcher - Advanced Game Launcher";
  }
</script>

&nbsp;
&nbsp;

<vtuberLogo />

## Why "Collapse"?

Collapse came from the **Honkai Impact** translation in Chinese and Japanese. The word came from [**崩坏**] or **Bēng huài** in Chinese and also [**崩壊**] or **Houkai** in Japanese, both meaning "**Collapse**" which is why we chose it as our launcher name with the added inspiration that this was supposed to be an alternative (enhanced) launcher for *Honkai Impact 3rd* in the first place.

## Overview

**Collapse** contains advanced features for **HoYoverse games** that not only provide you with the ability to download and launch the game, but also some additional features that the Official Launcher doesn't have, including:

* Repair the game files including Game Caches, Cutscenes, Audio Pack & persistent files outside of the game.
* Changing Game Settings (Graphics Settings & Audio Settings) without opening the game.
* Choosing your voice-line language during the first installation, so you don't have to download it inside the game.
* Multi-Region Game Download Support (Allows for downloading and launching different regions of the game).
* Multi-session Download for faster Game Download/Installation.
* Multi-thread Game Extraction for faster installation.
* Delta-Patch Update Mechanism for smaller updates (on supported games, check [docs for more info](feature/delta-patch)).

## UI Overview

<figure style="text-align: center">
  <a href="/img/ui-overview.webp" target="_blank">
    <img src='/img/ui-overview-small.webp' srcset="/img/ui-overview-small.webp 1x, /img/ui-overview.webp 2x" title="UI overview" alt="UI overview" loading="lazy" style="display: block; margin: 0 auto;" width="auto">
  </a>
</figure>

## Special Thanks
>
> The team working on Collapse is really thankful for all of our users and contributors that have been keeping this project alive and well. We would also like to take the time to thank the following companies/organizations for providing their service for us. They help make the experience better for everyone involved.

1. JetBrains for providing their complete .NET suite and Qodana for our internal use!

<div align="center"><JetBrainsLogo /></div>

2. Transifex for their intuitive translation platform!

<div align="center"><TransifexLogo /></div>

3. SignPath Foundation for providing us free code signing!

<div align="center"><SignPathLogo /></div>

4. Sentry for providing us with error collection platform!

<div align="center"><SentryLogo /></div>

5. DigitalOcean for providing us their cloud platform credits!

<div align="center"><DigitalOceanLogo /></div>

6. Datadog for providing us their data observability platform!
<div align="center"><DatadogLogo /></div>

## Code Signing Policy

::: info
Free code signing provided by [SignPath.io], certificate by [SignPath Foundation]
:::
* This program will only transfer user data to a user configured database server. Exception data will be sent to [Sentry.io] for error tracking purposes (users are able to disable the behavior in App Settings).
* Read our full [**Privacy Policy**](https://github.com/CollapseLauncher/Collapse/blob/main/PRIVACY.md).
* Read our [**Third Party Notices**](https://github.com/CollapseLauncher/Collapse/blob/main/THIRD_PARTY_NOTICES.md) for licenses used by third party libraries that we use.

[SignPath Foundation]:https://signpath.org
[SignPath.io]:https://signpath.io
[Sentry.io]:https://sentry.io

## License Compliance Analysis For Key Projects

<p align="center" style="vertical-align: top;">
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCollapseLauncher%2FCollapse?ref=badge_large&issueType=license" target="_blank" style="display: inline-block; vertical-align: top;">
        <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCollapseLauncher%2FCollapse.svg?type=large&issueType=license" title="Collapse FOSSA Status" alt="Collapse FOSSA Status" width=280 loading="lazy"/>
    </a>
    &nbsp;
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCollapseLauncher%2FSharpHDiffPatch.Core?ref=badge_large&issueType=license" target="_blank" style="display: inline-block; vertical-align: top;">
        <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCollapseLauncher%2FSharpHDiffPatch.Core.svg?type=large&issueType=license" 
        title="SharpHDiffPatch FOSSA Status" alt="SharpHDiffPatch FOSSA Status" width=280 loading="lazy"/>
    </a>
    &nbsp;
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCollapseLauncher%2FHi3Helper.Sophon?ref=badge_large&issueType=license" target="_blank" style="display: inline-block; vertical-align: top;">
        <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCollapseLauncher%2FHi3Helper.Sophon.svg?type=large&issueType=license" title="Sophon FOSSA Status" alt="Sophon FOSSA Status" width=280 loading="lazy"/>
    </a>
</p>

<footerHi />
<copyright />
