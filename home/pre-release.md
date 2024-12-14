---
title: Redirecting to Pre-Release...
layout: page
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
      window.open(preReleaseUrl, "_blank");
      window.location.href = "/";
    } catch (error) {
      console.error("Error fetching pre-release:", error);
      await delay(5000)
      window.location.href = "/";
    }
  };

  fetchPreReleaseUrl();
}
</script>

# Redirecting to the preview release page...
