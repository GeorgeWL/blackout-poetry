<script setup lang="ts">
import type { BookDetail } from '@/types'

const props = defineProps<{ value: BookDetail }>()
</script>
<template>
  <li class="book">
    <h3>
      {{ props.value.title }}
    </h3>
    <p>
      <strong>Author(s):</strong>
      <span class="author" v-for="author in props.value.authors" :key="author.id">
          {{ author.name }} [{{ author.birthYear }} - {{ author.deathYear }}]
        </span>
    </p>
    <p>
      <strong> Bookshelves: </strong>
      {{ props.value.bookshelves.join(', ') }}
    </p>
  </li>
</template>
