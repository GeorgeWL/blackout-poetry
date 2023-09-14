<script setup lang="ts">
import TextareaInput from './inputs/TextareaInput.vue'
import FieldsetSlot from './FieldsetSlot.vue'
function onSubmit() {}
</script>
<template>
  <form @submit.prevent="onSubmit">
    <FieldsetSlot name="poem">
      <TextareaInput cols="60" id="text" placeholder="Enter some poetry here" />
    </FieldsetSlot>
  </form>
</template>
