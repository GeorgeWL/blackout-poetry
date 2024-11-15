import type { BlackoutWord } from '@/types'
import md5 from 'md5'
const isDisallowedSymbol = (token: string, exclude?: boolean): boolean =>
  exclude ? !/[!a-z0-9"'\s]+/gi.test(token) : token === ''
export default function splitStringToTokens(text: string, excludeSymbols = true): BlackoutWord[] {
  return (
    text
      // replace annoying symbols with normal ones
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/_/g, '')
      .replace(/\n/g, '')
      .replace(/\r/g, '\n')
      // split on spaces, newlines, and punctuation
      .split(/[\W\s"]/g)
      // remove empty strings and disallowed symbols
      .filter((w) => !isDisallowedSymbol(w, excludeSymbols))
      // map to BlackoutWord objects
      .map((word, index) => ({
        id: md5(JSON.stringify({ word, index })),
        label: word,
        isNewLine: word === '\n'
      }))
  )
}
