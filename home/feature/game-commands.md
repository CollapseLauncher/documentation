---
title: Game Launch Commands | Collapse Launcher
---
# Game Pre-Launch / Post-Exit Commands
This feature allows you to run a command before game being launched and/or after the game has been closed.

::: danger
We are not responsible for what you are running and it's consequence to your system and/or game accounts. You are on your own.
:::

::: danger
Any program run from this feture will have **ADMINISTRATOR LEVEL PRIVILEGE**. Make sure you have ABSOLUTE TRUST to anything you are going to run with this feature.
:::

::: warning
Collapse team does not endorse running any commands that injects or modify the game in any way. We are in any way not responsible for anything that happened to your game should you choose to do so.
:::

Here is what you need to know about this feature:
1. If the command you are running is a CLI (Command Line Interface) application, do note that it will be non-interactable. Meaning you cannot input anything to the console of the command.
2. Working directory of the launch commands will be set to where the CollapseLauncher.exe is located. If the application you are trying to run needs to be run in its own directory (e.g. having its own dependencies), you have to add some commands to change it beforehand.

::: info
Example

```cmd
cd /d C:/testapp/ && C:/testapp/run.exe
```
:::

3. This feature by default will not allow you to change the way Collapse will run the game (e.g. change the executable to be run instead of the game exe itself)