<script setup>
import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';
import PieChart from '@/components/PieChart.vue';
</script>
<template>
    <h1>Home</h1>
    <div class="link-container">
        <RouterLink :to="{name: 'bar'}" class="link-square">
            <div >
                <BarChart :tooltip="false" />
                <div class="link-text"> View Bar Chart Data</div>
            </div>   
        </RouterLink>
        <RouterLink :to="{name: 'bar'}" class="link-square">
            <div>
                <LineChart :tooltip="false" />
                <div class="link-text"> View Line Chart Data</div>
            </div>   
        </RouterLink>
        <RouterLink :to="{name: 'bar'}" class="link-square">
            <div class="pie-chart">
                <PieChart :tooltip="false" :legend="false" />
                <div class="link-text"> View Pie Chart Data</div>
            </div>   
        </RouterLink>
    </div>
</template>
<style>
.link-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem;
    max-width: 80%;
    padding-bottom: 3rem;
}
.link-square {
    border-radius: 20px;
    border-bottom: 1px solid var(--color-border);
    border-left: 1px solid var(--color-border);
    padding: 2rem;
    aspect-ratio: 1;
    width:45%;
    text-decoration: none;
    display: flex; 
    justify-content: center;
    color: var(--color-text)
}

.link-square > div {
    scale: 1;
    transition: scale 0.25s ease-out;
}

.link-square:hover > div {
    scale: 1.1;
}

.link-text {
    margin-top: 1rem;
}
</style>