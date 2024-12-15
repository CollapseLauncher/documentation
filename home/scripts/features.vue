<template>
    <h1 class="center">Feature Matrix Table</h1>
    <p>&nbsp;</p>
    <section class="featureTable">
        <div class="legends">
            <p><strong>Feature:</strong> ✅ - Available | ❌ - Not Available | ⚠️ - Partially Available</p>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th rowspan="2" class="resizable">Game</th>
                        <th rowspan="2" class="resizable">Region</th>
                        <th colspan="7">Features</th>
                    </tr>
                    <tr>
                        <th class="feature-header">Install</th>
                        <th class="feature-header">Pre-load</th>
                        <th class="feature-header">Update</th>
                        <th class="feature-header">Game Repair</th>
                        <th class="feature-header">Cache Update</th>
                        <th class="feature-header">Game Settings</th>
                        <th class="feature-header">Game Region Convert</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(game, index) in games" :key="index">
                        <tr v-for="(region, rIndex) in game.regions" :key="rIndex" :class="'game-row'">
                            <template v-if="rIndex === 0">
                                <td :rowspan="game.regions.length" class="resizable">{{ game.title }}</td>
                            </template>
                            <td class="resizable">{{ region.name }}</td>
                            <td v-for="(feature, fIndex) in region.features" :key="fIndex" class="feature-cell">
                                <span v-if="!feature.tooltip">{{ feature.emoji }}</span>
                                <span v-else class="tooltip">{{ feature.emoji }}<sup>i</sup><span class="tooltiptext">{{ feature.tooltip }}</span></span>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import { games } from './featureTableData.js';
export default {
    data() {
        return {
            games
        };
    },
    mounted() {
        this.setTooltipColors();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.setTooltipColors);
    },
    methods: {
        setTooltipColors() {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.style.setProperty('--tooltip-bg-color', isDarkMode ? '#fff' : '#555');
            document.documentElement.style.setProperty('--tooltip-text-color', isDarkMode ? '#000' : '#fff');
            document.documentElement.style.setProperty('--tooltip-identifier-color', isDarkMode ? '#fff' : '#000');
        }
    }
};
</script>

<style scoped>
.center {
    text-align: center;
}

.featureTable {
    width: 100%;
    overflow-x: auto;
    max-width: 1500px;
    margin: 0 auto;
    justify-self: center;
    justify-content: center;
}

.legends {
    margin-bottom: 10px;
    font-size: 0.9em;
    text-align: left;
}

.table-container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1500px;
}

.featureTable table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
}

.featureTable th, .featureTable td {
    border: 1px solid #dddddd1d;
    padding: 8px;
}

.featureTable th {
    background-color: #f2f2f231;
    font-weight: bold;
    text-align: center;
}

.featureTable th.feature-header, .featureTable td.feature-cell {
    width: 90px;
}

.featureTable th.resizable, .featureTable td.resizable {
    width: auto;
}

.featureTable tr:nth-child(even) {
    background-color: #f9f9f90b;
}

.featureTable tr:hover, .featureTable tr:hover td {
    background-color: #dddddd45;
}

.featureTable .game-row:hover, .featureTable .game-row:hover td {
    background-color: #dddddd45;
}

.featureTable .game-row:hover ~ .game-row td {
    background-color: initial;
}

.featureTable .game-row:hover ~ .game-row:not(:hover) td {
    background-color: initial;
}

.tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: var(--tooltip-bg-color, #555);
    color: var(--tooltip-text-color, #fff);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Position the tooltip above the text */
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

.tooltip sup {
    font-size: 0.6em;
    vertical-align: super;
    color: var(--tooltip-identifier-color, #000); /* Default to black */
}
</style>