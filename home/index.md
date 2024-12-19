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
  tagline: Take the control upon your hands
  image:
    src: /img/logo.webp
    alt: Collapse Launcher Logo
    style:
      size: 200%
      opacity: 0.8
      position: absolute
      z-index: 0
  actions:
    - theme: brand
      text: Download Latest Release
      link: https://github.com/CollapseLauncher/Collapse/releases/latest
      attributes:
        target: "_blank"
    - theme: brand
      text: Download Beta Release
      link: /pre-release
      attributes:
        target: "_blank"
    # - theme: brand
    #   text: Documentation
    #   link: /markdown-examples
    - theme: alt
      text: Feature Docs
      link: /features
    - theme: alt
      text: Installation Guide
      link: /docs/installation
    - theme: alt
      text: Meet the Team
      link: /team
features:
  - title: Multi-region Support
    details: Manage multiple region (including cross-server region) games
  - title: Game Repair
    details: Repair all the game assets without even opening the game
  - title: Sophon API Support
    details: Use Sophon API on supported games for faster and smaller game downloads/update
  - title: Delta Patch
    details: Up to 10X less update download size for certain region by utilizing HDiffZ folder comparison method.
    link: feature/delta-patch
    linkText: Learn more
---
<script setup>
  import './index.css'
  import vtuberLogo from './scripts/index.logo.vue';
  import JetBrainsLogo from './scripts/JetBrainsLogo.vue';
  import TransifexLogo from './scripts/TransifexLogo.vue';
  import SignPathLogo from './scripts/SignPathLogo.vue';
  import SentryLogo from './scripts/SentryLogo.vue';
  import footerHi from './scripts/footer.vue';

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

**Collapse** contains advanced features for **Honkai Impact 3rd** that not only provide you with the ability to download and launch the game, but also some additional features that the Official Launcher doesn't have, including:
* Caches Download (aka "Updating Settings" in-game).
* Game Data Repair (with less bandwidth required than the *Data Repair* feature in-game).
* Changing Game Settings (Graphics Settings & Audio Settings) without opening the game.
* Multi-Region Game Download Support (Allows for downloading and launching different versions of the game).
* Steam to Global version conversion (without re-downloading the whole game).
* Global to SEA version (or vice versa) conversion.
* Multi-session Download for faster Game Download/Installation.
* Multi-thread Game Extraction for faster installation.
* Delta-Patch Update Mechanism for smaller updates.
* Ability to select Graphics API (DirectX 11 (FL: 10.1, 11.0 and 11.1) and DirectX 12 [May crash the game in newer stages]).

Not only that, this launcher also has some advanced features for **Genshin Impact**, including but not limited to:
* Choosing your voice-line language during the first installation, so you don't have to download it inside the game.
* Repair the game files including Game Caches, Cutscenes, Audio Pack & persistent files outside of the game.


## Special Thanks
> The teams over at Collapse are really thankful for all of our users and contributors that has been keeping this project alive and well. We are also giving our outmost gratitude for these company/organization for providing their service for us.

1. JetBrains for providing complete .NET suite and Qodana for our internal use
<div align="center"><JetBrainsLogo /></div>

2. Transifex for their translation platform
<div align="center"><TransifexLogo /></div>

3. SignPath Foundation for providing us free code signing!
<div align="center"><SignPathLogo /></div>

4. Sentry for providing us with error collection platform!
<div align="center"><SentryLogo /></div>


## Code Signing Policy
::: info
Free code signing provided by [SignPath.io], certificate by [SignPath Foundation]
:::
- This program will only transfer user data to user configured database server. Exception data will be sent to [Sentry.io] for error tracking purposes (user are able to disable the behavior in App Settings).
- Read our full [**Privacy Policy**](https://github.com/CollapseLauncher/Collapse/blob/main/PRIVACY.md)
- Also read our [**Third Party Notices**](https://github.com/CollapseLauncher/Collapse/blob/main/THIRD_PARTY_NOTICES.md) for license used by third party libraries that we use.

[SignPath Foundation]:https://signpath.org
[SignPath.io]:https://signpath.io

## License Compliance Analysis For Key Projects
<p align="center" style="vertical-align: top;">
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCollapseLauncher%2FCollapse?ref=badge_large&issueType=license" target="_blank" style="display: inline-block; vertical-align: top;">
        <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCollapseLauncher%2FCollapse.svg?type=large&issueType=license" alt="Collapse FOSSA Status" width=280 loading="lazy"/>
    </a>
    &nbsp;
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCollapseLauncher%2FSharpHDiffPatch.Core?ref=badge_large&issueType=license" target="_blank" style="display: inline-block; vertical-align: top;">
        <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCollapseLauncher%2FSharpHDiffPatch.Core.svg?type=large&issueType=license" alt="SharpHDiffPatch FOSSA Status" width=280 loading="lazy"/>
    </a>
    &nbsp;
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCollapseLauncher%2FHi3Helper.Sophon?ref=badge_large&issueType=license" target="_blank" style="display: inline-block; vertical-align: top;">
        <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCollapseLauncher%2FHi3Helper.Sophon.svg?type=large&issueType=license" alt="Sophon FOSSA Status" width=280 loading="lazy"/>
    </a>
</p>

<footerHi />
