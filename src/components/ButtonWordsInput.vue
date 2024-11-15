<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { BlackoutWord } from '@/types'
import ButtonWord from './ButtonWord.vue'

const emit = defineEmits(['toggleWord'])

const props = defineProps<{
  wordsArray: BlackoutWord[]
}>()
</script>
@click=""

<template>
  <ul class="unstyled-list">
    <li v-for="word in props.wordsArray" :key="word.id">
      <ButtonWord :word="word" :toggleWord="()=>emit('toggleWord', word.id)" />
    </li>
  </ul>
</template>
