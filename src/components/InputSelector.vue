<script setup lang="ts">
import { defaultText, mainStore } from '@/stores/mainStore'
import { ref } from 'vue'
import BookSearch from './BookSearch.vue'
import BookRandom from './BookRandom.vue'
const inputType = ref<'search' | 'random' | 'manual'>('manual')
const cacheText = ref(mainStore.text)
const saveText = () => {
  mainStore.setText(cacheText.value)
}
const resetText = () => {
  cacheText.value = defaultText
  mainStore.setText(defaultText)
}
</script>

<template>
  <div>
    <input type="radio" v-model="inputType" id="search-text" value="search" />
    <label for="search-text">Search*</label>
  </div>
  <div>
    <input type="radio" v-model="inputType" id="random-text" value="random" />
    <label for="random-text">Random*</label>
  </div>
  <div>
    <input type="radio" v-model="inputType" id="manual-text" value="manual" />
    <label for="manual-text">Manual</label>
  </div>
  <div v-if="inputType === 'search'">
    <BookSearch />
  </div>
  <div v-if="inputType === 'random'">
    <BookRandom />
  </div>
  <div v-if="inputType === 'manual'" class="flex-col">
    <textarea
      for="submit-manual"
      placeholder="Type your text here"
      v-model="cacheText"
      cols="1"
      rows="1"
    ></textarea>
    <div class="flex flex-row">
      <button type="submit" id="submit-manual" @click="saveText">Save</button>
      <button type="reset" @click="cacheText = ''">Clear</button>
      <button type="reset" @click="resetText">Reset to Default</button>
    </div>
  </div>
</template>
