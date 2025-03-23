<template>
  <v-timeline align="start">
    <v-timeline-item
      icon="mdi-alert-decagram"
      dot-color="purple-lighten-2">
      <template v-slot:opposite>
        November 2nd, 2024
      </template>
      <div>
        <div class="text-h6">1.82.0 Release</div>
        <p>
          This release branch is mainly focused on code improvements leading to implementation of NativeAOT, including upgrading to .NET 9.0.
        </p>
        <p>
          It also includes some new features, including Bandwidth Limiter, Per-region custom background, playtime synchronization, and more.
        </p>
      </div>
      <v-btn 
        color="purple-lighten-3"
        href="https://github.com/CollapseLauncher/Collapse/releases/tag/CL-v1.82.0-pre"
        target="_blank">
        Release notes
      </v-btn>
    </v-timeline-item>

    <v-timeline-item
      icon="mdi-alert-decagram"
      icon-color="white"
      dot-color="green-lighten-2">
      <template v-slot:opposite>
        April 12th, 2024
      </template>
      <div>
        <div class="text-h6">1.80.0 Release</div>
        <p>
          UI overhaul update! This release includes a new UI design, new features, and bug fixes.
        </p>
        <p>
          This release also adds capability to use video as custom background, and other improvements in background backend codes.
        </p>
      </div>
      <v-btn 
        color="green-lighten-3"
        href="https://github.com/CollapseLauncher/Collapse/releases/tag/CL-v1.80.0-pre"
        target="_blank">
        Release notes
      </v-btn>
    </v-timeline-item>
  </v-timeline>
</template>