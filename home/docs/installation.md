---
title: Installation Guide | Collapse Launcher
---

# Installation Guide
Installing Collapse Launcher is very easy. Everything you need to run the app is already included as a self-packaged application. All you need to do is download the version you'd like to use, install it (optional), and run the launcher!

::: info
While this guide is not frequently updated, you can always use it as a general guideline for installing Collapse!
:::

## Preparation Before Installing
<p>Before installing, make sure that you're using Windows 10 (Version 1809 or above) or Windows 11 (any version). While Collapse <em>could</em> run on older versions or other operating systems, support <strong>will not be provided</strong>. To check your Windows build, press <kbd><i class="fa-brands fa-windows"></i></kbd> + <kbd>R</kbd> on your keyboard and type <code>winver</code> &gt; press <code>Enter</code> or just click <kbd>OK</kbd>.</p>

<figure style="text-align: center;">
  <img src="/img/docs/winver.png" alt="Run winver" title="Run winver" style="display: block; margin: 0 auto;" width="480">
</figure>

After it opens, You will able to see the Version and Build Number of your OS.

<figure style="text-align: center;">
  <img src="/img/docs/buildnum.png" alt="Version guide" title="Version guide" style="display: block; margin: 0 auto;" width="480">
</figure>

### How do I know if I can run Collapse?
If your version number indicates one of the following versions:

``1809`` ``1903`` ``1909`` ``2004`` ``20H2`` ``21H1`` ``21H2`` ``22H1`` ``or higher``

That means your current OS build is supported by this launcher.

Likewise, if the build number is greater than or equivalent to ``17763.xxxx``, it means that your operating system is supported by this launcher.

### User requirements
Collapse, by its nature, requires administrator credentials in order to run. This is because several features inside the launcher require access to the Windows Registry and other low-level Windows components. Collapse also needs these permissions in order to create folders, update itself and maintain a valid installation environment for our currently supported games, all of which cannot be accomplished without elevated priviliges. Should this change, we will be sure to update this guide and provide an official announcements via our usual channels (GitHub & Discord).

## How to Install using the Installer?
The steps are straightforward and simple. You just need to go to the  [**Releases**](https://github.com/CollapseLauncher/Collapse/releases/latest) page (for the **latest stable** build) or [**here**](https://github.com/CollapseLauncher/Collapse/releases/) (for **all builds**).

After that, find the latest release, which should be the first one and scroll down. Find the ``Assets`` dropdown. Toggle it if necessary, then download ``CollapseLauncher-<stable or preview>-Setup.exe`` and run it to install Collapse on your local machine.

<br/>

<figure style="text-align: center;">
  <img src="/img/docs/githubrelease.png" alt="Assets view in GitHub Release" title="Assets view in GitHub Release" style="display: block; margin: 0 auto;" width="auto">
</figure>

::: tip
You can change the install location by running the installer with argument ``--installto <Directory>``. Do note that you can only do this to a folder that does not need administrator privelege! Read more at <a href="https://docs.velopack.io/reference/cli/content/setup-windows"> Velopack documentation</a>.

If you do not want to install the launcher, portable builds are also available! Simply download ``CL-x.xx.xxxx_Portable.7z`` and extract it to your location of choice. You can then start the launcher by running ``CollapseLauncher.exe``. Further explanations can be found <a href="#how-do-i-use-the-portable-build"> here</a>.
:::

If you have the following pop-up from Microsoft while trying to install, click on ``More Info``, then click on ``Run Anyway``. 

While this should no longer happen as the installer is signed, if you get the popup it just means that the file has not been scanned by many people using Windows Security (Windows Defender).

<figure style="text-align: center;">
  <img src="/img/docs/smartscreen.webp" alt="Smartscreen Alert" title="Smartscreen Alert" style="display: block; margin: 0 auto;" width="480">
  <img src="/img/docs/smartscreen-runanyway.png" alt="Run anyway" title="Run anyway" style="display: block; margin: 0 auto;" width="480">
</figure>

Follow the instruction in the Installer (if necessary) to successfully install Collapse!
Once finished, the launcher icon will appear in your Start Menu or your Desktop, or both, depending on your selection during the installation process.

<figure style="text-align: center;">
  <img src="/img/docs/shortcuts.webp" alt="Shortcut locations" title="Shortcut locations" style="display: block; margin: 0 auto;" width="auto">
</figure>

## How do I use the Portable build?
Head over to the [**Release Page**](https://github.com/neon-nyan/CollapseLauncher/releases/latest) (for the **latest stable** build) or [**here**](https://github.com/neon-nyan/CollapseLauncher/releases/) (for **all** previous builds). Scroll down to the version you would like to install and toggle the ``Assets`` dropdown. 

::: warning
If you are downloading Collapse `1.0.69.1-preview` or earlier, any release file tagged ``CL-x.x.x.xxxx_-xxxxx_PortableMinimal.7z`` requires the user to already have a .NET 7 runtime installed on their machine. Any release starting from `1.69.8` will no longer include the aforementioned minimal installation due to a drastic reduction in the size of our installer bundle since then. 
:::


<figure style="text-align: center;">
  <img src="/img/docs/githubrelease-portable.png" alt="Installation type selection" title="Installation type selection" style="display: block; margin: 0 auto;" width="auto">
</figure>

Should you download the Portable build, make sure to extract the files with a tool like [**7-Zip**](https://www.7-zip.org/download.html) or any other ``LZMA2`` compatible archiver like WinRAR.

After extracting, simply run ``CollapseLauncher.exe`` as an administrator if it does not prompt you already.

<figure style="text-align: center;">
  <img src="/img/docs/portable-runthis.png" alt="Program to run on Portable build" title="Program to run on Portable build" style="display: block; margin: 0 auto;" width="auto">
</figure>

::: tip
Please keep in mind that, should you have a version of Collapse that is older than one released in the last 6-8 months, it is recommended that you do a clean install due to the amount of changes that have been made to the launcher. While it is still possible to update Collapse, we do not recommend it due potential application instability. 
:::