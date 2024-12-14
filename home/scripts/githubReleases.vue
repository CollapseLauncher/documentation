<template>
    <div v-if="ready">
        <a :href="latestReleaseUrl" class="button padded-button" target="_blank">Download Latest Release</a>
        <a :href="preReleaseUrl" class="button padded-button" target="_blank">Download Pre-Release</a>
    </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
    data() {
        return {
            latestReleaseUrl: "#",
            preReleaseUrl: "#",
            ready: false,
        };
    },
    async created() {
        const owner = "CollapseLauncher"; // Replace with your GitHub username
        const repo = "Collapse"; // Replace with your repository name

        const releases = await this.fetchGitHubReleases(owner, repo);

        if (releases.latestRelease) {
            this.latestReleaseUrl = releases.latestRelease.url;
        }
        if (releases.latestPreRelease) {
            this.preReleaseUrl = releases.latestPreRelease.url;
        }
        this.ready = true;
    },
    methods: {
        async fetchGitHubReleases(owner, repo) {
            try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
                const releases = await response.json();

                const latestRelease = releases.find(release => !release.prerelease);
                const latestPreRelease = releases.find(release => release.prerelease);

                return {
                    latestRelease: latestRelease ? { tag: latestRelease.tag_name, url: latestRelease.html_url } : null,
                    latestPreRelease: latestPreRelease ? { tag: latestPreRelease.tag_name, url: latestPreRelease.html_url } : null,
                };
            } catch (error) {
                console.error("Error fetching releases:", error);
                return { latestRelease: null, latestPreRelease: null };
            }
        },
    },
};
</script>

<style scoped>
.padded-button {
    margin-left: 10px;
    margin-right: 10px;
}

.button {
    display: inline-block;
    margin: 10px 10px;
    padding: 0.6em 1.2em;
    text-decoration: none;
    color: #fff;
    background-color: #3E63ED;
    border-radius: 20px;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #5c73e7;
    color: #fff;
}
</style>
