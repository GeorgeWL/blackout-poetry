<script setup lang="ts">
import { mainStore } from '@/stores/mainStore'
import SearchResult from './SearchResult.vue'
import { ref } from 'vue'
const hidden = ref(false)
</script>

<template>
  <div v-if="mainStore.searchResults.length > 0">
    <label for="show-hide-results">Show/Hide Results</label>
    <input
      type="checkbox"
      v-if="mainStore.searchResults.length > 0"
      v-model="hidden"
      id="show-hide-results"
    />
  </div>
  <ul v-if="mainStore.searchResults.length > 0 && !hidden" class="unstyled-list">
    <SearchResult v-for="result in mainStore.searchResults" :key="result.id" :book="result">
      <strong>{{ result.title }}</strong> by {{ result.authors.join(', ') }}
    </SearchResult>
  </ul>
</template>
