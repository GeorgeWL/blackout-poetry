<script setup lang="ts">
import getGutenbergText from '@/api/getGutenbergText'
import splitStringToTokens from '@/scripts/splitStringToTokens'
import { mainStore } from '@/stores/mainStore'
import type { BookDetail } from '@/types'
import { ref } from 'vue'

const props = defineProps<{ value: BookDetail }>()
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
    <h3>
      {{ props.value.title }}
    </h3>
    <p>
      <strong>Author(s):</strong>
      <span class="author" v-for="author in props.value.authors" :key="author.id">
        {{ author.name }} [{{ author.birthYear }} - {{ author.deathYear }}]
      </span>
    </p>
    <p>
      <strong> Bookshelves: </strong>
      {{ props.value.bookshelves.join(', ') }}
    </p>
    <p><strong>Download count:</strong>
    {{ props.value.downloadCount }} times
    </p>
    <button @click="() => getBookText(props.value.textUrl)">Set Text to Random Page</button>
    <strong v-if="isLoading">Loading text...</strong>
    <strong v-if="error">{{ error }}</strong>
  </li>
</template>
