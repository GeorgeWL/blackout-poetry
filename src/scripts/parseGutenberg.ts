export function getRandomPage(bookText: string) {
  // Split the book into "pages" or sections based on a number of lines
  const pageSize = 200 // Number of lines per "page" (adjustable)
  const pages = []

  for (let i = 0; i < bookText.length; i += pageSize) {
    pages.push(bookText.slice(i, i + pageSize))
  }

  // Pick a random page
  const randomPageNumber = Math.floor(Math.random() * pages.length)
  const pageText = pages[randomPageNumber]
  console.log({ pageText, randomPageNumber, pageLength: pageText.length })
  return pageText
}

export default function extractGutenbergContent(text: string) {
  const lines = text.split('\n')
  const startIndex = lines.findIndex((line) => line.includes('*** START OF'))
  const endIndex = lines.findIndex((line) => line.includes('*** END OF'))

  const content = lines
    .slice(startIndex + 1, endIndex)
    .filter((line) => line.trim())
    .join('\n')

  return getRandomPage(content.trim())
}
