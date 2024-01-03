---
title: Adapters
---

## Introduction

L'apdateur est la composante magique qui permet à Stone.js d'être indépendant des plate-formes. On entend par indépendant des plate-formes, la capacité d'une même et seule application à s'executer sur differentes plate-formes(node.js, navigateur, Cloud FAAS, Worker, etc.) sans aucune implementation specifique aux plate-formes. 
Et si on voyait ça de plus près à travers de simples examples.

Exemple d'une application HTTP **Hello world** sans Stone.js:

``` js
// Un exemple avec node.js sans Stone.js
http
  .createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end('Hello world!')
  })
  .listen(8080)
```

``` js
// Un exemple avec AWS Lambda(Cloud FAAS) sans Stone.js
export const handler = (event, context) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: 'Hello world!',
  }
}
```

Comme vous le voyez, il va falloir deux implementations differentes afin d'executer la meme application sur deux plate-formes differentes. 
Maintenant voyons voir ce que ca donne avec Stone.js où la plateforme est determinée au moment de l'execution

Exemple d'une application HTTP **Hello world** avec Stone.js:

``` js
import { Env } from '@stone-js/env'
import { JsonResponse } from '@stone-js/http'
import { NodeHTTPAdapter, AWSLambdaHTTPAdapter } from '@stone-js/adapters'

// Votre application
const appModule = ({ request }) => JsonResponse.create('Hello world!')

export const app = Env.get('APP_DEFAULT_ADAPTER', 'node') === 'aws_lambda'
  ? AWSLambdaHTTPAdapter.createAndRun(appModule)
  : NodeHTTPAdapter.createAndRun(appModule)
```

Comme vous pouvez le voir `appModule` represente votre application qui est une fonction et peut aussi être une classe ou une grosse application avec des routes, des modeles, etc..
Ensuite on se base sur la variable environnementale `APP_DEFAULT_ADAPTER` afin de detecter la plate-forme, enfin on utilise les adapteurs appropriés,
en l'occurence `AWSLambdaHTTPAdapter` pour les fonctions AWS Lambda et `NodeHTTPAdapter` pour un serveur node.js.
Tout ça pour dire qu'avec de simple adapter le deploiement d'une application Stone.js sur differentes plate-formes reste infini.

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

## Comment ca marche?

Il est toujours interessant de comprendre le fonctionnement d'un outils afin de bien l'utiliser.
Le but de cette section est de donner une explication sommaire de comment fonctionnent les adapteurs.

Un adapteur Stone.js permet de créer le contexte d'execution et d'uniformiser les entrées et sorties.
Chaque adapteur est une sous-classe d'`Adapter` dans laquelle la logique est implementée dans la methode `run`.
Il peut aussi dependre d'un mapper et des pipes quand c'est nécessaire.

### Adapteur

La classe representant l'adapteur créee le contexte d'execution, fait la conversion des entrées quand c'est nécessaire,
execute l'application, fait la conversion des sorties quand c'est nécessaire et retourne la réponse.\
La seule chose qu'il faut retenir ici, c'est que la veritable fonction d'un adapteur c'est de créer le contexte d'execution et d'executer l'application dans ce contexte.

Exemple d'un simple adapter HTTP de node.js qui lance le serveur node.js recoit une requete, execute l'application et retourne la reponse.

```js
export class NodeHTTPAdapter extends Adapter {
  constructor (app, configurations = {}) {
    super(app, configurations)

    this.mapper = this.context.resolveService(NodeHTTPMapper)
  }

  run () {
    http.createServer(async (req, res) => { // Le contexte d'execution
      const request  = await this.mapper.input({ req })
      const response = await this.context.run(request) // Execute l'application
      const nodeRes  = await this.mapper.output({ req, res, request, response })
      
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
afin de faire la conversion des entrées et sorties.

Exemple d'un simple mapper http qui utilise des pipes afin de faire les conversions des données.
Evidemment, le vrai mapper est un peu plus complexe.

```js
// Exemple d'un squelette mapper HTTP
export class HTTPMapper {
  constructor (container) {
    // Le conteneur de service
    this._container = container
  }

  input (passable) {
    return Pipeline
      .create(this._container)
      .send(passable)
      .through([IpPipe, CookiePipe])
      .then((v) => new Request(v.request))
  }

  output (passable) {
    return Pipeline
      .create(this._container)
      .send(passable)
      .through([SendPipe])
      .then((v) => v.res)
  }
}
```

::: info
Les mappers sont très génériques, donc reutilisable, il est donc conseiller d'utiliser nos mappers lorsque vous créez un nouvel adapteur, 
et d'en créer un nouveau quand c'est vraiment necessaire.
:::

### Les Pipes

Les pipes servent à décomposer le travail des mappers à savoir la conversion des entrées et sorties, 
ils fonctionnent comme les middlewares dans certains cadre de travail(framework).

Une Pipe prend en parametre le contexte des entrées ou sorties à travers l'objet `passable`, elle fait son traitement sur les données 
et fait appel à la prochaine pipe en invoquant et retournant la methode `next` avec le passable comme parametre.

Exemple d'une simple pipe qui permet de recuperer l'addresse IP de l'utilisateur depuis node.js. 
Evidemment la vraie pipe est beaucoup plus complexe.

```js

export class IpPipe {
  handler (passable, next) {
    const proxiedIp = passable.req.headers['x-forwarded-for']?.split(',').shift()
    passable.request.ip = proxiedIp || passable.req.socket?.remoteAddress

    return next(passable)
  }
}
```

### Résumé

Ce qu'il faut réelement retenir c'est que:
- les adapteurs créent le contexte d'execution et execute l'application dans ce contexte
- les mappers font la conversion des entrées et sorties en utilisant des pipes
- les pipes permettent de decomposer le travail de conversion des mappers.


## Liste des adapteurs disponibles

Voici la liste des adapteurs disponibles pour le moment, ainsi que leurs fonctions:

- [Adapter](#adapter)
- [NodeHTTPAdapter](#nodehttpadapter)
- [AWSLambdaHTTPAdapter](#awslambdahttpadapter)
- [AWSLambdaEventAdapter](#awslambdaeventadapter)
- [NodeConsoleAdapter](#nodeconsoleadapter)
- [NodeWebSocketServerAdapter](#nodewebsocketserveradapter)
- [AWSWebSocketServerAdapter](#awswebsocketserveradapter)

### Adapter

C'est l'adapteur générique et par défaut, tous les autres adapteurs heritent de ce dernier 
et si vous comptez créer un adapteur personalisé il doit heriter de ce dernier.

La particularité de cet adapteur c'est qu'il est très simple et n'est couplé a aucune plate-forme contrairement aux autres,
tout ca pour dire qu'il ne fait aucune conversion d'entrees et sorties et ne possede pas un contexte spécifique.

Il peut être utilisé afin d'executer une application Stone.js sur le navigateur web, dans un web worker ou service worker.

``` js
import { Adapter } from '@stone-js/adapters'

// Votre application
const appModule = () => document.onclick = () => console.log('Hello world!')

export const app = Adapter.createAndRun(appModule)
```

### NodeHTTPAdapter

Cet adapteur permet d'executer une application HTTP sur un serveur node.js.

``` js
import { JsonResponse } from '@stone-js/http'
import { NodeHTTPAdapter } from '@stone-js/adapters'

// Votre application
class AppModule {
  constructor (container) {}

  run ({ request }) {
    if (request.pathname === '/hello-world') {
      return JsonResponse.ok('Hello world!')
    }

    return JsonResponse.notFound()
  }
}

export const app = NodeHTTPAdapter.createAndRun(AppModule)
```

### AWSLambdaHTTPAdapter

Cet adapteur permet d'executer une application HTTP dans une fonction AWS Lambda.

``` js
import { JsonResponse } from '@stone-js/http'
import { AWSLambdaHTTPAdapter } from '@stone-js/adapters'

// Votre application
class AppModule {
  constructor (container) {}

  run ({ request }) {
    if (request.pathname === '/hello-world') {
      return JsonResponse.ok('Hello world!')
    }

    return JsonResponse.notFound()
  }
}

export const app = AWSLambdaHTTPAdapter.createAndRun(AppModule)
```

### AWSLambdaEventAdapter

Cet adapteur permet d'executer une application quelconque dans une fonction AWS Lambda.

``` js
import { AWSLambdaEventAdapter } from '@stone-js/adapters'

// Votre application d'authentification
class AppModule {
  constructor (container) {}

  run ({ event, context }) {
    const payload = JSON.parse(event.body)

    if (payload.email === 'dummy-email' && payload.password === 'dummy-password') {
      return {
        body: JSON.stringify({ access_token: 'dummy-token' })
      }
    }

    return { statusCode: 401 }
  }
}

export const app = AWSLambdaEventAdapter.createAndRun(AppModule)
```

### NodeConsoleAdapter

Cet adapteur permet d'executer une application quelconque en mode console avec node.js

``` js
import { NodeConsoleAdapter } from '@stone-js/adapters'

// Votre application
class AppModule {
  constructor (container) {}

  run ({ command, arguments, options }) {
    if (['hello', 'world'].includes(command)) {
      console.log('Hello world ', arguments.join(', '))
    }

    throw new RuntimeException('Invalid command')
  }
}

export const app = NodeConsoleAdapter.createAndRun(AppModule)
```

### NodeWebSocketServerAdapter

Cet adapteur permet d'executer une application quelconque dans un contexte de serveur websocket avec node.js.

``` js
import { NodeWebSocketServerAdapter } from '@stone-js/adapters'

// Votre application
class AppModule {
  constructor (container) {}

  run ({ request }) {
    if (request.event === 'connection') {
      return JSON.stringify({ token: 'dummy-token' })
    } else if (request.event === 'message') {
      if (request.pathname === 'hello-world') {
        return 'Hello world'
      }
    }
  }
}

export const app = NodeWebSocketServerAdapter.createAndRun(AppModule)
```

### AWSWebSocketServerAdapter

Cet adapteur permet d'executer une application quelconque dans un contexte de serveur websocket AWS websocket API.

``` js
import { AWSWebSocketServerAdapter } from '@stone-js/adapters'

// Votre application
class AppModule {
  constructor (container) {}

  run ({ request }) {
    if (request.event === 'connection') {
      return JSON.stringify({ token: 'dummy-token' })
    } else if (request.event === 'message') {
      if (request.pathname === 'hello-world') {
        return 'Hello world'
      }
    }
  }
}

export const app = AWSWebSocketServerAdapter.createAndRun(AppModule)
```

## Configuration

L'activation et la configuration des adapteurs se font dans le fichier de configuration `adapter.mjs` situé
dans le repertoire `config` à la racine du projet.

`default` contient le nom de l'adapteur actuellement actif.

`defaults` permet de définir la liste des adapteurs à utiliser dans le projet, 
il prend un tableau d'objet ou la clé de l'objet est le nom à utiliser dans `default` et la valeur, la classe representant l'adapteur.

```js
import { Env } from '@stone-js/env'
import { NodeHTTPAdapter, AWSLambdaHTTPAdapter } from '@stone-js/adapters'

export default {
  default: Env.get('APP_DEFAULT_ADAPTER', 'node'),
  defaults: [
    { node: NodeHTTPAdapter },
    { aws_lambda: AWSLambdaHTTPAdapter }
  ],
  ...
}
```

**NB:** Il est important d'ajouter uniquement les adapteurs qui seront utilisés afin de reduire la taille du bundle de production.

### NodeHTTPAdapter

`pipe.request` et `pipe.response` servent à ajouter des pipes personnalisées pour node.js.

`server.*` contient les configurations necessaires afin de lancer un serveur node.js.

```js
import { Env } from '@stone-js/env'

export default {
  ...
  http: {
    node: {
      pipe: {
        request: [],
        response: []
      },
      server: {
        key: null,
        cert: null,
        port: Env.number('APP_PORT', 8080),
        protocol: Env.string('APP_PROTOCOL', 'http'),
        hostname: Env.string('APP_HOSTNAME', 'localhost'),
        requestTimeout: Env.number('NODE_REQUEST_TIMEOUT', 300000)
      }
    },
  }
}
```

### AWSLambdaHTTPAdapter

`pipe.request` et `pipe.response` servent à ajouter des pipes personnalisées pour la fonction AWS lambda.

```js
export default {
  ...
  http: {
    aws: {
      lambda: {
        pipe: {
          request: [],
          response: []
        }
      }
    }
  }
}
```

### AWSLambdaEventAdapter

`pipe.request` et `pipe.response` servent à ajouter des pipes personnalisées pour la fonction AWS lambda.

```js
export default {
  ...
  event: {
    aws: {
      lambda: {
        pipe: {
          request: [],
          response: []
        }
      }
    }
  }
}
```

## Adapteur personnalisé

Vous pouvez créer votre propre adapteur si les notres ne repondent pas à vos besoins. 
Mais si votre besoin est lié à la conversion des entrées ou sorties, à savoir si vous voulez 
les intercepter afin d'appliquer votre propre logique de conversion ou d'ajouter des attributs aux objets, 
il est mieux de créer une pipe personnalisée au lieu d'un adapteur.

### Adapteur

Pour créer son propre adapteur, il suffit juste d'étendre la classe `Adapter` et d'implementer sa logique dans la méthode `run`.

Vous pouvez vous inspirer de ces adapteurs afin de créer le votre: [Built-in Adapters](https://github.com/stonemjs/adapters/tree/main/src/adapters)

```js
import { Adapter } from '@stone-js/adapters'

export class MyCustomAdapter extends Adapter {
  run () {
    // Implementer sa logique ici
  }
}
```

Il faut ensuite l'importer dans le fichier de configuration `config/adapter.mjs`

```js
import { Env } from '@stone-js/env'
import { NodeHTTPAdapter } from '@stone-js/adapters'

export default {
  default: Env.get('APP_DEFAULT_ADAPTER', 'node'),
  defaults: [
    { node: NodeHTTPAdapter },
    { my_adapter: MyCustomAdapter } // Votre adapter
  ],
  ...
}
```


### Pipes

Quand le besoin est lié à la conversion des données, une pipe est la solution idéale, 
et on encourage la creation de pipe personnalisée au lieu d'un adapteur.

Une pipe peut être une fonction ou une classe, et doit avoir la méthode `handle` quand c'est une classe. 
La fonction ou la méthode `handle` recoit un objet passable et une fonction `next` qui est invoquée et ensuite retounée.

Vous pouvez vous inspirer de ces pipes afin de créer la votre: [Built-in Pipes](https://github.com/stonemjs/adapters/tree/main/src/pipes)

```js
export class MyPoweredByPipe {
  constructor (container) {}

  handle (passable, next) {
    passable.res.setHeader('X-Powered-By', 'Stone.js 1.0.0')

    return next(passable)
  }
}
```

Il faut ensuite l'importer dans le fichier de configuration `config/adapter.mjs`

```js
export default {
  ...
  http: {
    node: {
      pipe: {
        request: [],
        response: [MyPoweredByPipe] // Votre pipe
      },
    }
  }
  ...
}
```

#### L'objet request de Stone.js

Pour ajouter des attributs personnalisés à l'objet `request` de Stone.js depuis une pipe, il faut passer par l'attribut `metadata`.

```js
// Class
export class MyCompanyNamePipe {
  handle (passable, next) {
    passable.request.metadata.companyName = 'Stone.js'

    return next(passable)
  }
}

// Function
export const MyCompanyNamePipe = (passable, next) => {
  passable.request.metadata.companyName = 'Stone.js'

  return next(passable)
}
```

Ensuite on peut y acceder facilement depuis votre l'application via l'objet `request.get('companyName')` ou `request.metadata('companyName')`.

```js
import { JsonResponse } from '@stone-js/http'

// Votre application
export class AppModule {
  run ({ request }) {
    return JsonResponse.ok(request.get('companyName', 'Stone.js'))
  }
}
```