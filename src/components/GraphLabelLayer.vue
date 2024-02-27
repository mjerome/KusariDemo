<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    description: String,
    dataKeys: {
        type: Array,
    }
})
</script>
<template>
<div class="sr-only">
    Graph showing {{ props.description }}. 
    <slot></slot>
</div>
</template>
<style>
.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  margin: -1px;
}
</style>