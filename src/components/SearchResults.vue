<script setup lang="ts">
import { mainStore } from '@/stores/mainStore'
import SearchResult from './SearchResult.vue';
</script>

<template>
  <ul v-if="mainStore.searchResults.length > 0"  class="unstyled-list">
    <SearchResult v-for="result in mainStore.searchResults" :key="result.id" :value="result">
      <strong>{{ result.title }}</strong> by {{ result.authors.join(', ') }}
    </SearchResult>
  </ul>
</template>
