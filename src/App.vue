<script setup lang="ts">
import type { BlackoutWord } from '@/types'
import { ref } from 'vue'
import ButtonWordsInput from './components/ButtonWordsInput.vue'
import PageHeader from './components/PageHeader.vue'
const defaultText =
  'Hello, world! This is a test. It includes a few words. Some repeated words are test, test, test.'
const wordsArray = ref<BlackoutWord[]>(
  defaultText.split(' ').map((word, index) => ({ id: index.toString(), label: word }))
)
const markWordAsBlackout = (id: string) => {
  const words = wordsArray.value
  // for now just set same value
  words.find((word) => word.id === id)!.disabled = !words.find((word) => word.id === id)!.disabled
  wordsArray.value = words
  // TODO: Find the word in the array and toggle the disabled property for that word
  // NOTE: Want to guarantee array order is maintained, may be better to change to a Map or Set
  // put the word back in the array
}
</script>

<template>
  <header>
    <PageHeader>Blackout Poetry</PageHeader>
  </header>
  <main>
    <section>
      <h2>Click words to remove</h2>
      <ButtonWordsInput @remove-word="markWordAsBlackout" :words-array="wordsArray" />
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

main {
  display: flex;
  flex-direction: row;
  place-items: flex-start;
  align-items: center;
  text-align: left;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
}

section {
  display: grid;
  gap: var(--column-gap);
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  padding-left: var(--column-gap);
  width: 100%;
  @media screen and (max-width: 950px) {
    padding-top: var(--column-gap);
    padding-left: 0;
  }
}

section:first-child {
  padding-right: var(--column-gap);
  border-right: var(--color-border) 1px solid;
  @media screen and (max-width: 950px) {
    border-right: none;
    padding-right: inherit;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
