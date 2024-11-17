<script setup lang="ts">
const props = defineProps({
  isLoading: Boolean,
  error: String
})
</script>

<template>
  <p v-if="props?.isLoading">
    <span class="loader">⏳</span>
    <strong>Loading...</strong>
  </p>
  <p v-if="props?.error?.length">
    <span>❌</span>
    <strong>
      {{ error }}
    </strong>
  </p>
</template>

<style>
.loader {
  display: inline-block;
  animation: infinite 2s linear loadspinner;
  margin-right: 1rem;
}
@keyframes loadspinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
