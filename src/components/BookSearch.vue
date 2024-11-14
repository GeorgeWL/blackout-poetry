<script lang="ts">
import { getGutendexSearch } from '@/api/getGutendexSearch';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const currentSearch = ref('')
    const isLoading = ref(false)
    const getSearchResults = async () => {
      isLoading.value = true
      await getGutendexSearch(currentSearch.value)
      isLoading.value = false
    }

    return {
      currentSearch,
      isLoading,
      getSearchResults
    }
  }
})
</script>

<template>
  <div>

    <input type="text" v-model="currentSearch" />
    <button :disabled="isLoading===true" @click="getSearchResults()">
      Search for books
    </button>
  </div>
</template>
