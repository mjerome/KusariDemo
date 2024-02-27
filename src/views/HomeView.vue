<script setup>
import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';
import PieChart from '@/components/PieChart.vue';
</script>
<template>
    <h1>Chart Dashboard</h1>
    <div class="link-container">
        <RouterLink :to="{name: 'bar'}" class="link-square">
            <div >
                <div class="link-text"> View Bar Chart Data</div>
                <BarChart :tooltip="false" />
                
            </div>   
        </RouterLink>
        <RouterLink :to="{name: 'bar'}" class="link-square">
            <div>
                <div class="link-text"> View Line Chart Data</div>
                <LineChart :tooltip="false" />
                
            </div>   
        </RouterLink>
        <RouterLink :to="{name: 'bar'}" class="link-square">
            <div class="pie-chart">
                <div class="link-text"> View Pie Chart Data</div>
                <PieChart :tooltip="false" :legend="false" />
                
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
    align-items:center;
    color: var(--color-text);
}

.link-square:hover {
    color: var(--color-text-hover);
    border-bottom: 1px solid var(--color-border-hover);
    border-left: 1px solid var(--color-border-hover);
}

.link-square > div {
    width: 80%;
    scale: 1;
    transition: all 0.25s ease-out;
}

.link-square:hover > div {
    scale: 1.1;
    font-size: 1rem;
}

.link-text {
    margin-bottom: 3rem;
}
</style>