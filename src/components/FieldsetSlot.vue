<script setup lang="ts">
defineProps<{
  name: string
  disabled?: boolean
}>()
</script>

<template>
  <fieldset :name="name" :disabled="disabled">
    <slot>Placeholder</slot>
  </fieldset>
</template>
