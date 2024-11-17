import type { BookDetail } from '@/types'
import getGutenbergText from './getGutenbergText'
import { getGutendexSearch } from './getGutendexSearch'

const getRandomLetterOrInteger = () =>
  // returns a random letter or integer
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .slice(0, 1)

const getRandomIndex = (search: BookDetail[]) => Math.floor(Math.random() * search?.length)

async function getRandomGutendexSearch(): Promise<BookDetail> {
  // retry 3 times with different random letters or integers, if result stop retries and return result, if no result after 3 retries throw an error
  for (let i = 0; i < 3; i++) {
    const searchResult = await getGutendexSearch(getRandomLetterOrInteger())
    if (searchResult.length > 0) {
      return searchResult[getRandomIndex(searchResult)]
    }
  }
  throw new Error('No parseable books found')
}

export default async function getRandomGutenberg() {
  const searchResult = await getRandomGutendexSearch()
  const searchResultTextUrl = searchResult.textUrl
  const text = await getGutenbergText(searchResultTextUrl)
  return { book: searchResult, text }
}
