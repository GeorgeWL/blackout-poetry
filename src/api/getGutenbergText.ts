import extractGutenbergContent from '@/scripts/extractGutenbergContent'

const corsProxyUrl = 'https://corsproxy.io/?'
export default async function getGutenbergText(textUrl: string) {
  return fetch(corsProxyUrl + encodeURIComponent(textUrl))
    .then((response) => response.text())
    .then((text) => {
      const lines = text.split('\n')
      const startIndex = lines.findIndex((line) => line.includes('*** START OF'))
      const endIndex = lines.findIndex((line) => line.includes('*** END OF'))

      const content = lines
        .slice(startIndex + 1, endIndex)
        .filter((line) => line.trim())
        .join('\n')

      return content.trim()
    })
    .then((bookText) => {
      return extractGutenbergContent(bookText)
    })
}
