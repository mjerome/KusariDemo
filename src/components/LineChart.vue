<script setup>
import { defineProps } from 'vue';
import { Chart, Grid, Line, Tooltip } from 'vue3-charts';
import GraphLabelLayer from './GraphLabelLayer.vue';
import { conData } from '@/data/data';

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
    <GraphLabelLayer description='number of attendees at Gen Con from 2003 to 2023' :dataKeys="data">
      <div v-for="data in conData" :key="data">
        <span>{{ data.year }} {{ data.attendees }}</span>
      </div>
    </GraphLabelLayer>
    <Chart
    :size="{ width: props.width, height: props.height }"
    :data="conData"
    direction="horizontal">

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['year', 'attendees']" :lineStyle="{ stroke: '#27928f' }" type="natural" />
    </template>

    <template #widgets>
      <Tooltip v-if="props.tooltip"
        :config="{
          year: { label: 'year', color: '#27928f' },
          avg: { label: 'attendees', color: '#27928f' },
        }"
      />
    </template>

  </Chart>
</template>
<style>
</style>