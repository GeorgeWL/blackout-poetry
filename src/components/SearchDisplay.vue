<script setup lang="ts">
import type { BookDetail } from '@/types'

const props = defineProps<{ book: BookDetail }>()
</script>

<template>
  <h3>
    {{ props.book.title }}
  </h3>
  <p>
    <strong>Author(s):</strong>
    <span class="author" v-for="author in props.book.authors" :key="author.id">
      {{ author.name }} [{{ author.birthYear }} - {{ author.deathYear }}]
    </span>
  </p>
  <p>
    <strong> Bookshelves: </strong>
    {{ props.book.bookshelves.join(', ') }}
  </p>
  <p><strong>Download count:</strong> {{ props.book.downloadCount }} times</p>
</template>
