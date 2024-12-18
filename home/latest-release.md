---
title: Redirecting to Latest Release...
layout: page
sidebar: false
navbar: false
---

<script setup>
if (typeof window !== 'undefined') {
  const owner = "CollapseLauncher";
  const repo = "Collapse";

  const fetchLatestReleaseUrl = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
      const releases = await response.json();
      const latestRelease = releases.find(release => !release.prerelease);
      const latestReleaseUrl = latestRelease ? latestRelease.html_url : "#";
      window.location.href = latestReleaseUrl;
    } catch (error) {
      console.error("Error fetching latest release:", error);
    }
  };

  fetchLatestReleaseUrl();
}
</script>

# Redirecting to the latest release page...
