# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Common problems and solutions

### 1. verbose stack Error: could not determine executable to run
```
 verbose stack Error: could not determine executable to run
 verbose stack     at getBinFromManifest (/opt/homebrew/lib/node_modules/npm/node_modules/libnpmexec/lib/get-bin-from-manifest.js:17:23)
 verbose stack     at exec (/opt/homebrew/lib/node_modules/npm/node_modules/libnpmexec/lib/index.js:202:15)
 verbose stack     at async Npm.exec (/opt/homebrew/lib/node_modules/npm/lib/npm.js:207:9)
 verbose stack     at async module.exports (/opt/homebrew/lib/node_modules/npm/lib/cli/entry.js:74:5)
```
#### Solution:
Don't use the latest version of `tailwindcss`, make sure your nodejs version is 20+ and npm version is 9+;
```
npm install -D tailwindcss@3.4.13 autoprefixer postcss
npx tailwindcss init -p
```