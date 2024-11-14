<script setup lang="ts">
import { mainStore } from '@/stores/mainStore'
import { ref } from 'vue'
import BookSearch from './BookSearch.vue'

const cachedText = ref(mainStore.text)
const inputType = ref<'search' | 'manual'>('manual')
</script>

<template>
  <div class="">
    <input type="radio" v-model="inputType" id="search-text" value="search" />
    <label for="search-text">Search</label>
  </div>
  <div>
    <input type="radio" v-model="inputType" id="manual-text" value="manual" />
    <label for="manual-text">Manual</label>
  </div>
  <div v-if="inputType === 'search'">
    <BookSearch />
  </div>
  <div v-if="inputType === 'manual'" class="flex-col">
    <textarea placeholder="Type your text here" v-model="cachedText"></textarea>
    <div class="flex flex-row">
      <button @click="mainStore.changeText(cachedText.valueOf())" class="btn">Save</button>
      <button @click="cachedText=''">Clear</button>
    </div>
  </div>
</template>
