---
title: Définition
---

## Introduction

Les routes permettent d'exposer les fonctionnalites d'une application via des chemins exactes, 
et la mise en place de ces chemins ainsi que les regles de correspondance est ce qu'on appelle la definition de routes.

## Type de définition

Les routes peuvent etre definies de deux manieres:

- Declarative
- Imperative

Libre à vous de choisir celle qui convient le mieux à votre projet.

### Définition implicite

On les definit directement depuis le router en utilisant les méthodes appropriées.
Chaque méthode prend en parametre tout ou une partie des options de [définition](#l-objet-definition) de route.

``` js
router.get({ path: ..., action: ... })
router.post({ path: ..., action: ... })
router.put({ path: ..., action: ... })
router.patch({ path: ..., action: ... })
router.delete({ path: ..., action: ... })
router.options({ path: ..., action: ... })
```

Des fois on a besoin de definir des routes pour plusieurs verbes HTTP ou pour tous les verbes à la fois.
On peut utiliser les methode `match` pour plusieurs et `any` pour tous.

```js
router.any({ path: ..., action: ... })
router.match({ path: ..., action: ..., methods: [...] })
```

Notes:
- les proprietes `method` et `methods` n'ont aucun effet sur `any`, ce qui est evident parce qu'il repond a tous les verbes HTTP
- la propriete `methods` doit etre utilisée pour `match` afin d'indiquer les verbes HTTP.

Pour definir une route de fallback pour intercepter tout ce que les autres routes n'ont pas pu intercepter, 
on utilise la methode `fallback` qui prend uniquement l'action à executer en parametre.

```js
router.fallback(() => 'Je suis un fallback')
```

### Définition explicite

On les définit depuis un tableau d'objet literal, 
ce type de définition est plus flexible que les autres, 
ce qui nous donne plus de controle sur la manière de les définir, d'ou son appelation.

``` js
// Definition des routes
const routeDefinitions = [
  {
    path: '/v1/users',
    method: GET,
    action: { list: UserController }
  },
  {
    path: '/v1/users',
    method: POST,
    action: { create: UserController }
  },
  {
    path: '/v1/users/:id(\\d+)',
    methods: [PUT, PATCH],
    action: { update: UserController }
  },
  {
    path: '/v1/users/:id(\\d+)',
    method: DELETE,
    action: { remove: UserController }
  },
]
```

Pour definir une route comme fallback il suffit juste d'ajouter `fallback: true` dans la definition.

```js
...
  {
    fallback: true,
    path: '/v1/:fallback*',
    action: { fallback: UserController }
  }
...
```

Notes:
- Seules les options `fallback`, `path` et `action` peuvent etre indiquees pour un fallback.


### Définition implicite via decorateur

On les définit depuis des decorateurs JavaScript, 
utile pour garder les routes plus pret des controlleurs.
Chaque decorateur prend en parametre tout ou une partie des options de [définition](#l-objet-definition) de route.

::: info 
Il faudra utiliser un transcompilateur comme [babel](https://babeljs.io) afin de pouvoir utiliser les decorateurs JavaScript.
:::

``` js
@Get({ path: ..., ... })
@Post({ path: ..., ... })
@Put({ path: ..., ... })
@Patch({ path: ..., ... })
@Delete({ path: ..., ... })
@options({ path: ..., ... })
```

Pour definir des `match` et des `any`.

``` js
@Any({ path: ..., ... })
@Match({ path: ..., methods: [...], ... })
```

Pour definir une route comme fallback on utilise le decorateur `@Fallback`.

``` js
@Fallback({ path: ... })
```

Notes:
- Les decorateurs peuvent etre utilise uniquement au niveau des classes

Un simple exemple d'utilisation des decorateurs au niveau d'une classe.

``` js
export class UserController {

  @Get({ path: '/users' })
  list () { ... }

  @Post({ path: '/users' })
  create ({ request, payload }) { ... }

  @Get({ path: '/users/:id(\\d+)' })
  show ({ request, payload, params }) { ... }

  @Put({ path: '/users/:id(\\d+)' })
  update ({ request, payload, params }) { ... }

  @Delete({ path: '/users/:id(\\d+)' })
  remove ({ request, params }) { ... }

  @Fallback({ path: '/users/:fallback*' })
  fallback ({ request, params }) { ... }
}
```

### L'objet definition

Voici la liste exhaustive des options utilisées pour definir des routes.

``` js
{
  path: '/users/:user@username(\\.+)?',
  method: 'GET',
  throttle: [LoginRateLimiter],
  methods: ['GET'],
  children: [],
  strict: false,
  protocol: 'http',
  domain: '{subDomain(\\(auth|api))}.example.com',
  fallback: true,
  defaults: { subDomain: 'api' },
  name: 'users.list_show',
  bindings: {
    user: User
  },
  middleware: [AuthMiddleware],
  excludeMiddleware: [],
  action: { listOrShow: UserController },
  rules: { subDomain: /(auth|api)/ },
  redirect: '/people',
  alias: ['/people/:user@username(\\.+)?'],
}
```

Notes:
- `path` le chemin vers l'application, cette propriete est obligatoire
- `method` ou `methods` le verbe http, les verbes supportés sont: `[GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD]`
- `actions` l'action a executer, cette propriete est obligatoire
- Les autres seront abordé dans leur sections respective.

## Regrouper les definitions de routes

Pour regrouper les definitions de routes on utilise la propriete `children` prenant comme valeur
un tableau de definitions de routes.

```js
export const definitions = [
  {
    path: '/users',
    defaults: { id: 1 },
    rules: { id: /\d+/ },
    middleware: [AuthMiddleware],
    children: [
      {
        path: '/:id?',
        method: 'GET',
        rules: { id: /.+/ },
        middleware: [CORSMiddleware],
        action: () => "Liste d'utilisateurs"
      }
    ]
  }
]
```

Resultat:
- `path` => `/users/:id?`
- `rules` => `{ id: /.+/ }`
- `defaults` => `{ id: 1 }`
- `middleware` => `[AuthMiddleware, CORSMiddleware]`

Notes:
- la propriete `path` est obligatoire meme pour les enfants
- Si aucune methode `method` n'est definie la methode `GET` sera utilisée par defaut.
- Toutes les autres propriétes definies dans le parent se propageront et seront fusionnées avec celles des enfants
- Si les memes valeurs existent tant qu'au niveau du parent que des enfants, les valeurs des enfants seront preservées et ceci sans doublons.

### Regrouper les actions

On peut definir la classe contenant toutes les methodes dans la definition parent et les methodes dans leurs enfants respectifs.

```js
export const definitions = [
  {
    path: '/users',
    action: UserController
    children: [
      {
        path: '/',
        method: 'GET'
        action: 'list'
      }
    ]
  }
]
```

Notes:
- Seule les action de type classe peuvent etre regroupées.
- la propriete `action` n'est pas obligatoire pour le parent mais l'est pour les enfants

### Regrouper les noms

Toutes les definitions enfant seront prefixées du nom du parent si defini et sera delimité par un `.`

```js
export const definitions = [
  {
    path: '/users',
    name: 'users'
    children: [
      {
        path: '/',
        name: 'list'
      }
    ]
  }
]
```

Resultat:
- Le nom sera `users.list`

Notes:
- Les noms ne sont pas obligatoires.

### Le niveau de profondeur

Par defaut le niveau de profondeur des defintions de routes enfants est de 5, 
toutefois on peut changer cette valeur depuis le routeur.

```js
router.setMaxDepth(2)
```

Quand les definitions depassent la limite définie une exception est lancée.

### Regrouper les definitions implicite via decorateur

Pour mieux organiser les routes definies au niveau des classes, on utilise le decorateur `@Group`.

``` js
@Group({ path: ..., ... })
class UserController {
  ...
}
```

Notes:
- Tous les decorators sont des decorateurs de methodes, sauf `@Group` qui lui est l'unique decorateur de classe.

## Enregistrer les routes

Il faut d'abord enregistrer les definitions 
de routes([explicites](#definition-explicite) et [implicites via decorateur](#definition-implicite-via-decorateur)) 
depuis la methode `register` du routeur afin de les rendre disponible au sein de notre application. 
Cette methode prend en parametre un tableau de [définition](#l-objet-definition) ou un tableau de classes.

### Definitions explicites

Un exemple de comment enregistrer les routes depuis un tableau de [definitions explicites](#definition-explicite).

`routes.mjs`

```js
export const definitions = [
  { path: '/users', ... }
]
```

`app.mjs`

```js
import { Router } from '@stone-js/router'
import { definitions } from './routes.mjs'

const router = new Router()

router.register(definitions)
```

Notes:
- Les definitions sont declarees et exportees depuis le module `routes.mjs`
- Ensuite les definitions sont importées et enregistrees avec la methode `register` du routeur.

### Definitions implicites via decorateurs

Un exemple de comment charger les routes depuis les definitions implicites avec decorateurs.

`UserController.mjs`

```js
@Group({ path: '/users' })
export class UserController {

  @Get({ path: '/' })
  list ({ request }) {
    return ...
  }
}
```

`ArticleController.mjs`

```js
@Group({ path: '/articles' })
export class ArticleController {

  @Get({ path: '/' })
  list ({ request }) {
    return ...
  }
}
```

`app.mjs`

```js
import { Router } from '@stone-js/router'
import { UserController } from './UserController.mjs'
import { ArticleController } from './ArticleController.mjs'

const router = new Router()
const definitions = [UserController, ArticleController]

router.register(definitions)
```

Notes:
- Les definitions sont declarees au niveau des classes
- Les classes sont exportees
- Ensuite les classes sont importées et enregistrees avec la methode `register` du routeur.