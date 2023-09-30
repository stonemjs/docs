---
title: Guide de Démarrage
---

## Introduction

Stone Router permet de definir des routes(avec des regles) afin d'exposer les differentes fonctionnalites d'une application.
Il y a des routers backend et frontend, pour l'instant Stone Router est un router backend.

Stone Router est concu pour etre simple, leger, developper friendly, facile d'integration et plateforme agnostique.

C'est une librairie dite standalone, c'est à dire qu'il peut etre integre facilement dans des projets autre que Stone.js framework.

Stone Router met a votre disposition une API elegante avec des methodes chainables 
prenant en compte presque tous les cas d'utilisations necessaires au bon fonctionnement d'une application.

## Sous le capot

Afin de comprendre les differentes fonctionnalités de Stone Router, levons le capot et examinons ce qui se cache par dessous.
Pour ce faire on va creer un CRUD de gestion d'utlisateurs qui servira d'exemple durant toute la documentation.

### Definition des routes

Les routes peuvent etre definies de trois manieres:

- [Implicite](definitions.html#definition-implicite)
- [Explicite](definitions.html#definition-explicite)
- [Implicite avec decorateur](definitions.html#definition-implicite-via-decorateur)

Dans cet exemple nous allons utiliser uniquement la definition implicite, les autres seront obordés par la suite dans leur section respective.

Pour definir des routes implicite il faut juste importer le router, en créer une instance et les definir.

#### Avec des callbacks

Dans cet exemple l'action sera une simple fonction javascript qui retourne la reponse.

```js
import { Router } from '@stone-js/router'

const router = new Router()

router.get('/users', ({ request }) => 'Liste des utilisateurs...')
router.post('/users', ({ request, payload }) => 'Sauevgarder un utilisateur')
```

Un instance du `Router` est créée `const router = new Router()` 
ensuite les methode `router.get()` et `router.post()` sont utiliser pour definir des routes relatives aux verbes http,
ensuite les methodes prennent en parametres le path `router.get('/users')` vers la fonctionnalité 
et un callback `({ request }) => 'Liste des utilisateurs...'` qui retourne la reponse relative a la route,
enfin le `callback` prend en parametre l'objet `RequestContext`.

Ici on utilise la syntaxe de decomposition `{ request, payload }` dans les parametres de la methode afin d'avoir un accès direct à ses propriétés.
Le `RequestContext` sera abordé plus en details plus tard.


#### Avec des controlleurs

Par soucis de simplicité on va juste definir les methodes du controlleur sans implementation.

```js
import { Router } from '@stone-js/router'

const router = new Router()

const UserController = class {
  list({ request }) {
    ...
  }

  create({ request, payload }) {
    ...
  }
}

router.get('/users', { list: UserController })
router.post('/users', { create: UserController })
```

C'est toujours le meme scenario que dans l'exemple precendant avec la seule difference 
qu'on utilise un objet literal comme action à la place d'une fonction.

Penchons nous un peu sur la syntaxe de l'action a savoir l'objet literal `{ list: UserController }`, la cle de l'objet `list` doit etre le nom de la methode
a executer et la valeur `UserController` doit etre la classe hebergeant la methode.


### Avec un serveur node

Comme vous pouvez le remarquer le router est très simple d'utilisation, 
maintenant nous allons implementer le tout avec un serveur node afin d'avoir un exemple complet

```js
import http from 'node:http'
import { Router } from '@stone-js/router'
import { NodeHTTPMapper } from '@stone-js/adapter'

const router = new Router()

router.get('/users', ({ request }) => 'Liste des utilisateurs...')
router.post('/users', ({ request, payload }) => 'Sauevgarder un utilisateur')

http
  .createServer(async (req, res) => {
    const stoneRequest = new NodeHTTPMapper().request({ res })
    const response = await router.dispatch(stoneRequest)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ data: response }))
  })
  .listen(8080)
```

Dans cet exemple:
1. on definit nos routes comme dans les examples anterieurs
2. on crée un serveur node `http.createServer(async (req, res) => {...})` qui ecoute sur le port 8080 `http.listen(8080)`
3. on crée une instance de StoneRequest `const stoneRequest = new NodeHTTPMapper().request({ res })`
4. on envoie la requete au routeur `const response = await router.dispatch(stoneRequest)` 
5. le router va se charger de faire le matching, executer l'action de la route et de retourner la reponse
6. Enfin on envoie la reponse à l'utilisateur `res.end(response)`

::: important 
`Stone Router` fonctionne uniquement avec une instance de `StoneRequest`.
:::

En resumé l'utilisation du routeur consiste a:
1. Creer une instance du router `const router = new Router()`
2. Definir les routes `router.get('/users', ({ request }) => 'Liste des utilisateurs...')`
3. Créer une instance de `StoneRequest` `const stoneRequest = new NodeHTTPMapper().request({ res })`
4. Enfin envoyer la requete aux routes `const response = await router.dispatch(stoneRequest)`

## Prochaine etape

Dans cet exemple beaucoup de concepts ont ete developpés, mais ne vous inquietez pas on va tous les decouvrir.
