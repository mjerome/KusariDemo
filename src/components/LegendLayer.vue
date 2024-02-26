
<template>
  <g class="layer-legend">
    <div v-for="data in props.dataKeys" :key="data.pie">
        <div class="color" :style="{background: data.color}"></div> 
        <div>{{ data.pie }}</div>
    </div>
  </g>
</template>

<script setup>
import { defineProps } from 'vue'

  const props = defineProps( {
    dataKeys: {
      type: Array,
      required: true
    }
})
</script>
<style>
.layer-legend > div{
    display: flex;
    align-items: center;
    margin-left: 1rem;
}
.color {
    width: 1.5rem;
    height: 1.5rem;
    margin: .25rem;
}
</style>