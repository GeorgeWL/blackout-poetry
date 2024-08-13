<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { BlackoutWord } from '@/types'

const emit = defineEmits(['removeWord'])

const props = defineProps<{
  wordsArray: BlackoutWord[]
}>()
</script>

<template>
  <ul class="unstyled-list">
    <li v-for="word in props.wordsArray" :key="word.id">
      <button :class="{ blackout: word.disabled }" @click="emit('removeWord', word.id)">
        {{ word.label }}
      </button>
    </li>
  </ul>
</template>
