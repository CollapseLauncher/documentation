---
title: Installing Games | Collapse Launcher
---

# Installing Games 
In this section, you will learn how to install (or locate existing installation) for any of our [currently supported games.](../features)

## 1. Select Your Region/Game
Before installing, please make sure that you've selected your Game/Region correctly. To change games, choose your desired Game and Region using the two dropdown selectors, then click "Change" button at the top-center of the launcher.

::: info
You may need to confirm that you would like to change regions. You can disable this functionality by going to the left-side navigation bar, then clicking on "App Settings", and disabling "Show Region Change Warning".
:::

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-selectregion.webp" alt="Game-Region selector" title="Game-region selector" style="display: block; margin: 0 auto;" width="960">
</figure>

## 2. Click on ``Install/Locate Game`` to start the installation
After selecting your desired game and region, click ``Install/Locate Game`` to start game/region installation.

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-installbtn.webp" alt="Game install button" title="Game install button" style="display: block; margin: 0 auto;" width="360">
</figure>


## 3. Choose Installation Location
There are two options for you to choose:
* **Use default directory**
> This option will install the game in the default "App Folder" that you've chosen while setting up Collapse for the first time.
::: tip
You can always move the game installation later (after installation finished) by opening the Launcher main menu -> Quick Settings (bottom right) -> Move Game Installation
:::

* **Locate directory**
> This option will allow you to choose the location in which you would like your game to be installed.
::: tip
If you already install the game and you want to import them to Collapse, press this option.<br/> <br/>
Direct Collapse to the folder where you put the game, indicated the by the presence of the game's executable file. E.g.:
- **Genshin Impact (Global)** --> `GenshinImpact.exe`
- **Genshin Impact (Mainland China/Bilibili)** --> `YuanShen.exe`
- **Honkai Impact 3rd** --> `BH3.exe`
- **Honkai: Star Rail** --> `StarRail.exe`
- **Zenless Zone Zero** --> `ZenlessZoneZero.exe`

Failure to give the correct folder will cause the launcher to install the game to the location you've entered.<br/>
It's also possible that the launcher will fail outright indicated by it not installing, and the install button did not change to "Start Game". This is caused by selecting the wrong region. Make sure you select the correct one according to your last install!
:::

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-locationselect.webp" alt="Game location selector" title="Game location selector" style="display: block; margin: 0 auto;" width="580">
</figure>

## 4. Choose Audio (Voice-Over) Language (Genshin Impact & Honkai: Star Rail)
You might be asked to choose which voice-over language you want to install. This will reduce the time for installation in-game by downloading the audio assets in Collapse.
There are currently 4 languages available for you to choose:
* Chinese (Simplified)
* English (US)
* Japanese
* Korean

::: info
Japanese language will be chosen by default. There may be more languages added by miHoYo/Cognosphere in the future. Collapse currently only supports the above list for voice-over pack installation. This list is subject to change without notice.
:::

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-selectaudiolang.webp" alt="Audio (Voice-Over) selector" title="Audio (Voice-Over) selector" style="display: block; margin: 0 auto;" width="580">
</figure>

## 5. Downloading and Post-Installation Verification
Once started, the installation will download the necessary files for your selected game. 

::: tip
Starting from Collapse 1.70.5, background download is now supported, meaning that you can not only download multiple games, but you also no longer have to stay on the game's launcher page for the download function to work.
:::

After the download is completed, Collapse goes through a verification and patching phase. This part of the installation can vary in length depending on your system configuration and network connection availability. Please allow sufficient time for the installation to finish.

While not recommended, Collapse also supports download pausing & resuming. This means that you may interrupt the download at any time *gracefully* by clicking on the ``Pause/Cancel`` button when an installation is in progress. Failure to do so could result in data corruption.

::: warning
Please do not close Collapse while the verification and patching steps are complete. Doing so may lead to the corruption of your selected game(s) and force you to perform a reinstall.
:::
<!-- 
<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-locationselect.webp" alt="Game location selector" title="Game location selector" style="display: block; margin: 0 auto;" width="580">
</figure> -->
<!-- TODO: Add image -->

## Other problem factor while installing
### Insufficient Storage
While preparing for installation, Collapse checks your disk space to ensure that the full game can be installed. The error below will display if your disk space is insufficient. Should that happen, please make sure that you have sufficient storage before proceeding with the installation. **Collapse will not install your game until you have sufficient storage available**.

::: info
You may find that the actual amount of storage the game takes after installation is smaller than what Collapse specified. This is because Collapse needs extra space to decompress the game installation package before it is able to successfully install the game. Rest assured, the installation package is removed after the game has been installed to free up the maximum amount of storage.
:::

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-notenoughspace.webp" alt="Insufficient disk space warning" title="Insufficient disk space warning" style="display: block; margin: 0 auto;" width="580">
</figure>