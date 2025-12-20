<script setup>
import plugins from '../.data/plugins.json'
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Game Titles</th>
        <th>Plugin Codename</th>
        <th>Maintainer</th>
        <th>Status / Version</th>
        <th>Plugin API Standard</th>
        <th>Supported Launcher</th>
        <th>Automatic Update Support?</th>
        <th>Supported Game Regions/Servers</th>
        <th>Download Link</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="p in plugins" :key="p.game.name">
        <td>
          <a :href="p.game.url" target="_blank">
            <strong>{{ p.game.name }}</strong>
          </a>
        </td>

        <td>{{ p.codename ?? 'N/A' }}</td>

        <td>
          <a :href="p.maintainer.url" target="_blank">
            <strong>{{ p.maintainer.name }}</strong>
          </a>
          <br />
          ({{ p.maintainer.note }})
        </td>

        <td>
          {{ p.status.label }} /
          <strong>{{ p.status.version }}</strong>
          <br />
          {{ p.status.date }}
        </td>

        <td><strong>{{ p.api }}</strong></td>

        <td><strong>{{ p.launcher }}</strong></td>

        <td style="text-align:center">
          {{ p.autoUpdate ? '✅' : '❌' }}
        </td>

        <td>{{ p.regions }}</td>

        <td>
          <div v-for="d in p.downloads" :key="d.url">
            <a :href="d.url" target="_blank">
              <strong>{{ d.label }}</strong>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
