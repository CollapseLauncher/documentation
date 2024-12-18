---
title: Redirecting to Pre-Release...
layout: page
sidebar: false
navbar: false
---

<script setup>
if (typeof window !== 'undefined') {
  const owner = "CollapseLauncher";
  const repo = "Collapse";

  const fetchPreReleaseUrl = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
      const releases = await response.json();
      const preRelease = releases.find(release => release.prerelease);
      const preReleaseUrl = preRelease ? preRelease.html_url : "#";
      window.location.href = preReleaseUrl;
    } catch (error) {
      console.error("Error fetching pre-release:", error);
    }
  };

  fetchPreReleaseUrl();
}
</script>

# Redirecting to the preview release page...
