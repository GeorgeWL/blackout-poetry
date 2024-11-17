<script setup lang="ts">
import { getGutendexSearch } from '@/api/getGutendexSearch'
import { mainStore } from '@/stores/mainStore'
import { ref } from 'vue'
import SearchResult from './SearchResults.vue'
import LoaderDisplay from './LoaderDisplay.vue'

const currentSearch = ref('')
const isLoading = ref(false)
const error = ref('')
const getSearchResults = async () => {
  mainStore.setSearchResults([])
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
  <form>
    <input type="text" v-model="currentSearch" placeholder="Search for books" for="search-submit" />
    <button
      id="search-submit"
      type="submit"
      :disabled="isLoading === true || error?.length > 0"
      @click="getSearchResults()"
    >
      Search for books
    </button>
    <small> (default if no search is top 10 downloads) </small>
    <LoaderDisplay :error="error" :is-loading="isLoading" />
    <SearchResult />
  </form>
</template>
