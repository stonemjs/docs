---
title: Introduction
index: false
---

## Why Stone.js

Stone.js est un micro cadre de travail javascript agnostique sur le plan environnemental (fonctionne dans Node.js, Browser ou V8), 
c'est à dire une application construit avec Stone.js peut etre executé n'importe ou avec zero ou peu de configuration.
Stone js resoud un grand probleme de maniere simple et avec elegence.

``` js
import { StoneFactory } from '@stone-js/core'
import { StoneFactory } from '@stone-js/adapters'

// Create an application that can run anywhere
const appModule = ({ context, config }) => {
  console.log(config.get(`app.messages.${context.getLocale()}`)) // Print: Hello World!
}

// App options
const options = {
  app: {
    messages: {
      en: 'Hello World!',
      fr: 'Bonjour le monde!',
    }
  }
}

// Bootstrap app
const bootstrap = async () => {
  await StoneFactory.createAndRun(appModule, options)
}

bootstrap()
```


## Vanilla Javascript

Beaucoup sont ceux qui vont directement vers Typescript sans passer par vanilla javascript ce qui les empechent bien sur de decouvrir la beauté et la puissance du langage 
mais aussi d'aprecier l'excellent travail qu'effectue la communaute(tc39) qui soutient ce langage en l'ameliorant tout en ameliorant l'experience developpeur.
Stone.js est une occasion de decouvrir ou redecouvrir la beauté, la puissance, et l'experience developpeur de vanilla javascript tout en vous permettant d'utiliser toutes les
fonctionnalités ESNext et meme celle en phase 3 (staging).
pour ce qui se pose peut etre la question, c'est quoi vanilla javascript et quelle est la difference entre javascript et vanilla javascript, faire la difference...

``` javascript
const appModule = ({ plateform }) => `Stone.js is running on ${plateform.name}`
const
```

## Typescript
Typescript etant un wrapper autour de javascript met a notre disposition beaucoup d'outils et de fonctionnalité afin d'ameliorer encore plus l'experience developpeur.
Stone.js vous permet de ....

## Page Information

You can set page information in Markdown's Frontmatter.

- The author is Ms.Hope.
- The writing date is January 1, 2020
- Category is "Guide"
- Tags are "Page Config" and "Guide"

## Page Content

You are free to write your Markdown here.

::: tip Assets

- You can place images besides your Markdown files, but you should use **relative links** (i.e.: starting with `./`) for them.

- For images in `.vuepress/public` directory, please use absolute links (i.e.: starting with `/`) for them.

:::

The theme contains a custom badge:

> A dark blue badge text badge at the end of line. <Badge text="Badge text" color="#242378" />

## Page Structure

This page should contain:

- [BreadCrumb](https://theme-hope.vuejs.press/guide/layout/breadcrumb.html)
- [Title and information](https://theme-hope.vuejs.press/guide/feature/page-info.html)
- [TOC (Table of Contents)](https://theme-hope.vuejs.press/guide/layout/page.html#header-list)
- [Meta information including update time and contributors](https://theme-hope.vuejs.press/guide/feature/meta.html)
- [Comments](https://theme-hope.vuejs.press/guide/feature/comment.html)
- [Navbar](https://theme-hope.vuejs.press/guide/layout/navbar.html)
- [Sidebar](https://theme-hope.vuejs.press/guide/layout/sidebar.html)
- [Footer](https://theme-hope.vuejs.press/guide/layout/footer.html)
- Back to top button

You can customize them in theme options and page frontmatter.

