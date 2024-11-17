<script setup lang="ts">
import ButtonWordsInput from './components/ButtonWordsInput.vue'
import InputSelector from './components/InputSelector.vue'
import { mainStore } from './stores/mainStore'

const toggleWordAsBlackout = (id: string) => {
  const cachedWords = mainStore.wordsArray
  cachedWords.find((word) => word.id === id)!.disabled = !cachedWords.find(
    (word) => word.id === id
  )!.disabled
  mainStore.setWordsArray(cachedWords)
}
</script>

<template>
  <header>
    <h1>Blackout Poetry</h1>
  </header>
  <main>
    <section>
      <InputSelector />
    </section>
    <section>
      <h2>Click words to add/remove</h2>
      <ButtonWordsInput @toggle-word="toggleWordAsBlackout" :words-array="mainStore.wordsArray" />
    </section>
  </main>
  <footer>
    <p>
      <small>
        * Book search books are taken from Project Gutenberg, so are only books that are in the
        public domain.
      </small>
    </p>
    <p>
      Default text taken from
      <a
        href="https://en.wikipedia.org/wiki/Erasure_poetry"
        target="_blank"
        referrerpolicy="no-referrer"
      >
        Wikipedia</a
      >
    </p>
  </footer>
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
