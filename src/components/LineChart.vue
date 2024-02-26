<script setup>
import { Chart, Grid, Line, Tooltip } from 'vue3-charts';
const data = [
  { year: '03', attendees: 25000 },
  { year: '04', attendees: 21741 },
  { year: '05', attendees: 25106 },
  { year: '06', attendees: 21250 },
  { year: '07', attendees: 27000 },
  { year: '08', attendees: 28600 },
  { year: '09', attendees: 27900 },
  { year: '10', attendees: 30060 },
  { year: '11', attendees: 36733 },
  { year: '12', attendees: 41000 },
  { year: '13', attendees: 49059 },
  { year: '14', attendees: 56614 },
  { year: '15', attendees: 61423 },
  { year: '16', attendees: 60819 },
  { year: '17', attendees: 60000 },
  { year: '18', attendees: 61424 },
  { year: '19', attendees: 70000 },
  { year: '20', attendees: 0 },
  { year: '21', attendees: 35000 },
  { year: '22', attendees: 50000 },
  { year: '23', attendees: 70000 },
]
</script>
<template>
    <Chart
    :size="{ width: 500, height: 420 }"
    :data="data"
    direction="horizontal">

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['year', 'attendees']" :lineStyle="{ stroke: '#27928f' }" type="natural" />
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#f8f8f8"
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