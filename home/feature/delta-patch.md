---
title: Delta Patch | Collapse Launcher
---

# What's Delta Patch Update Feature?
The Delta Patch Update feature is an update function that Collapse uses which doesn't require you to re-download the entire game (with the benefit of having a reduced download size). This feature will only update the differences between files (hence the "Delta" name) from previous to the next version and produces the new patched files which will be used for the updating the upcoming version.

This feature was first introduced to Collapse Launcher in [**1.0.22.3-RC1-Preview**](https://github.com/neon-nyan/CollapseLauncher/releases/tag/CL-v1.0.22.3-rc1-pre) and  ***does not exist*** the default launcher.

This feature is only available for **Honkai Impact 3rd** and **Honkai: Star Rail** at the moment (other game releases might be considered to be available in the future).
Therefore, this delta-patch will only be available for certain regions for each games, including:
## Honkai Impact 3rd
* Southeast Asia
* Global
* Mainland China<sup> *</sup>
* TW/HK/MO<sup> *</sup>
* Korea<sup> *</sup>
* Japan<sup> *</sup>

## Honkai: Star Rail
* Global
* Mainland China<sup> *</sup>
* Bilibili<sup> * **</sup>

::: info
+ *: The delta-patch feature is tentatively available for this region.<br/>
+ **: The delta-patch for Mainland China can be applied for Bilibili by renaming the "Region Code" from "SRCN" to "HSRCNBilibili" of the .patch file.
:::

## How-To
### 1. Download the ``.patch`` (Delta-patch) file
Collapse no longer downloads the *Delta-patch* file automatically due to their size. You have to download the "**Delta-patch**" file to be used for the update.
For more up-to-date links, please [join our Discord server!](https://discord.gg/vJd2exaS7j). Once you have joined to the Discord Server, make sure to check the specific #delta-patch channel in the "Git Feeds" category. Then find the link to download the delta-patch file.

<figure style="text-align: center;">
  <img src="/img/feature/delta1.webp" style="display: block; margin: 0 auto;" width="720">
</figure>

::: info
Link will not be provided here no more due to changes that might need to be checked before a patch can apply. Please join the server for more up-to-date announcements.
:::

Once you opened the link, you will find the folder which contains each of the version to be updated to.
For example, if you wanted to update your game to version 7.8, then go to ``7.7.0 - 7.8.0`` folder, etc.

You will find a few delta-patch files to choose from. Select the region you want to update to, then click on the "``...``" icon at the right side of the file and select ``Download`` to download the file to your machine.

::: info
The following region codes are used to identify regions which are compatible with the Delta Patch update format
> - ``Hi3SEA`` -> Southeast Asia
> - ``Hi3Global`` -> Global
> - ``Hi3CN`` -> Mainland China
:::

<figure style="text-align: center;">
  <img src="/img/feature/delta2.png" style="display: block; margin: 0 auto;" width="960">
</figure>


### 2. Move the ``.patch`` (Recipe) file to Game Folder
Once the download has finished, move the ``.patch`` file to the game folder. 

::: tip
To find out where your game is installed, open Collapse, select the correct game & region, and click on the ``Game Settings`` button and find the ``Open Game Folder`` button to open the game folder.
:::

### 3. Start the Update
Once you have successfully moved the file to your game directory, Collapse will automatically detect click on the Delta-patch file. If it does not, please restart the launcher before attempting the update operation.

Once the file has been detected, click on the ``Update Game`` button and click ``Yes`` at the dialog. While the process is running, please **DO NOT CLOSE** the launcher and **Do not Panic** if the progress bar does not move or the program becomes unresponsive.

::: warning
There is a high chance of your game files being corrupted if you interrupt this process. You **cannot** downgrade to a previous version once you update your game. Collapse is not responsible for game data corruption. Update time varies depending on system configuration.
:::

## TL;DR: How-To

<figure style="text-align: center;">
  <img src="/img/feature/delta3.webp" style="display: block; margin: 0 auto;">
</figure>
