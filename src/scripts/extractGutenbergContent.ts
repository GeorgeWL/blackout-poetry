import splitStringToTokens from './splitStringToTokens'

export function getRandomPage(bookTokens: string[]) {
  // Split the book into "pages" or sections based on a number of lines
  const pageSize = 500
  const pages = []

  for (let i = 0; i < bookTokens.length; i += pageSize) {
    pages.push(bookTokens.slice(i, i + pageSize))
  }

  // Pick a random page
  const randomPageNumber = Math.floor(Math.random() * pages.length)
  const pageText = pages[randomPageNumber]
  return pageText.join(' ').trim()
}

export default function extractGutenbergContent(text: string) {
  const lines = text.split(/[\r\n]/g)
  const startIndex = lines.findIndex((line) => line.includes('*** START OF'))
  const endIndex = lines.findIndex((line) => line.includes('*** END OF'))

  const tokens = splitStringToTokens(
    lines
      .slice(startIndex + 1, endIndex)
      .filter((line) => line.trim())
      .join('\n')
  ).flatMap((word) => word.label)

  return getRandomPage(tokens)
}
