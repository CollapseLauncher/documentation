---
title: Installing Games | Collapse Launcher
---

# Installing Games 
In this section, you will learn how to install (or locate existing installations) for any of our [currently supported games.](../features)

## 1. Select Your Region/Game
Before installing, please make sure that you've selected your Game/Region correctly. To change games, choose your desired Game and Region using the two dropdown selectors, then click "Change" button at the top-center of the launcher.

::: tip
You may need to confirm that you would like to change regions. You can disable this functionality by going to the left-side navigation bar, then clicking on "App Settings", and disabling "Show Region Change Warning".
:::

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-selectregion.webp" alt="Game-Region selector" title="Game-region selector" style="display: block; margin: 0 auto;" width="960">
</figure>

## 2. Click on ``Install/Locate Game`` to start the installation
After selecting your desired game and region, click the ``Install/Locate Game`` button to start game/region installation.

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-installbtn.webp" alt="Game install button" title="Game install button" style="display: block; margin: 0 auto;" width="360">
</figure>


## 3. Choose Installation Location
There are two options for you to choose from:
<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-locationselect.webp" alt="Game location selector" title="Game location selector" style="display: block; margin: 0 auto;" width="580">
</figure>

* **Use default directory**
> This option will install the game in the default "App Folder" that you've chosen while setting up Collapse for the first time. If you do not remember where that is, you can go to Collapse's **App Settings** and click on the "Open App Data Folder" button on the right side panel. 
::: tip
You can always move the game installation later (after the installation has completed) by opening the Quick Settings (bottom right) -> Move Game Installation.
:::

* **Locate directory**
> This option will allow you to choose the location in which you would like your game to be installed.
::: tip
<b><u>If you already installed the game and you want to import it into to Collapse, press this option</u></b>.<br/> <br/>
Direct Collapse to the folder where you installed the game initially, indicated by the presence of the game's executable file. For example:
- **Genshin Impact (Global)** --> `GenshinImpact.exe`
- **Genshin Impact (Mainland China/Bilibili)** --> `YuanShen.exe`
- **Honkai Impact 3rd** --> `BH3.exe`
- **Honkai: Star Rail** --> `StarRail.exe`
- **Zenless Zone Zero** --> `ZenlessZoneZero.exe`

Failure to give the correct folder will cause the launcher to install the game to the location you've entered.<br/>

It is also possible that the launcher will outright fail to install the game in question, in the selected region. This is caused by selecting the wrong region. Make sure you select the correct one according to your installed game!
:::

## 4. Choose Audio (Voice-Over) Language

<b>This feature is currently only available to Genshin Impact, Honkai: Star Rail & Zenless Zone Zero only</b>.

You may be asked to choose which voice-over language you want to install. This will reduce the time for installation in-game by downloading the audio assets in Collapse instead of in-game.

There are currently 4 languages available for you to choose:
* Chinese (Simplified)
* English (US)
* Japanese
* Korean

::: info
Japanese language will be chosen by default. There may be more languages added by miHoYo/Cognosphere in the future. Collapse currently only supports the above list for voice-over pack installation. Different games may support different languages. This list is subject to change without notice.
:::

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-selectaudiolang.webp" alt="Audio (Voice-Over) selector" title="Audio (Voice-Over) selector" style="display: block; margin: 0 auto;" width="580">
</figure>

## 5. Downloading and Post-Installation Verification
Once started, the installation will download the necessary files for your selected game. 

::: tip
Starting from Collapse 1.70.5, background download is supported, meaning that you can not only download multiple games, but you also no longer have to stay on the game's launcher page for the download function to work.
:::

After the download is completed, Collapse goes through a verification and patching phase. This part of the installation can vary in length depending on your system configuration and network connection availability. Please allow sufficient time for the installation to finish.

Collapse also supports download pausing & resuming. This means that you may interrupt the download at any time *gracefully* by clicking on the ``Pause/Cancel`` button when an installation is in progress. Failure to do so could result in data corruption.

::: warning
Please do not close Collapse while the verification and patching steps are in progress. Doing so may lead to the corruption of your selected game(s) and force you to perform a partial or full reinstall.
:::

## Other problem factor while installing
### Insufficient Storage
While preparing for installation, Collapse will check if you have sufficient disk space on the drive you have decided to install the game in, to ensure that the full game package can be installed. The error below will display if your disk space is insufficient. Should that happen, please make sure that you have sufficient storage before proceeding with the installation. **Collapse will not install your game until you have sufficient storage available**. <u>**Collapse will also not update your game until you have sufficient storage available**</u>.

::: info
You may find that the actual amount of storage the game takes after installation is smaller than what Collapse specified. This is because, in some games (which do not use the new Sophon API) Collapse needs extra space to decompress the game installation package before it is able to successfully install the game. Rest assured, the installation package is removed after the game has been installed to free up the maximum amount of storage possible.
:::

<figure style="text-align: center;">
  <img src="/img/docs/gameinstall-notenoughspace.webp" alt="Insufficient disk space warning" title="Insufficient disk space warning" style="display: block; margin: 0 auto;" width="580">
</figure>