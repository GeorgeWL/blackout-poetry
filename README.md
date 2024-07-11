
# blackout-poetry

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b2d8261-d292-4c82-be32-a1ef0bf0d461/deploy-status)](https://app.netlify.com/sites/leafy-platypus-8587f4/deploys)

Pet Project to create [Blackout Poetry](https://en.wikipedia.org/wiki/Erasure_(artform)) in the web

## Goals

- [ ] Create a simple version
  - [ ] User can input text
  - [ ] User can select words to be erased - buttons
  - [ ] Shows in UI the output
- [ ] Select through highlight
  - [ ] Figure out a UI for this
  - [ ] Should be able to highlight to blackout the text
  - [ ] Should now allow partial selections, rather than only full words
- [ ] Add fetch for "Random Text"
  - [ ] User can now choose between "Random Text" and "Input my own"

## Possible Future Development

- [ ] Improve UI
- [ ] Print button
- [ ] Option to edit? Feels out of the spirit of it
- [ ] Option to filter "Random Text" by category/theme

# Development

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

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
