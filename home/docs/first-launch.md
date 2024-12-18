---
title: First Launch Setup | Collapse Launcher
---
# How-To: First Launch Configuration
Once you run Collapse Launcher for the first time, you will be greeted by what's called OOBE (**O**ut **O**f the **B**ox **E**xperience). In this page, you will set-up your preferences like language, theme, and CDN to be used.
Don't worry, this only takes a couple of minutes!

::: tip
You can always re-run these steps in case you want to refresh your Collapse configuration. To do that, launch Collapse with argument `oobesetup`.
```cmd
CollapseLauncher.exe oobesetup
```
::: 

## 1. Set Collapse' App Data Folder
Start by setting your preferred App Data folder. This folder is where Collapse will save its supplemental files (e.g. metadata, image caches, etc.) and also where your Game's default install is gonna be (you can always select where you want to install your game when pressing "Install Game" button)

::: tip
You can always move this folder by going into Collapse Settings and on the right side panel, press "Move App Data Folder".
:::

<figure style="text-align: center;">
  <img src="/img/docs/locatefolder.webp" alt="Welcome page/Locate folder menu" title="Welcome page/Locate folder menu" style="display: block; margin: 0 auto;" width="auto">
</figure>

## 2. Setting-up preferences
In this menu, you can set your preferred language, UI size and a download location (CDN) for launcher updates.

::: info
CDN selection does not impact content availability, it is simply to tell Collapse where to try to fetch update files first. Latency to each source depends on where you are geographically located and any source is subject to removal with or without notice.<br/>
Collapse will try it's best to switch to other CDNs when the one you prefer is not available for you, but it will cause slowdowns.
:::
::: warning
Especially for **Mainland China** users, please pick **Coding** as preffered CDN as its the most stable in that region. <br/>
And for users **outside** of Mainland China, please pick anything **other than** Coding to prevent issues.
:::

<figure style="text-align: center;">
  <img src="/img/docs/oobe1.webp" alt="Preferences menu" title="Welcome page/Preferences menu" style="display: block; margin: 0 auto;" width="auto">
</figure>

## 3. Select your First Game
After that, please select the game you would like to install or locate first. Don't worry, you can switch between all the [currently supported games](../features) after the initial setup!

<figure style="text-align: center;">
  <img src="/img/docs/oobe2.webp" alt="Game menu" title="Game menu" style="display: block; margin: 0 auto;" width="auto">
</figure>

## You're done!

Welcome to Collapse! We hope you enjoy using this launcher! Feel free to report any bugs <a href="https://github.com/neon-nyan/Collapse/issues/new/choose" target=_blank>here</a>.
<br><br>

<figure style="text-align: center;">
  <img src="/img/docs/launchermain.webp" alt="Launcher main page" title="Launcher main page" style="display: block; margin: 0 auto;" width="auto">
</figure>
