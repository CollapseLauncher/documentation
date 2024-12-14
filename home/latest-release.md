---
title: Redirecting to Latest Release...
layout: page
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
      window.open(latestReleaseUrl, "_blank");
      window.location.href = "/";
    } catch (error) {
      console.error("Error fetching latest release:", error);
      await delay(5000)
      window.location.href = "/";
    }
  };

  fetchLatestReleaseUrl();
}
</script>

# Redirecting to the latest release page...