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
    src: /img/logo.png
    alt: Collapse Launcher Logo
    style:
      size: 200%
      opacity: 0.8
      position: absolute
      z-index: 0
  actions:
    - theme: brand
      text: Download Latest Release
      link: /latest-release
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
      text: Features
      link: /features
    - theme: alt
      text: Meet the Team
      link: /team


features:
  - title: Multi-region Support
    details: Able to manage multiple region (including cross-server region) games
  - title: Game Repair
    details: Repair all the game assets without even opening the game
  - title: Sophon API Support
    details: Able to use Sophon API on supported games for faster and smaller game downloads/update
---
<script setup>
  import './index.css'
  import vtuberLogo from './scripts/index.logo.vue';

  if (typeof document !== 'undefined') {
    document.title = "Collapse Launcher - Advanced Game Launcher";
  }
</script>


&nbsp;
&nbsp;

<vtuberLogo />

# Why "Collapse"?
Collapse came from the **Honkai Impact** translation in Chinese and Japanese. The word came from [**崩坏**] or **Bēng huài** in Chinese and also [**崩壊**] or **Houkai** in Japanese, both meaning "**Collapse**" which is why we chose it as our launcher name with the added inspiration that this was supposed to be an alternative (enhanced) launcher for *Honkai Impact 3rd* in the first place.

**Collapse** contains advanced features for **Honkai Impact 3rd** that not only provide you with the ability to download and launch the game, but also some additional features that the Official Launcher doesn't have, including:
* Caches Download (aka "Updating Settings" in-game).
* Game Data Repair (with less bandwidth required than the *Data Repair* feature in-game).
* Changing Game Settings (Graphics Settings & Audio Settings) without opening the game.
* Multi-Region Game Download Support (Allows for downloading and launching different versions of the game).
* Steam to Global version conversion (without re-downloading the whole game).
* Global to SEA version (or vice versa) conversion.
* Multi-session Download for faster Game Download/Installation.
* Multi-thread Game Extraction for faster installation.
* Delta-Patch Update Mechanism for smaller updates ([**Click here**](https://github.com/neon-nyan/CollapseLauncher/wiki/Update-Game-Region-with-Delta-Patch) for more info).
* Ability to select Graphics API (DirectX 11 (FL: 10.1, 11.0 and 11.1) and DirectX 12 [May crash the game in newer stages]).

Not only that, this launcher also has some advanced features for **Genshin Impact**, including but not limited to:
* Choosing your voice-line language during the first installation, so you don't have to download it inside the game.
* Repair the game files including Game Caches, Cutscenes, Audio Pack & persistent files outside of the game.
