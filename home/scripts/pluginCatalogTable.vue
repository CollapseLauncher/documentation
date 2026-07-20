<script setup>
import { onMounted, ref } from 'vue'
import plugins from '../.data/plugins.json'

const pluginList = ref(plugins)
const releaseCache = new Map()

function parseGithubRepo(repository) {
  const match = repository.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?(?:\/.*)?$/)
  if (!match) {
    return null
  }
  return {
    owner: match[1],
    repo: match[2],
  }
}

async function fetchGithubReleases(owner, repo) {
  const cacheKey = `${owner}/${repo}`
  if (releaseCache.has(cacheKey)) {
    return releaseCache.get(cacheKey)
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases?per_page=5`)
    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`)
    }
    const releases = await response.json()
    releaseCache.set(cacheKey, releases)
    return releases
  } catch (error) {
    console.error(`Failed to fetch releases for ${owner}/${repo}:`, error)
    releaseCache.set(cacheKey, [])
    return []
  }
}

function extractVersionFromTag(tagName, tagPrefix) {
  if (!tagName || !tagPrefix) {
    return null
  }
  return tagName.startsWith(tagPrefix) ? tagName.slice(tagPrefix.length) : null
}

function formatReleaseDate(release) {
  const dateString = release.published_at || release.created_at
  if (!dateString) {
    return null
  }

  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) {
    return null
  }

  const day = date.getUTCDate()
  const suffix = day % 10 === 1 && day !== 11 ? 'st'
    : day % 10 === 2 && day !== 12 ? 'nd'
    : day % 10 === 3 && day !== 13 ? 'rd'
    : 'th'
  const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' })
  const year = date.getUTCFullYear()
  return `${month} ${day}${suffix}, ${year}`
}

function normalizeGithubDownloadUrl(url, releaseTag) {
  if (!url || !releaseTag) {
    return url
  }

  if (!url.includes('github.com')) {
    return url
  }

  let updatedUrl = url
  updatedUrl = updatedUrl.replace(/(\/releases\/tag\/)[^#?]*/i, `$1${encodeURIComponent(releaseTag)}`)
  updatedUrl = updatedUrl.replace(/(#release-)[^#?]*$/i, `$1${releaseTag}`)
  return updatedUrl
}

onMounted(async () => {
  await Promise.all(pluginList.value.map(async (plugin) => {
    try {
      const tagPrefix = plugin.status?.tagPrefix
      const repository = plugin.repository
      if (!repository) {
        return
      }

      const parsed = parseGithubRepo(repository)
      if (!parsed) {
        console.error(`Invalid GitHub repository URL for plugin: ${plugin.game?.name ?? repository}`)
        return
      }

      const releases = await fetchGithubReleases(parsed.owner, parsed.repo)
      if (!releases.length) {
        console.error(`No releases found for ${parsed.owner}/${parsed.repo}`)
        return
      }

      const matchingRelease = tagPrefix
        ? releases.find((release) => !release.draft && release.tag_name?.startsWith(tagPrefix))
        : releases.find((release) => !release.draft)

      if (!matchingRelease) {
        console.error(`No matching release found for ${plugin.game?.name ?? repository} with tagPrefix=${tagPrefix}`)
        return
      }

      const newVersion = tagPrefix
        ? extractVersionFromTag(matchingRelease.tag_name, tagPrefix)
        : matchingRelease.tag_name
      if (newVersion) {
        plugin.status.version = newVersion
      }

      const newDate = formatReleaseDate(matchingRelease)
      if (newDate) {
        plugin.status.date = newDate
      }

      if (Array.isArray(plugin.downloads)) {
        plugin.downloads.forEach((download) => {
          download.url = normalizeGithubDownloadUrl(download.url, matchingRelease.tag_name)
        })
      }
    } catch (error) {
      console.error(`Plugin status update failed for ${plugin.game?.name ?? plugin.repository}:`, error)
    }
  }))
})
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
      <tr v-for="p in pluginList" :key="p.game.name">
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

        <td>
          <div v-for="r in p.regions" :key="r">
            {{ r }}
          </div>
        </td>

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
