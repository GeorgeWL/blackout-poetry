<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
defineProps<{
  placeholder: string
  id: string
  rows?: number
  cols?: number
}>()
function onClear() {
  value.value = ''
}
</script>
<template>
  <textarea
    :rows="rows || 5"
    :cols="(cols as number).toFixed(2) || 30"
    :placeholder="placeholder"
    :id="id"
    v-model="value"
  />
  <button @click="onClear">Clear</button>
</template>
