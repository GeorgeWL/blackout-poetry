import type { BookDetail, GutendexResponse } from '@/types'
import md5 from 'md5'

export async function getGutendexSearch(search: string): Promise<BookDetail[]> {
  try {
    const response = await fetch(`https://gutendex.com/books?mime_type=text/plain&search=${search}`)
    const unParsedData: GutendexResponse = await response.json()
    const data = unParsedData.results
      .map(
        (book): BookDetail => ({
          authors: book.authors.map((author) => ({
            id: md5(JSON.stringify(author)),
            birthYear: author.birth_year,
            deathYear: author.death_year,
            name: author.name
          })),
          title: book.title,
          id: String(book.id),
          textUrl: book.formats['text/plain; charset=utf-8'],
          bookshelves: book.bookshelves,
          downloadCount: book.download_count
        })
      )
      .filter((book) => book.textUrl)

    if (data.length > 0) {
      return data
    } else {
      throw new Error('No parseable books found for this search term')
    }
  } catch (error) {
    throw new Error('Failed to fetch data from Gutendex')
  }
}
