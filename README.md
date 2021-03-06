# Browser Extension Template [![Generic badge](https://img.shields.io/twitter/follow/KarmakarDebdut?style=social)](https://twitter.com/KarmakarDebdut)
## w/ React Preact Typescript 

![Generic badge](https://img.shields.io/badge/build-success-brightgreen.svg)

> A Out of the Box 🎁 Browser Extension Template with support for React, Preact, Typescript and Manifest V3

## 🏡 Builtin

- Manifest V3
- Content Scripts
- Background Worker
- Popup
- Options Page

## 🎗 Supports

- React 17
- Typescript
- Preact X
- PostCSS
- GraphQL
- JSON Imports
- Sass
- Webpack 5

Simply remove or don't use the technologies you don't like.

## 👩🏻‍🏫 Notes

🥇 Content Scripts, Popup and Options Page support Preact

🥈 You can choose to not use preact in any of these, just remove the preact imports

🥉 React, Preact, Typescript or PostCSS are all optional

For Disabling TS

- Just change file extensions ts to js and tsx to jsx
- Change all ts to js and tsx to jsx in `webpack/base.js`

For Preact builds

- Disable TS using instructions above
- `npm install preact`
- Enable `{ "pragma":"h" }` in `webpack/base.js`
- Enable `"jsxImportSource": "preact"` in `tsconfig.json`
- Change react imports to preact

```js
import { render } from 'react-dom'
import React from 'react'

import { h, render } from 'preact'
```


## Commands

```sh
# Live Build for specific browser
# browser_name: chrome | firefox | safari 
npm run start:<browser_name>

# Live Build for chrome
npm run start:chrome

# Build for all Browsers
npm run build

# Build for specific browser
# browser_name: chrome | firefox | safari 
npm run build:<browser_name>

# Build for chrome
npm run build:chrome

# Run Tests with Mocha
npm run test

# Clean Builds
npm run clean
```

## Browser Support

- [x] Chrome
- [ ] Firefox
- [x] Opera (Chrome Build)
- [x] Edge (Chrome  Build)
- [ ] Safari
