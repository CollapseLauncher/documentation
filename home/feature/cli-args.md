---
title: Command Line Arguments | Collapse Launcher
---

# What is a command line argument?

Command line arguments are special instructions that can be passed to Collapse when launching it. They can temporarily change Collapse's behaviour at start-up. Only one argument can be used per launch.

To use a command line argument, you can either:
- Use a **terminal** and add it after the executable.
  <br> (e.g., `CollapseLauncher.exe tray`) 

- Use Windows' **Run window** or a **web browser** to call Collapse's URL Protocol.
  <br> (e.g., `collapse://tray`)

# What command line arguments are available to use?

## tray
Starts Collapse hidden in the system tray.

### Examples
```
CollapseLauncher.exe tray
```
```
collapse://tray
```

## open
Loads a specific game/region when launching Collapse.

### Options
#### REQUIRED
- `-g <game name/ID>` or `--game <game name/id>`
  <br> Specifies the game to load.
  <br> If invalid, the entire command will be ignored.

#### OPTIONAL
- `-r <region name/id>` or `--region <region name/id>`
  <br> Specifies the region to load.
  <br> If not specified or invalid, the last opened region for the game will be opened.

- `-p` or `--play`
  <br> Launches the game automatically after Collapse opens.

### Notes
- If the game/region name has spaces, the name must be enclosed by quotes.
- The ID of a game/region corresponds to their position in the Launcher Selector (being the first game/region at position 0). Some examples of IDs are:

<div align="center">

<table>
<tr>
<td>
<table>
	<thead>
		<tr>
			<th colspan=2>Game</th>
			<th>ID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan=2>Honkai Impact 3rd</td>
			<td>0</td>
		</tr>
		<tr>
			<td colspan=2>Genshin Impact</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Honkai: Star Rail</td>
			<td colspan=2>2</td>
		</tr>
	</tbody>
</table>
</td>
<td>
<table>
	<thead>
		<tr>
			<th colspan=2>Regions for Genshin Impact</th>
			<th>ID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan=2>Global</td>
			<td>0</td>
		</tr>
		<tr>
			<td colspan=2>Mainland China</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Bilibili</td>
			<td colspan=2>2</td>
		</tr>
	</tbody>
</table>
</td>
</tr>
</table>
</div>

### Examples
- Load Genshin Impact (last used region)
```
CollapseLauncher.exe open -g "Genshin Impact"
```
- Load Honkai: Star Rail (Bilibili region)
```
collapse://open -g "Honkai: Star Rail" -r Bilibili
```
- Load and start Honkai Impact 3rd (Southeast Asia region)
```
CollapseLauncher.exe open -g "Honkai Impact 3rd" -r "Southeast Asia" -p
```