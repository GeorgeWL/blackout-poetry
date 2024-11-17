<script setup lang="ts">
import getRandomGutenberg from '@/api/getRandomGutenbergText'
import splitStringToTokens from '@/scripts/splitStringToTokens'
import { mainStore } from '@/stores/mainStore'
import { ref } from 'vue'
import LoaderDisplay from './LoaderDisplay.vue'
import SearchDisplay from './SearchDisplay.vue'

const isLoading = ref(false)
const error = ref('')
const book = ref()

const getRandomBook = async () => {
  isLoading.value = true
  book.value = null
  try {
    const randomBook = await getRandomGutenberg()
    if (randomBook) {
      mainStore.setText(randomBook.text)
      mainStore.setWordsArray(splitStringToTokens(randomBook.text))
      book.value = randomBook.book
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
  <div>
    <button type="submit" @click="getRandomBook">Get Random Book</button>
    <LoaderDisplay :error="error" :is-loading="isLoading" />
    <SearchDisplay v-if="book" :book="book" />
  </div>
</template>
