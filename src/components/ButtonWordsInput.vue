<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import type { BlackoutWord } from '@/types'
import ButtonWord from './ButtonWord.vue'

const emit = defineEmits(['toggleWord'])

const mouseout = ref(false)
const props = defineProps<{
  wordsArray: BlackoutWord[]
}>()
</script>

<template>
  <div>
    <input type="checkbox" v-model="mouseout" id="toggle-mouseout" />
    <label for="toggle-mouseout">Toggle Mouseout</label>
  </div>
  <ul class="unstyled-list">
    <li v-for="word in props.wordsArray" :key="word.id">
      <ButtonWord :word="word" :toggleWord="()=>emit('toggleWord', word.id)" :mouseout="mouseout"/>
    </li>
  </ul>
</template>
