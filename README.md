
# blackout-poetry

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b2d8261-d292-4c82-be32-a1ef0bf0d461/deploy-status)](https://app.netlify.com/sites/leafy-platypus-8587f4/deploys)

Pet Project to create [Blackout Poetry](https://en.wikipedia.org/wiki/Erasure_(artform)) in the web

https://blackout.georgewl.dev

<img src="https://github.com/user-attachments/assets/34f69ab1-9d59-4a20-9bac-65087d6dff8e" width="50%"/>


## Goals
### Must-have
- [X] Create a simple version
  - [X] User can select words to be erased - buttons
  - [X] Shows in UI the output
  - [X] User can input plain unformatted text
- [X] Add fetch for "Search Text"
  - User can now choose between "Search" and "Manual" 
- [X] Add fetch for "Random Text"
  - User can now choose between "Random", "Search" and "Manual"
- [ ] "Toggle All" Button
  - In many cases will want inverse, instead of manually toggling off each word, toggling on some of the words 

### Possible Future Development
- [ ] Save as Image button
- [ ] Copy as Text button
  - Should replace blackout words with ⬛
- [ ] Option to filter "Random" by category/theme
- [ ] Option to treat symbols as words
  - currently all symbols are stripped from the input text 
- [ ] Formatted Text instead of plain text
- [ ] Allow partial selections, rather than only full words
- [ ] Fix the Gutenberg text when bad input
  - Some gutenberg text, as the original source was OCR, is formatted wrong, with things like words that are squashed together and symbols attached to words
    
   ![image](https://github.com/user-attachments/assets/94b08d83-acfe-4309-9752-1a19cb2328d3)
 

## Development

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. 

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
