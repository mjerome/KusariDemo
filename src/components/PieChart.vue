<script setup>
import { Chart, Pie, Tooltip } from 'vue3-charts';
import LegendLayer from './LegendLayer.vue';
import GraphLabelLayer from './GraphLabelLayer.vue';
import { pieData } from '@/data/data';

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
</script>
<template>
    <GraphLabelLayer description="Votes for which pie is best for Thanksgiving">
        <div v-for="data in pieData" :key="data">
            <span>{{ data.pie }} {{ data.votes }}</span>
        </div>
    </GraphLabelLayer>
    <Chart
        :size="{ width: props.width, height: props.height }"
        :data="pieData"
        direction="circular"
    >
        <template #widgets>
            <LegendLayer :dataKeys="pieData" v-if="props.legend"/>
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
                :pie-style="{ innerRadius: 0, padAngle: 0, colors: [pieData[0].color, pieData[1].color, pieData[2].color] }"  />
    
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