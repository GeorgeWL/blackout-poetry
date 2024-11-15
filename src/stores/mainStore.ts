import splitStringToTokens from '@/scripts/splitStringToTokens'
import type { BlackoutWord, BookDetail } from '@/types'
import { reactive } from 'vue'

export const defaultText = `Erasure poetry, or blackout poetry, is a form of found poetry or found object art created by erasing words from an existing text in prose or verse and framing the result on the page as a poem. The results can be allowed to stand in situ or they can be arranged into lines and/or stanzas.

Writers and visual artists have adopted this form both to achieve a range of cognitive or symbolic effects and to focus on the social or political meanings of erasure. Erasure is a way to give an existing piece of writing a new set of meanings, questions, or suggestions. It lessens the trace of authorship but also draws attention to the original text. Doris Cross appears to have been among the earliest to utilize this technique, beginning in 1965 with her "Dictionary Columns" book art.

The poetic form gained new political purpose online in 2017, in response to the Trump administration. 

The tradition of concrete poetry and the works of visual artists such as d.a. levy have some relationship to this artform.

- Wikipedia on Erasure Poetry
`

type MainStore = {
  text: string
  setText: (newText: string) => void
  wordsArray: BlackoutWord[]
  setWordsArray: (words: BlackoutWord[]) => void
  clearText: () => void
  searchResults: BookDetail[]
  setSearchResults: (results: BookDetail[]) => void
  errorMessage: string | null
  setError: (message: string) => void
}
export const mainStore = reactive<MainStore>({
  text: defaultText,
  setText(newText: string) {
    if (newText === '') {
      console.error('use clearText() instead of setting text to an empty string')
      return
    }
    this.text = newText
    this.wordsArray = splitStringToTokens(newText)
  },
  wordsArray: <BlackoutWord[]>[],
  setWordsArray(words: BlackoutWord[]) {
    this.wordsArray = words
  },
  clearText() {
    this.text = ''
  },
  searchResults: [] as BookDetail[],
  setSearchResults(results: BookDetail[]) {
    this.searchResults = results
  },
  errorMessage: null as string | null,
  setError(message: string) {
    this.errorMessage = message
  }
})
if (mainStore.text && mainStore.wordsArray.length === 0)
  mainStore.wordsArray = splitStringToTokens(mainStore.text ?? defaultText)
