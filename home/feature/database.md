---
title: Data Sync | Collapse Launcher
---
# User Data Synchronization
You can set-up completely private data synchronization that only you have access to. Currently only implemented for playtime data but more coming soon<sup>tm</sup>.

## Creating Database

1. Create account in Turso https://app.turso.tech/
2. Create database group, name it how you like.

::: tip
Fly.io is the most free one available, so we'd recommend choosing that.

Also select the database location to wherever closest to you for the best connection latency.
:::

[<img width="720" src="/img/feature/db1.png"/>](/img/feature/db1.png)

3. Create database
::: info
Name it however you like and pick the group you just made in the earlier step
:::

::: danger
Do NOT enable "Schema Only"
:::

[<img width="720" src="/img/feature/db2.png"/>](/img/feature/db2.png)

4. Copy the database URL by clicking on it. Paste it on the database URL field in Collapse settings
::: info
Do not worry about the URL protocol automatically changed from `libsql://` to `https://`. It is done automatically by Collapse due to limitation in the library we used to connect to the database
:::

[<img width="720" src="/img/feature/db3.png"/>](/img/feature/db3.png)

5. Press the three dots menu next to the database you created, then press Create Token
::: info
Set the expiration to `No expiration` and the access to be `Read & Write`
:::

::: warning
Sharing Database URL and its token to anyone else will give them FULL access to the database, including modifying and deleting your entire database. Be careful with it.
:::

![image](https://github.com/user-attachments/assets/b2274cd4-ab8b-414b-9f94-81f7035cb64d)

::: info
Paste the created token into Collapse setting field
:::

6. Create User ID
::: info
This user ID field is primarily used for those who wants to share their database with someone else but still have the data separated.

You can use any string combination or press the Generate UID to automatically generate it for you.
:::

::: danger
Do not ever lose this ID as you will not be able to access your data again without complicated database table moving.
:::
7. Validate the Settings
::: info
By pressing `Validate and Save` button, Collapse will try to verify the connection to the database and see if everything is good. If there is an error, it will be shown in a pop-up dialog and the settings won't be saved.
:::
