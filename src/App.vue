<script setup lang="ts">
import HighlightInput from './components/HighlightInput.vue';
import PreviewOutput from './components/PreviewOutput.vue';
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <header>
    <PageHeader>Blackout Poetry</PageHeader>
  </header>
  <main>
    <section>
      <HighlightInput />
    </section>
    <section>
      <PreviewOutput />
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
