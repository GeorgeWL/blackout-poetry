<script setup lang="ts">
import { getGutendexSearch } from '@/api/getGutendexSearch'
import { mainStore } from '@/stores/mainStore'
import { ref } from 'vue'
import SearchResult from './SearchResults.vue'

const currentSearch = ref('')
const isLoading = ref(false)
const error = ref('')
const getSearchResults = async () => {
  isLoading.value = true
  try {
    const results = await getGutendexSearch(currentSearch.value)
    if (results.length > 0) {
      mainStore.setSearchResults(results)
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
    <input type="text" v-model="currentSearch" />
    <button
      type="submit"
      :disabled="isLoading === true || error?.length > 0"
      @click="getSearchResults()"
    >
      Search for books
    </button>
    <p v-if="isLoading">
      <strong>Loading...</strong>
    </p>
    <p v-if="error.length > 0">
      <strong>
        {{ error }}
      </strong>
    </p>
    <SearchResult />
  </div>
</template>
