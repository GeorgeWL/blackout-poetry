<script setup lang="ts">
import type { BlackoutWord } from '@/types'
import { computed, ref } from 'vue'
import ButtonWordsInput from './components/ButtonWordsInput.vue'
import PageHeader from './components/PageHeader.vue'
import { mainStore } from './stores/mainStore'
import InputSelector from './components/InputSelector.vue'

const text = mainStore.text
const wordsArray = computed<BlackoutWord[]>(() =>
  text.split(' ').map((word, index) => ({ id: index.toString(), label: word }))
)
const arrayRef = ref(wordsArray.value)
const markWordAsBlackout = (id: string) => {
  const words = arrayRef.value
  words.find((word) => word.id === id)!.disabled = !words.find((word) => word.id === id)!.disabled
  arrayRef.value = words
}
</script>

<template>
  <header>
    <PageHeader>Blackout Poetry</PageHeader>
  </header>
  <main>
    <section>
      <InputSelector />
    </section>
    <section>
      <h2>Click words to add/remove</h2>
      <ButtonWordsInput @remove-word="markWordAsBlackout" :words-array="arrayRef" />
    </section>
  </main>
</template>

<style>
header {
  line-height: 1.5;
}

main {
  display: flex;
  flex-direction: column;
  place-items: flex-start;
  align-items: center;
  text-align: left;
  height: 90vh;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
}

section {
  display: flex;
  flex-direction: column;
  place-items: flex-start;
  padding: var(--section-gap) 0;
  width: 100%;
  border-top: var(--color-border) 1px solid;
  align-items: flex-start;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-bottom: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
