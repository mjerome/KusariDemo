<script setup>
import { Chart, Bar, Tooltip, Grid } from 'vue3-charts'
import GraphLabelLayer from './GraphLabelLayer.vue';
const data = [
  { trilogy: 'Lord of the Rings', one: 92, two: 87, three: 94 },
  { trilogy: 'The Godfather', one: 100, two: 90, three: 60 },
  { trilogy: 'Star Wars (OT)', one: 90, two: 82, three: 58 },
  { trilogy: 'Nolan Batman', one: 70, two: 84, three: 78 },
  { trilogy: 'Toy Story', one: 96, two: 88, three: 92 },
]
const props = defineProps({
    tooltip: {
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
    <div>
        <GraphLabelLayer description="Ratings of each movie in the most popular movie trilogies">
            <div v-for="data in data" :key="data">
                <span>{{ data.trilogy }}, {{ data.one }}%, {{ data.two }}%, {{ data.three }}%</span>
            </div>
        </GraphLabelLayer>
        <Chart
            :size="{ width: props.width, height: props.height }"
            :data="data"
            direction="horizontal">

            <template #layers>
            <Grid strokeDasharray="2,2" />
            <Bar :dataKeys="['trilogy', 'one']" :barStyle="{ fill: '#30b2af' }" />
            <Bar :dataKeys="['trilogy', 'two']" :barStyle="{ fill: '#72ccff' }" />
            <Bar :dataKeys="['trilogy', 'three']" :barStyle="{ fill: '#da01ff' }" />
            </template>

            <template #widgets>
            <Tooltip v-if="props.tooltip"
                borderColor="#f8f8f8"
                :config="{
                one: { color: '#30b2af' },
                two: { color: '#72ccff' },
                three: { color: '#da01ff' }
                }"
            />
            </template>

        </Chart>
    </div>
</template>
<style>
    svg {
        overflow: visible;
        height: 100%;
        width: 90% !important;
        margin: auto;
        display: block;
    }
</style>