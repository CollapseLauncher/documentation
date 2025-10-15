---
title: Frequently Asked Questions | Collapse Launcher
---

# Frequently Asked Questions

## Q: Will I get banned if I use this launcher? Why should we trust you guys?
**A: The short answer, highly unlikely.**

As for the long answer:

Our team always tries its best to mimic what the official launcher and the games do to their files and configurations (except any feature that is labeled as "Experimental"). We also do not do any game hooking, direct memory read/write operations to the game process, and any assets/game files modification out of the scope for what the game needs to run.

Our team has not yet received reports of accounts being banned for strictly using Collapse as their preferred launcher of choice.

::: tip
You can read what feature we support and can add to the launcher by reading the "Restrictions for New Feature(s)" section in our [Contribution Guideline](/docs/contrib.html).
:::

As for trust, the decision rests ultimately on you as the end-user. We have open sourced all of our user-facing code and sign our binaries for public releases (which you can read more on [here](/docs/legals/code-signing-policy)). We also do regular code scanning for both code quality (using Qodana) and dependency security vulnerability (using Snyk), which you can see publicly via our <a href="https://github.com/CollapseLauncher/Collapse/security" target="_blank">GitHub Security Dashboard</a>.

## Q: What are the advantages of using this launcher compared to the official one?
**A: We have added more advanced features, including the ability to check and update all the game files and caches (including what you used to need to download inside the game), the ability to change game settings without opening the game, and much more!**
:::tip
You can read our feature list for each supported game/region in our [feature matrix table](/features).
:::

## Q: Can I use Collapse alongside the official launcher? Can I migrate all my downloaded games to Collapse?
**A: Absolutely!**
You can use Collapse to manage all the games installed from the official launcher. Collapse should automatically detect the game installation when you click "Install/Locate game", but in the event that it doesn't, you can locate the folder containing the game executable yourself.

## Q: What if an update breaks launcher compatibility? How do I get support if something goes wrong?
**A: Update the launcher!**
We are generally pretty fast at identifying problems and will try our best on retaining compatibility with, at the very least, basic launcher functionality (game download and launch). In the event that a complete breakdown happens, we will usually post announcements and updates to our [Discord server](https://discord.gg/vJd2exaS7j) and to our [status page](https://status.collapselauncher.com). or to [GitHub issues page](https://github.com/CollapseLauncher/Collapse/issues). You can also ask us in our [GitHub discussion page](https://github.com/orgs/CollapseLauncher/discussions).

As we are not full time developers working exclusively on Collapse, we may need extra time to respond due to our real life duties (which come always first).Please be patient and give us time to respond to you.

## Q: What game version(s) do Collapse support?
**A: Only latest version for the respective game/region.**
As all HoYoverse game are <a href="https://en.wikipedia.org/wiki/Live_service_game" target="_blank">live service games</a>, changes happens all the time making it hard and/or impossible for supporting old game versions. You also can't play the old versions of games anyways, because the official game servers are only available for latest version.

**We do not keep archived copies of past game resources, patches or otherwise.**

## Q: Do you guys collect any data? How is it handled?
**A: We do not collect any personal data, though error and supplemental data is sent to help our maintainers diagnose issues (which you can disable).**
Any personal data like Account ID, E-mail, cookies, etc. are not collected. We only collect error data through a Sentry-hosted server, located in the EU. You can disbale this feature by going to the application settings or setting the system environment variable “DISABLE_SENTRY” to true (if you know how, though we recommend the former as a rule-of-thumb).
:::tip
You can read our <a href="/docs/legals/privacy.html" target="_blank">Privacy Policy</a> page for more information.
:::

## Q: What is "Sophon Downloader Mode"?
**A: "Sophon" is a new download mechanism introduced by HoYoVerse to their titles which allows files to be downloaded into "chunks" rather than downloading a big ZIP archive. The benefits are mainly a lower drive space requirement and increased efficiency for downloads and updates.**

Sophon has 2 update modes, which are:
1. Chunk mode (can be used in both game download and updates)
    In this mode, a file is divided into a sizable chunks (or "parts"). In the event of a game update, the index of chunks between the old version and new version is compared. When a file has some similar chunks, the different chunks will be downloaded and the file will be rebuilt from the old and new chunks, completing a file.

2. Patch mode (exclusively used for game update)
   In this mode, the API provides a "patch" for each game file, containing only the differences between the old and new versions. During the update, the patch is applied directly to the target file.
:::tip
The update mode used depends on the game and can be either Sophon Chunk Mode, Sophon Patch Mode, or, if Sophon is unavailable, the legacy ZIP method. You can disable Sophon mode in the launcher settings to force the use of the ZIP method. However, do note that the ZIP method is less efficient in terms of size and requires significantly more free disk space, though it may be more suitable for HDD users because of a lower number of read/write operations.
:::