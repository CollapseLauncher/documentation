<template>
    <p>&nbsp;</p>
    <p class="footer">built with <span class="tooltip">💗
        <div class="tooltip-content">
            <img src="/img/cat.gif" alt="Cat">
        </div>
    </span></p>
</template>

<style scoped>
.footer {
    text-align: center;
    font-size: 1em;
    margin-top: 1em;
}

.tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.tooltip .tooltip-content {
    visibility: hidden;
    width: 120px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px;
    position: absolute;
    z-index: 1;
    top: 100%; /* Position the tooltip below the text */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
}
</style>