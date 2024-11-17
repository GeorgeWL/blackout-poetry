<script setup lang="ts">
import getGutenbergText from '@/api/getGutenbergText'
import splitStringToTokens from '@/scripts/splitStringToTokens'
import { mainStore } from '@/stores/mainStore'
import type { BookDetail } from '@/types'
import { ref } from 'vue'
import LoaderDisplay from './LoaderDisplay.vue'
import SearchDisplay from './SearchDisplay.vue'

const props = defineProps<{ book: BookDetail }>()
const isLoading = ref(false)
const error = ref('')
const getBookText = async (textUrl: string) => {
  isLoading.value = true
  try {
    const results = await getGutenbergText(textUrl)
    if (results.length > 0) {
      mainStore.setText(results)
      mainStore.setWordsArray(splitStringToTokens(results))
      error.value = ''
    }
  } catch (err) {
    error.value = (err as Error)?.message ?? 'An unknown error occurred'
  }
  isLoading.value = false
  setTimeout(() => {
    error.value = ''
  }, 3000)
}
</script>

<template>
  <li class="book">
    <SearchDisplay :book="props.book" />
    <button @click="() => getBookText(props.book.textUrl)">Set Text to Random Page</button>
    <LoaderDisplay :error="error" :is-loading="isLoading" />
  </li>
</template>
