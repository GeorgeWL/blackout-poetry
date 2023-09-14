<script setup lang="ts">
import PageHeader from './components/PageHeader.vue'
import TextForm from './components/TextForm.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <PageHeader msg="You did it!" />
    </div>
  </header>
  <main>
    <TextForm />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
fieldset {
  border: none;
  outline: none;
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
