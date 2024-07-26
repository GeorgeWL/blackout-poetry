<script setup lang="ts">
import type { BlackoutWord } from '@/types';
import { ref } from 'vue';
import ButtonWordsInput from './components/ButtonWordsInput.vue';
import PageHeader from './components/PageHeader.vue';
import PreviewOutput from './components/PreviewOutput.vue';
const defaultText = 'Hello, world! This is a test. It includes a few words. Some repeated words are test, test, test.'
const wordsArray = ref<BlackoutWord[]>(defaultText.split(' ').map((word, index) => ({ id: index.toString(), label: word })));
const markWordAsBlackout = (id: string) => {
  // from the wordsArray, find the word that matches the id passed in and set it's attribute to blackedOut
  const word = wordsArray.value.find((word) => word.id === id);
  if (word) {
    word.disabled = !word.disabled;
  };
  // put the word back in the array
}
</script>

<template>
  <header>
    <PageHeader>Blackout Poetry</PageHeader>
  </header>
  <main>
    <section>
      <ButtonWordsInput @remove-word="markWordAsBlackout" :words-array="wordsArray" />
    </section>
    <section>
      <PreviewOutput :words-array="wordsArray" />
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
  gap: var(--column-gap);
}

section {
  padding-left: var(--column-gap);
}

section:first-child {
  padding-right: var(--column-gap);
  border-right: var(--color-border) 1px solid;
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
