---
title: Frequently Asked Questions | Collapse Launcher
---

# Frequently Asked Questions

## Q: Will I get banned if I use this launcher? Why should we trust you guys?
**A: Short answer, not likely.**

Our team always try our best to mimic what the official launcher and the games do to its file and configurations (except any feature that is labeled as "Experimental"). We also absolutely do not do any game hooking, direct memory read/write to the game process, and any assets/game files modification out of the scope for what the game needs to run.

Our team has not receive any report of account banning for strictly using Collapse Launcher as their preferred launcher of choice at the moment.

::: tip
You can read what feature we support and can add to the launcher by reading "Restrictions for New Feature(s)" section in our [Contribution Guideline](/docs/contrib.html)
:::

As for trust, the decision is ultimately on you as the end-user. We have open sourced all of our user-facing codes and sign our binary for public releases ([read more](/docs/legals/code-signing-policy)). We also do a regular code checking for both code quality (using Qodana) and dependency security vulnerability (using Snyk) in which you can see them publicly via our <a href="https://github.com/CollapseLauncher/Collapse/security" target="_blank">GitHub security dashboard</a>.

## Q: What is the advantages of using this launcher compared to the official launcher?
**A: We have added more advanced features including the ability to check and update all the game files and caches (including what you used to need to download inside the game), ability to change game settings without opening the game, and many more!**
:::tip
You can read our feature list for each supported game/region in our [feature matrix table](/features).
:::

## Q: Can I use Collapse alongside the official launchers? Can I migrate all my downloaded games to Collapse?
**A: Absolutely!**
You can use Collapse to manage all the games installed from official launcher. Collapse should automatically detect the game installation as you click "Install/Locate game", but in the events that it didn't, you can locate to the folder containing the game executable.

## Q: What if an update breaks launcher compatibility? How do I get support if something goes wrong?
**A: Update the launcher!**
We generally pretty fast at identifying problems and will try our best on retaining compatibility with at the very least, basic launcher functionality (game download and launch). In the event that a complete breakage happens, we will try to post announcements and or update to our [Discord server](https://discord.gg/vJd2exaS7j) or to [GitHub issues page](https://github.com/CollapseLauncher/Collapse/issues). You can also ask us in our [GitHub discussion page](https://github.com/orgs/CollapseLauncher/discussions).

As we are not full time developers of Collapse, we might need time to respond due to our real life duties. So please be patient and give us time to respond to you.

## Q: What game version do Collapse support?
**A: Only latest version for the respective game/region, please.**
As all HoYoverse game are a <a href="https://en.wikipedia.org/wiki/Live_service_game" target="_blank">live service game</a>, changes happens all the time making it hard or impossible for supporting old game version, while you can't launch the game anyway because the official game server is only available for latest version.

## Q: Do you guys collect any data? How is it handled?
**A: We do not collect any personal data, though error and the supplemental data is sent to help our maintainers aid development (you can disable)**
Any personal data like Account ID, E-mail, cookies, etc are not collected to us in any form. We only collect error data through Sentry hosted server located in EU which you can disable this feature by going to the application settings or setting system environment variable “DISABLE_SENTRY” to true.
:::tip
You can read our <a href="/docs/legals/privacy.html" target="_blank">Privacy Policy</a> page for more information.
:::

## Q: What is Sophon Downloader Mode?
**A: "Sophon" is a new download mechanism introduced by HoYoVerse recently and allows files to be downloaded into "chunks" rather than downloading a big ZIP archive. The benefits are mainly a lower drive space requirement and increased efficiency for downloads and updates.**

Sophon has 2 update modes, which are:
1. Chunk mode (can be used in both game download and updates)
    In this mode, a file is divided into a sizable chunks (or "parts"). In the event of a game update, the index of chunks between the old version and new version is compared. When a file has some similar chunks, the different chunks will be downloaded and the file will be rebuilt from the old and new chunks, completing a file.

2. Patch mode (exclusively used for game update)
   In this mode, the API provides a "patch" for each game file, containing only the differences between the old and new versions. During the update, the patch is applied directly to the target file.
:::tip
The update mode used depends on the game and can be either Sophon Chunk Mode, Sophon Patch Mode, or, if Sophon is unavailable, the legacy ZIP method. You can disable Sophon mode in the launcher settings to force the use of the ZIP method. However, do note that the ZIP method is less efficient in terms of size and requires significantly more free disk space, though it may be more suitable for HDD users.
:::