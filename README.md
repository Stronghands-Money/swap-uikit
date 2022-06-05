# 🌴 Yieldbay UIkit

[![Version](https://img.shields.io/npm/v/@yieldbay-libs/uikit)](https://www.npmjs.com/package/@yieldbay-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@yieldbay-libs/uikit)](https://www.npmjs.com/package/@yieldbay-libs/uikit)

Yieldbay UIkit is a set of React components and hooks used to build pages on Yieldbay's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @yieldbay-libs/uikit`

## Setup

### Theme

Before using Yieldbay UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@yieldbay-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@yieldbay-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
