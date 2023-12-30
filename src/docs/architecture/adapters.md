---
title: Adapters
---

## Introduction

L'apdateur est la pièce maitresse qui permet à une application Stone.js d'être indépendante de la plate-forme. On entend par indépendant de la plate-forme, la capacité d'une même et seule application à s'executer sur differentes plateformes(node.js, navigateur, Cloud FAAS, Worker).

Etablissons la difference via un simple exemple d'application HTTP **Hello world** sans Stone.js.

``` js
// Un exemple avec node.js
http
  .createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end('Hello world!')
  })
  .listen(8080)
```

``` js
// Un exemple avec AWS Lambda(Cloud FAAS)
export const handler = (event, context) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: 'Hello world!',
  }
}
```

La même application avec Stone.js ou la plateforme est determinée au moment de l'execution.

``` js
import { JsonResponse } from '@stone-js/http'
import { NodeHTTPAdapter, AWSLambdaHTTPAdapter } from '@stone-js/adapters'

// Votre application
const appModule = ({ request }) => JsonResponse.create('Hello world!')

export const app = process.env.AWS_LAMBDA_RUNTIME_API
  ? AWSLambdaHTTPAdapter.createAndRun(appModule)
  : NodeHTTPAdapter.createAndRun(appModule)
```

<hr class="my-hr" />

## Installation

Tous les adapteurs supportés par Stone.js sont disponibles depuis le [registre npm](https://www.npmjs.com) et peuvent etre installés comme suit:

::: info 
Tous les adapteurs sont pré-installés lorsqu'une application est construit avec l'utilitaire [`@stone-js/create`](https://www.npmjs.com/package/@stone-js/create)
:::

::: code-tabs#shell

@tab:active npm

```bash
npm i @stone-js/adapters
```

@tab yarn

```bash
yarn add @stone-js/adapters
```

@tab pnpm

```bash
pnpm add @stone-js/adapters
```

:::

<hr class="my-hr" />

## Comment ca marche?

Il est toujours interessant de comprendre le fonctionnement d'un outils afin de bien l'utiliser.
Le but de cette section est de donner une explication sommaire de comment fonctionnent les adapteurs.

Un adapteur Stone.js permet de créer le contexte d'execution et d'uniformiser les entrées et sorties.
Chaque adapteur est composé d'une classe qui est l'adapteur lui meme, d'un mapper et de pipes.

### Adapteur

La classe representant l'adapteur créée le contexte d'execution, fait le mapping des entrées,
execute l'application, fait le mapping des sorties et retourne la réponse.

Exemple d'un simple adapter http de node.js qui lance le serveur node.js recoit une requete, execute l'application et retourne une reponse.

```js
export class NodeHTTPAdapter extends Adapter {
  run () {
    http.createServer((req, res) => {
      const mapper   = NodeHTTPMapper.create(this.context.container)
      const request  = await mapper.request({ req })
      const response = await this.context.run(request)
      const nodeRes  = await mapper.response({ req, res, request, response })
      
      await nodeRes.send()
    })
    .listen(8080)
  }
}
```

### Mapper

Le mapper sert à convertir les entrées des differentes plate-formes en entrées Stone.js 
et les sorties Stone.js en sorties des differentes plate-formes.

Le mapper utilise un [Pipeline](https://www.npmjs.com/package/@stone-js/pipeline) 
qui implemente le patron [Chaîne de responsabilité](https://refactoring.guru/design-patterns/chain-of-responsibility)
afin de faire la conversion des entrées et sorties

Exemple d'un simple mapper http qui utilise des pipes afin de faire les conversions de données.
bien sur l vrai mapper est un peu plus complexe.

```js
// Exemple d'un squelette mapper HTTP
export class HTTPMapper {
  constructor (container) {
    // Le conteneur de service
    this._container = container
  }

  request (passable) {
    return Pipeline
      .create(this._container)
      .send(passable)
      .through([IpPipe, CookiePipe])
      .then((v) => new Request(v.request))
  }

  response (passable) {
    return Pipeline
      .create(this._container)
      .send(passable)
      .through([SendPipe])
      .then((v) => v.res)
  }
}

```

### Les Pipes

Les pipes servent à decomposer le travail de conversion des entrées et sorties 
et fonctionnent comme les middlewares dans certains cadre de travail.

Exemple d'une simple pipe qui permet de recuperer l'addresse IP de l'utilisateur depuis node.js, 
bien sur la vraie pipe est beaucoup plus complexe.

```js

export class IpPipe {
  constructor (container) {
    // Le conteneur de service
  }

  handler (passable, next) {
    const proxiedIp = passable.req.headers['x-forwarded-for']?.split(',').shift()
    passable.request.ip = proxiedIp || passable.req.socket?.remoteAddress

    return next(passable)
  }
}
```

<hr class="my-hr" />

## Liste des adapteurs disponible

Voici la liste des adapteurs disponibles pour le moment, ainsi que leurs fonctions:

- [Adapter](#adapter)
- [NodeHTTPAdapter](#nodehttpadapter)
- [AWSLambdaHTTPAdapter](#awslambdahttpadapter)
- [AWSLambdaEventAdapter](#awslambdaeventadapter)
- [NodeConsoleAdapter](#nodeconsoleadapter)
- [NodeWebSocketAdapter](#nodewebsocketadapter)

### Adapter

L'adapteur generique servant de base aux autres adapteurs, 
tous les adapteurs heritent ce dernier et si vous comptez creer un adapteur personalisé il doit heriter ce dernier.

Cet adapteur peut être utilisé afin d'executer une application Stone.js necessitant aucune entrée et sortie 
et d'un contexte spécifique.

Il peut etre utilise afin de créer une simple application pouvant s'executer sur le navigateur.

``` js
import { Adapter } from '@stone-js/adapters'

// Votre application
const appModule = () => document.onclick = () => console.log('Hello world!')

export const app = Adapter.createAndRun(appModule)
```

### NodeHTTPAdapter

### AWSLambdaHTTPAdapter

### AWSLambdaEventAdapter

### NodeConsoleAdapter

### NodeWebSocketAdapter

<hr class="my-hr" />

## Configuration

<hr class="my-hr" />

## Adapteur personnalisé

Vous pouvez créer votre propre adapteur si les notres ne repondent pas à vos besoins. 
Mais si votre besoin est lié à la conversion des entrées ou sorties, à savoir si vous voulez 
intercepter les entrees ou sorties afin d'appliquer votre propre logique, il est mieux de créer une pipe personnalisée.

### Adapteur

Pour créer son propre adapteur, il suffit juste d'étendre la classe `Adapter` et d'implementer sa logique dans le méthode `run`.

```js
import { Adapter } from '@stone-js/adapters'

export class MyCustomAdapter extends Adapter {
  run () {
    // Implementer sa logique ici
  }
}
```

::: info 
Exemple d'adapteur comme source d'inspiration: [Adapteurs](https://github.com/stonemjs/adapters/tree/main/src/adapters)
:::

### Pipes