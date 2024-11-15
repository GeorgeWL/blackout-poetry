import type { BlackoutWord } from '@/types'
import md5 from 'md5'

export default function splitStringToTokens(text: string): BlackoutWord[] {
  return (
    text
      // replace annoying symbols with normal ones
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/_/g, '')
      // split on spaces, newlines, and punctuation
      .split(/([,"'; \n])/g)
      // remove empty strings
      .filter((w) => [' ', ''].includes(w) === false)
      // map to BlackoutWord objects
      .map((word, index) => ({
        id: md5(JSON.stringify({ word, index })),
        label: word,
        isNewLine: word === '\n'
      }))
  )
}
