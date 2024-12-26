---
title: First Launch Setup | Collapse Launcher
---
# First Launch Configuration
If you are running Collapse Launcher for the first time, you will be greeted by what's called an *OOBE* (**O**ut **O**f the **B**ox **E**xperience). In these pages, you will set up your launcher preferences such as language, theme, and CDN to be used. We also ask you to read & agree to our [**Privacy Policy**](https://github.com/CollapseLauncher/Collapse/blob/main/PRIVACY.md) and [**Third Party Notices**](https://github.com/CollapseLauncher/Collapse/blob/main/THIRD_PARTY_NOTICES.md).
Don't worry, this only takes a couple of minutes!

::: tip
You can always re-run this step in the event that you want to refresh your Collapse configuration. To do that, launch Collapse with argument `oobesetup`. 
```cmd
CollapseLauncher.exe oobesetup
```
You can also change everything that you've set up in the initial setup by going to the Collapse **App Settings**.
::: 

## 1. Set Collapse's App Data Folder
Start by setting your preferred App Data folder. This folder is where Collapse will save its supplemental files (e.g. metadata, image caches, etc.) and also where your games' default install location is going to be (you can always select where you want to install your game when pressing "Install Game" button)

::: tip
You can always move this folder by going into Collapse's **App Settings** and pressing the "Move App Data Folder" button, on the right side panel.
:::

<figure style="text-align: center;">
  <img src="/img/docs/locatefolder.webp" alt="Welcome page/Locate folder menu" title="Welcome page/Locate folder menu" style="display: block; margin: 0 auto;" width="auto">
</figure>

## 2. Setting up preferences
In this menu, you can set your preferred language, UI size and a download location (CDN, *Content Delivery Network*) for launcher updates.

::: info
CDN selection does not impact content availability. It is simply to tell Collapse where to try to fetch update files first. Latency to each source depends on where you are geographically located and any source is subject to removal with or without notice.<br><br>
Collapse will try to switch to other CDNs when the one you prefer is not available for you.
:::

<figure style="text-align: center;">
  <img src="/img/docs/oobe1.webp" alt="Preferences menu" title="Welcome page/Preferences menu" style="display: block; margin: 0 auto;" width="auto">
</figure>

::: warning
Especially for **Mainland China** users, please select **Coding** as preferred CDN as it is the most stable in that region. <br/>
For users **outside** of Mainland China, please pick anything **other than** Coding to prevent issues with content availability.
:::


## 3. Select your first game
Following that, please select the game you would like to install or locate on your system first. Don't worry, you can switch between all the [currently supported games](../features) after the initial setup!

<figure style="text-align: center;">
  <img src="/img/docs/oobe2.webp" alt="Game menu" title="Game menu" style="display: block; margin: 0 auto;" width="auto">
</figure>

## You're done!

Welcome to Collapse! We hope you enjoy using this launcher! Feel free to report any bugs <a href="https://github.com/neon-nyan/Collapse/issues/new/choose" target=_blank>here</a>.
<br><br>

<figure style="text-align: center;">
  <img src="/img/docs/launchermain.webp" alt="Launcher main page" title="Launcher main page" style="display: block; margin: 0 auto;" width="auto">
</figure>
