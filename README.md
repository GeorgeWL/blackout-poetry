
# blackout-poetry

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b2d8261-d292-4c82-be32-a1ef0bf0d461/deploy-status)](https://app.netlify.com/sites/leafy-platypus-8587f4/deploys)

Pet Project to create [Blackout Poetry](https://en.wikipedia.org/wiki/Erasure_(artform)) in the web

https://blackout.georgewl.dev

## Goals

- [X] Create a simple version
  - [X] User can select words to be erased - buttons
  - [X] Shows in UI the output
  - [X] User can input plain unformatted text
- [X] Add fetch for "Search Text"
  - User can now choose between "Search" and "Manual" 
- [X] Add fetch for "Random Text"
  - User can now choose between "Random", "Search" and "Manual"

## Possible Future Development

- [ ] Save as Image button
- [ ] Copy as Text button
  - Should replace blackout words with ⬛
- [ ] Print button
- [ ] Option to filter "Random" by category/theme
- [ ] Formatted Text instead of plain text
- [ ] Allow partial selections, rather than only full words

# Development

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. 

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
