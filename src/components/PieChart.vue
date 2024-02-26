<script setup>
import { Chart, Pie, Tooltip } from 'vue3-charts';
import LegendLayer from './LegendLayer.vue';
const data = [
  { pie: 'Apple', votes: 47, color: '#30b2af' },
  { pie: 'Pecan', votes: 20, color: '#72ccff' },
  { pie: 'Pumpkin', votes: 42, color: '#da01ff' },
]
</script>
<template>
    <Chart
        :size="{ width: 500, height: 420 }"
        :data="data"
        direction="circular"
    >
        <template #widgets>
            <LegendLayer :dataKeys="data"/>
            <Tooltip
                borderColor="#f8f8f8"
                :config="{
                year: { label: 'year', color: '#27928f' },
                avg: { label: 'attendees', color: '#27928f' },
                }"
            />
        </template>

        <template #layers>
        <Pie :dataKeys="['pie', 'votes']"
                :pie-style="{ innerRadius: 0, padAngle: 0, colors: [data[0].color, data[1].color, data[2].color] }"  />
    
        </template>

        

    </Chart>
</template>
<style>
.chart {
    display:flex;
}
.pie-chart .axis {
    display: none;
}
</style>