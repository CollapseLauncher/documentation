<script setup>
    import featureTable from './scripts/features.vue'
    if (typeof document !== 'undefined') {
        document.title = 'Feature Matrix | Coolapse Launcher'
    }
</script>

<featureTable />