<script setup>
import { Chart, Bar, Tooltip, Grid } from 'vue3-charts'
const data = [
  { trilogy: 'Lord of the Rings', 1: 92, 2: 87, 3: 94 },
  { trilogy: 'The Godfather', 1: 100, 2: 90, 3: 60 },
  { trilogy: 'Star Wars (OT)', 1: 90, 2: 82, 3: 58 },
  { trilogy: 'Nolan Batman', 1: 70, 2: 84, 3: 78 },
  { trilogy: 'Toy Story', 1: 96, 2: 88, 3: 92 },
]
</script>
<template>
    <div>
        <Chart
            :size="{ width: 700, height: 600 }"
            :data="data"
            direction="horizontal">

            <template #layers>
            <Grid strokeDasharray="2,2" />
            <Bar :dataKeys="['trilogy', '1']" :barStyle="{ fill: '#30b2af' }" />
            <Bar :dataKeys="['trilogy', '2']" :barStyle="{ fill: '#72ccff' }" />
            <Bar :dataKeys="['trilogy', '3']" :barStyle="{ fill: '#da01ff' }" />
            </template>

            <template #widgets>
            <Tooltip
                borderColor="#f8f8f8"
                :config="{
                1: { color: '#30b2af' },
                2: { color: '#72ccff' },
                3: { color: '#da01ff' }
                }"
            />
            </template>

        </Chart>
    </div>
</template>
<style>
    svg {
        overflow: visible;
        width: 90% !important;
        margin: auto;
        display: block;
    }
</style>