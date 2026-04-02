<template>
    <div>
        <p>&nbsp;</p>
        <div class="footer">
            Built with <span class="tooltip">💗, from the Collapse core development team
                <div class="tooltip-content">
                    <img src="/img/cat.webp" alt="uu ii aa uu ii aa u" loading="lazy">
                </div>
            </span>
        </div>
    </div>
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
    text-align: center; /* Center the image inside the tooltip */
}

.tooltip:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
}
</style>