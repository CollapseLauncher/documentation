---
title: Building in your Local Environment | Collapse Launcher
---

# Building Collapse Launcher

## Tools Needed

Below is a list of tools needed to contribute to this project:

1. **Visual Studio 2022 (Any Edition - 17.12 or later)**
   - Select .NET desktop development component
2. **Windows SDK (10.0.22621.0 ONLY)** via Visual Studio Installer
3. .NET 9 SDK: [**(9.0.0 or later)**](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)

::: info
Starting from September 29<sup>th</sup> 2024, you <b>must</b> have Visual Studio 2022 version 17.12+ installed on your computer due to the updated minimum system requirement of `.NET 9`.

Using a lower Visual Studio version (like VS2019) is not possible due to requirement from WindowsAppSDK used in this project.
:::

## Cloning Repository

- Unless otherwise stated in this project's README, please make sure to clone the source code from the `main` branch using `--recurse-submodules` parameter to pull all the submodules Collapse needs to compile.

    ```git clone https://github.com/CollapseLauncher/Collapse --recurse-submodules```

- Make sure you use the supported IDE & SDKs listed.
- Make sure to read the "Restriction for New Feature(s)" section in 'Contribution Guidelines'.
- When submitting a Pull Request (PR), make sure that it is done to the same branch from which you first pulled, unless otherwise stated in the project's README, or if specifically instructed by maintainers of this project.
- We don't require a fully descriptive PR, but please be clear on what is added/removed and what the code does.