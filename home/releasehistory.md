<script setup>
    import history from './scripts/releasehistory.vue'
    if (typeof document !== 'undefined') {
        document.title = 'Release History | Collapse Launcher'
    }
</script>

<history />