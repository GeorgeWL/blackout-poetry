<script setup lang="ts">
import { mainStore } from '@/stores/mainStore';
import type { BookDetail, GutenbergResponse } from '@/types';
import { ref } from 'vue';
const corpusAuthors: string[] = [
  'austen',
  'bible',
  'blake',
  'bryant',
  'burgess',
  'carroll',
  'chesterton',
  'edgeworth',
  'melville',
  'milton',
  'shakespeare',
  'whitman'
]
const currentText = ref(mainStore.text)
const inputType = ref<'random' | 'manual'>('manual')

async function getRandomText() {
  const randomAuthor = corpusAuthors[Math.floor(Math.random() * corpusAuthors.length)]
  const response = await fetch(
    `https://gutendex.com/books?mime_type=text/plain&search=${randomAuthor}`
  )
  const unParsedData: GutenbergResponse = await response.json()
  const data = unParsedData.results.map(
    (book): BookDetail => ({
      authors: book.authors.map((author) => ({
        birthYear: author.birth_year,
        deathYear: author.death_year,
        name: author.name
      })),
      title: book.title,
      id: book.id,
      textUrl: book.formats['text/plain; charset=utf-8'],
    })
  )
  console.log(data)
  if (data.length) {
    console.log(JSON.stringify(data))
    const randomBook = data[Math.floor(Math.random() * data.length)]
    const bookResponse = await fetch(randomBook.textUrl)
    console.log(bookResponse)
    const bookText = await bookResponse
    console.log(bookText)
    // mainStore.changeText(data)
    // currentText.value = data
  }
}
</script>

<template>
  <div>
    <input type="radio" v-model="inputType" id="random-text" value="random" />
    <label for="random-text">Random</label>
  </div>
  <div>
    <input type="radio" v-model="inputType" id="manual-text" value="manual" />
    <label for="manual-text">Manual</label>
  </div>
  <div v-if="inputType === 'random'">
    <button @click="getRandomText">Random Text</button>
  </div>
  <div v-if="inputType === 'manual'" class="flex-col">
    <textarea placeholder="Type your text here" v-model="currentText"></textarea>
    <div class="flex flex-row">
      <button @click="mainStore.changeText(currentText)" class="btn">Save</button>
      <button @click="mainStore.clearText()">Clear</button>
    </div>
  </div>
</template>
