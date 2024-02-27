<script setup>
import { Chart, Pie, Tooltip } from 'vue3-charts';
import LegendLayer from './LegendLayer.vue';
import GraphLabelLayer from './GraphLabelLayer.vue';

const props = defineProps({
  tooltip: {
    type: Boolean,
    default: true
  },
  legend: {
    type: Boolean,
    default: true
  },
  width: {
        type: Number,
        default: 700
    },
    height: {
        type: Number,
        default: 700
    }
})
const data = [
  { pie: 'Apple', votes: 47, color: '#30b2af' },
  { pie: 'Pecan', votes: 20, color: '#72ccff' },
  { pie: 'Pumpkin', votes: 42, color: '#da01ff' },
]
</script>
<template>
    <GraphLabelLayer description="Votes for which pie is best for Thanksgiving">
        <div v-for="data in data" :key="data">
            <span>{{ data.pie }} {{ data.votes }}</span>
        </div>
    </GraphLabelLayer>
    <Chart
        :size="{ width: props.width, height: props.height }"
        :data="data"
        direction="circular"
    >
        <template #widgets>
            <LegendLayer :dataKeys="data" v-if="props.legend"/>
            <Tooltip v-if="props.tooltip"
                :hide-line="true"
                borderColor="#ffffff"
                :config="{
                    pie: { label: 'pie', color: '#27928f' },
                    votes: { label: 'votes', color: '#27928f' },
                    color: {hide: true}
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

    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
}
.pie-chart .axis {
    display: none;
}
</style>