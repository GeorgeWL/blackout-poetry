<script setup lang="ts">
import type { BlackoutWord } from '@/types'

const props = defineProps<{
  word: BlackoutWord
  toggleWord: (id: string) => void
  mouseout?: boolean
}>()
</script>
<template>
  <button
    v-if="!props.word.isNewLine"
    :class="{ blackout: props.word.disabled }"
    v-on:touchend="
      () => {
        if (props.mouseout) toggleWord(props.word.id)
      }
    "
    v-on:mouseout="
      () => {
        if (props.mouseout) toggleWord(props.word.id)
      }
    "
    @click="toggleWord(props.word.id)"
  >
    {{ props.word.label }}
  </button>
  <div v-else class="spacer" />
</template>
