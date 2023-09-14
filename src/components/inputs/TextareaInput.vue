<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
defineProps<{
  placeholder: string
  id: string
  rows?: string
  cols?: string
}>()
function onClear() {
  value.value = ''
}
</script>

<template>
  <textarea
    required
    :rows="rows || 5"
    :cols="cols || 30"
    :placeholder="placeholder"
    :id="id"
    v-model="value"
  />
  <button @click="onClear">Clear</button>
</template>

<style scoped>
textarea {
  resize: both;
}
</style>
