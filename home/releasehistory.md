<script setup>
    import history from './scripts/releasehistory.vue'
    if (typeof document !== 'undefined') {
        document.title = 'Release History | Coolapse Launcher'
    }
</script>

<history />