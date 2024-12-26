<template>
    <div>
        <div class="footer">
            <p>&nbsp; &copy; 2024 - {{ currentYear }}. All rights reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
};
</script>

<style scoped>
.footer {
    position: relative;
    width: 100%;
    text-align: center;
}
</style>