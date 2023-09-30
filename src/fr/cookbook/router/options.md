---
title: Options
---

## Introduction

Le constructor du `Router` prend en parametres un objet d'options, un containeur de service et un emetteur d'evenement, 
mais on va mettre le focus sur l'objet `options`.

## Configurations

L'objet options sert definir des configurations globales au moment de la creation du router.

```js
{
  rules: Object,
  max_depth: number,
  bindings: Object,
  defaults: Object,
  strict: boolean,
  dispatchers: Object,
  matchers: Array<Function>,
  middleware: Array<Function>,
  definitions: Array<definition>,
  middleware_disabled: boolean
}
```

Cet objet est composé de:
- `rules` les regles globales pour tous les parametres de routes
- `max_depth` le niveau de profondeur pour les groupes de routes
- `bindings` les liaisons globales pour tous les parametres de routes
- `defaults` les valeurs par defaut pour tous les parametres de routes
- `strict` pour la correspondance stricte incluant la sensibilite a la case et la barre oblique finale
- `dispatchers` definir ses propres dispatchers
- `matchers` definir ses propres matchers
- `middleware` definir des middlewares globaux
- `definitions` un tableau contenant la liste de definition de routes à enregistrer
- `middleware_disabled` desactiver tous les middlewares

Un exemple d'utilisation.

```js
import { Router } from '@stone-js/router'

const options = {
  strict: true,
  rules: { id: /\d+/ },
  defaults: { username: 'unknown' },
  definitions: [
    {
      name: 'users.get'
      path: '/users/:id/profile/:username',
      method: 'GET',
      action: (ctx) => ctx.params.username
    }
  ]
}

const router = new Router(options)
const request = { path: '/users/12/profile', ... }

const url = router.generate('users.get', { id: 45 })
console.log(url) // /users/45/profile/unknown

const response = await router.dispatch(request)
console.log(response) // unknown
```