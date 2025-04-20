---
title: Game Common Issues | Collapse Launcher
---

# Genshin Impact

## [GI] Data Error [Error Code: 31-4302]

<figure style="text-align: left">
  <a>
    <img src='/img/docs/gi-31-4302.png' 
         title="Genshin Impact 31-4302 error" 
         alt="Genshin Impact 31-4302 error" 
         loading="lazy" 
         style="display: block;" 
         width="480" 
         data-zoomable>
  </a>
</figure>


This could be triggered by number of factors, but usually a rouge `.dll` or `.exe` file anywhere in the game folder tree. Make sure that:
1. You don't put any other dll or exe file anywhere in the game tree unless its the game file
2. Make sure you don't combine other game into the same folder (this applies to any game, please do not do it)

If you still can't find the file culprit, run "Game Files Cleanup" feature in Collapse and delete any detected entry either to Recycle Bin or permanently.

***


# Honkai Impact 3rd

## [HI3] Audio Patch Verify Fail

<figure style="text-align: left">
  <a>
    <img src='/img/docs/hi3-verifyfail.png' 
         title="Genshin Impact 31-4302 error" 
         alt="Genshin Impact 31-4302 error" 
         loading="lazy" 
         style="display: block;" 
         width="480" 
         data-zoomable>
  </a>
</figure>

This is caused by the pre-check of the in-game audio patching mechanism detected that the audio asset before patching is not what they expect, causing an error. There are ways to fix these:
1. (Safest) Do a full repair using Collapse Launcher.
Our launcher repair mechanism is able to fix this using our custom-made metadata. It's usually available the same time when the server is up, so please be patient.

2. Trigger complete audio redownload
You can trigger this action for the game to download all the newest audio files by deleting the `Version.txt` file in `BH3_Data\StreamingAssets\Audio\GeneratedSoundBanks\Windows` directory. 
::: warning
Audio redownload will need about 7 - 10 GB of data. Make sure your internet is stable and you are not using metered data to avoid internet cost balloon.
:::

3. (Dangerous) Manually editing the hash identifier
Example step for `Audio_Default.pcktemp` file
    1. Get MD5 for `Audio_Default.pcktemp` using 7z or PowerShell command `Get-FileHash [path to the file] -Algorithm MD5`
    2. Put it inside the Version.txt file as the Audio_Default.pck MD5 (replace the current value)
    3. Restart the game, then do in-game check, twice.
    4. In this part you might went beyond the lift and actually went into the game at 1st step, but this might give you missing audio on certain scenes, so close the game and do a 2nd try on the in-game check.

