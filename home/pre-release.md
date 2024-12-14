---
title: Redirecting to Pre-Release...
layout: page
---

<script setup>
const owner = "CollapseLauncher";
const repo = "Collapse";

const fetchPreReleaseUrl = async () => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
    const releases = await response.json();
    const preRelease = releases.find(release => release.prerelease);
    const preReleaseUrl = preRelease ? preRelease.html_url : "#";
    window.open(preReleaseUrl, "_blank");
    window.location.href = "/";
  } catch (error) {
    console.error("Error fetching pre-release:", error);
    window.location.href = "/";
  }
};

fetchPreReleaseUrl();
</script>

<p>Redirecting to the preview release page...</p>
