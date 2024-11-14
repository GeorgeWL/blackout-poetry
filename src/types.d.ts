export type BlackoutWord = { id: string; label: string; disabled?: boolean }

type AuthorDetail = {
  name: string
  birthYear: number
  deathYear: number | null
}

type Formats =
  | 'text/html'
  | 'text/html; charset=utf-8'
  | 'application/epub+zip'
  | 'application/x-mobipocket-ebook'
  | 'text/plain; charset=utf-8'
  | 'application/rdf+xml'
  | 'image/jpeg'
  | 'application/octet-stream'
  | 'text/plain; charset=us-ascii'

type GutenbergAuthor = {
  name: string
  birth_year: number
  death_year: number | null
}
export type GutendexResponse = {
  count: number
  next: string | null
  previous: string | null
  results: GutenbergBook[]
}
export type GutenbergBook = {
  id: number
  title: string
  authors: GutenbergAuthor[]
  translators: GutenbergAuthor[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: string
  formats: { [key in Formats]: string }
  download_count: number
}
export type GutenbergBook = {}

export type BookDetail = {
  id: number
  title: string
  authors: AuthorDetail[]
  textUrl: string
}
