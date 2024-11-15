<script setup lang="ts">
import type { BlackoutWord } from '@/types'

const props = defineProps<{
  word: BlackoutWord
  toggleWord: (id: string) => void
}>()
</script>
<template>
  <button v-if="!props.word.isNewLine" :class="{ blackout: props.word.disabled }" @click="toggleWord(props.word.id)">
    {{ props.word.label }}
  </button>
  <div v-else class="spacer" />
</template>
