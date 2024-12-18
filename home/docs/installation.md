---
title: Installation Guide | Collapse Launcher
---
<script setup>
    import WinKey from '../scripts/WinKey.vue';
    if (typeof document !== 'undefined') {
        document.title = "Installation Guide | Collapse Launcher";
    }
</script>

# How-To: Install
Installing Collapse Launcher is very easy. Everything you need to run the app is included as self-packaged application. Just need to download, install (optional), and run!

::: info
While this guide is pretty old, you can still use this guide as a general guideline for installing Collapse!
:::

## Preparation Before Installing
<p>Before installing, make sure that you're using Windows 10 (Version 1809 or above) or Windows 11 (any version). While Collapse <em>may</em> run on older versions or other operating systems, support <strong>will not be provided</strong>. To check your Windows build, press <kbd><WinKey/></kbd> + <kbd>R</kbd> on your keyboard and type <code>winver</code> &gt; press <code>Enter</code> or just click <kbd>OK</kbd>.</p>

<figure style="text-align: center;">
  <img src="/img/docs/winver.png" alt="Run winver" title="Run winver" style="display: block; margin: 0 auto;" width="480">
</figure>

After it opens, You will able to see the Version and Build Number of your OS.

<figure style="text-align: center;">
  <img src="/img/docs/buildnum.png" alt="Version guide" title="Version guide" style="display: block; margin: 0 auto;" width="480">
</figure>

### How do I know if I can run Collapse?
If your Version Number indicates one of the following versions:

``1809`` ``1903`` ``1909`` ``2004`` ``20H2`` ``21H1`` ``21H2`` ``22H1`` ``or higher``

That means your OS is supported by this launcher.

If the Build Number is greater than or equivalent to ``17763.xxxx``, it means your OS is supported by this launcher.

***

## How to Install using the Installer?
The steps are straightforward and simple. You just need to go to the  [**Releases**](https://github.com/neon-nyan/CollapseLauncher/releases/latest) page (for the **latest stable** build) or [**here**](https://github.com/neon-nyan/CollapseLauncher/releases/) (for **all builds**).

After that, find the latest release, which should be the first one and scroll down. Find the ``Assets`` dropdown. Toggle it if necessary, then download ``CL-x.x.xx_Installer.exe`` and run it to install Collapse on your local machine.
<br/>

<figure style="text-align: center;">
  <img src="/img/docs/githubrelease.png" alt="Assets view in GitHub Release" title="Assets view in GitHub Release" style="display: block; margin: 0 auto;" width="auto">
</figure>

If you have the following pop-up from Microsoft while trying to install, click on ``More Info``, then click on ``Run Anyway``. 

<figure style="text-align: center;">
  <img src="/img/docs/smartscreen.webp" alt="Smartscreen Alert" title="Smartscreen Alert" style="display: block; margin: 0 auto;" width="480">
  <img src="/img/docs/smartscreen-runanyway.png" alt="Run anyway" title="Run anyway" style="display: block; margin: 0 auto;" width="480">
</figure>

Follow the instruction on the Installer to successfully install Collapse!
Once finished, the Launcher icon will appear in your Start Menu or your Desktop, or both, depending on your selection during the installation process.

<figure style="text-align: center;">
  <img src="/img/docs/shortcuts.webp" alt="Shortcut locations" title="Shortcut locations" style="display: block; margin: 0 auto;" width="auto">
</figure>

## How do I use the Portable Build?
Head over to the [**Release Page**](https://github.com/neon-nyan/CollapseLauncher/releases/latest) (for the **latest stable** build) or [**here**](https://github.com/neon-nyan/CollapseLauncher/releases/) (for **all** previous builds). Scroll down to the version you would like to install and toggle the ``Assets`` dropdown. If you are downloading Collapse `1.0.69.1-preview` or earlier, any release file tagged ``CL-x.x.x.xxxx_-xxxxx_PortableMinimal.7z`` requires the user to already have a .NET 7 runtime installed on their machine. Any release starting from `1.69.8` will no longer include the aforementioned minimal installation due to a drastic reduction in the size of our installer bundle since then. 

<figure style="text-align: center;">
  <img src="/img/docs/githubrelease-portable.png" alt="Installation type selection" title="Installation type selection" style="display: block; margin: 0 auto;" width="auto">
</figure>

Should you download the Portable build, make sure to extract the files with a tool like [**7-Zip**](https://www.7-zip.org/download.html) or any other ``LZMA2`` compatible archiver like WinRAR.

After extracting, simply run ``CollapseLauncher.exe`` as an administrator if it does not prompt you already.

<figure style="text-align: center;">
  <img src="/img/docs/portable-runthis.png" alt="Program to run on Portable build" title="Program to run on Portable build" style="display: block; margin: 0 auto;" width="auto">
</figure>

Please keep in mind that, should you have a version of Collapse that is older than one released in the last 6-8 months, it is recommended that you do a clean install due to the amount of changes that have been made to the launcher. While it is still possible to update Collapse, we do not recommend it due to reasons listed above. 
