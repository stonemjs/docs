---
title: Context
---

## Introduction

Le contexte étant une instance de `StoneFactory`, est l'objet principal representant une application Stone.js, 
le nom contexte a ete choisi en guise d'application afin d'eviter toute confusion avec votre application communement appelé `appModule`.

Le contexte est le coeur de toute application Stone.js, il gère le cycle de vie et choisi le noyau approprié afin d'executer votre application.
Il expose une simple API mettant ainsi à votre disposition:
- Un conteneur de service facilitant l'injection de dépendance
- Un depot de configuration permettant d'externaliser et de charger vos configurations depuis differente source(.env, voute, etc.)
- Un emetteur d'evenement permettant de decoupler vos fonctionnalités en utilisant le modèle d'observateur
- Et un gestionnaire d'exceptions permettant d'intercepter et de traiter les erreurs lancées par application.

**Note:** Il est important de souligner qu'on peut avoir qu'un seul contexte par application.

## Installation

`StoneFactory` la classe qui crée le contexte se trouve dans le module Core disponible depuis le [registre npm](https://www.npmjs.com) et peut etre installé comme suit:

::: info 
Le module Core est pré-installé lorsqu'une application est construit avec l'utilitaire [`@stone-js/create`](https://www.npmjs.com/package/@stone-js/create)
:::

::: code-tabs#shell

@tab:active npm

```bash
npm i @stone-js/core
```

@tab yarn

```bash
yarn add @stone-js/core
```

@tab pnpm

```bash
pnpm add @stone-js/core
```

:::

## Utilisation

Une fois le module installé, créer une application Stone.js reste un jeu d'enfant.

```js
import { StoneFactory, Event } from '@stone-js/core'

// Votre application
const appModule = ({ ctx }) => console.log('Hello world! ', ctx.getLocale())

// Les configurations de votre application
const configurations = {
  app: {
    locale: {
      default: 'fr'
    }
  }
}

// Le context Stone.js
const context = StoneFactory.create(appModule, configurations)

// Abonné à un evenement du cycle de vie
context.on(
  Event.STARTED_HOOK,
  (event) => console.log('App started with input', event.input)
)

// Executer l'application
export context.run('A nice input')
```

Comme vous pouvez le voir `appModule` represente votre application qui peut etre une fonction ou une classe avec la methode run,
ensuite on la constante `configurations` qui contient les configurations de l'application, après on crée le contexte Stone.js, 
on s'abonne à un evenement du cycle de vie et enfin on execute l'application avec des entrées optionnelles.

**Note:** 



## Cycle de vie



## L'objet de contexte

Telle est l'API(methodes et proprietés) exposée depuis l'objet de contexte:

| Nom               | Description                                                                          |
| ----------------- | ------------------------------------------------------------------------------------ |
| `create`          | Methode statique permettant de créer un contexte(Application Stone.js)               |
| `createAndRun`    | Methode statique permettant de créer et de lancer une application Stone.js           |
| `config`          | Le depot de configuration                                                            |
| `container`       | Le conteneur de service                                                              |
| `events`          | Le gestionnaire d'evenement                                                          |
| `get`             | Retourne un objet depuis le conteneur de service ou le depot de configuration        |
| `has`             | Verifie si un objet existe dans le conteneur de service ou le depot de configuration |
| on                | Permet de s'abonner à un evenement                                                   |
| emit              | Permet d'emettre un evenement                                                        |
| removeListener    | Permet de Supprimer un abonné                                                        |
| resolveService    | Fait la resolution d'un service depuis le conteneur de service                       |
| registerService   | Enregistre un service dans le conteneur de service                                   |
| registerInstance  | Enregistre une valeur dans le conteneur de service                                   |
| run               | Lance l'application                                                                  |
| stop              | Arrete l'application                                                                 |
| getEnvironment    | Retourne l'environnement d'execution(dev, prod, etc.)                                |
| isDebug           | Retourne `true` si l'application est lancée en mode debug                            |
| isEnv             | Retourne `true` si c'est l'actuel environnement                                      |
| isProduction      | Retourne `true` si c'est l'environnement de production                               |
| setLocale         | Definir le `locale` par defaut                                                       |
| getLocale         | Recuperer le `locale` par defaut                                                     |
| isLocale          | Si c'est l'actuel `locale`                                                           |
| setFallbackLocale | Definir le `locale` de secours                                                       |
| getFallbackLocale | Recuperer le `locale` de secours                                                     |
| abort             | Lancer une exeception de type `RuntimeException`                                     |

### Create

Methode statique permettant de créer un contexte c'est a dire une Application Stone.js, il retourne une instance de `StoneFactory`.

```js
...
const context = StoneFactory.create(appModule, configurations)
```

### CreateAndRun

Methode statique permettant de créer et de lancer une application Stone.js. Son type de retour varie en fonction de l'adapteur utilisé. 
Le type de retour avec l'adapteur par defaut est la valeur retournée par la methode `run` de `appModule` ou l'instance de `appModule` 
s'il n'a pas de méthode `run` dans le cas d'une classe ou la valeur de retour de `appModule` dans le cas d'une fonction.

```js
...
const app = StoneFactory.createAndRun(appModule, configurations)

// Avec un adapteur
const app = StoneFactory.createAndRun(appModule, NodeHTTPAdapter, configurations)
```

```js
// Le depot de configuration
context.config.get('app.debug')

// Le conteneur de service
context.container.make('config').get('app.debug')

// Le gestionnaire d'evenement
context.events.on(
  Event.STARTED_HOOK,
  (event) => console.log('App started with input', event.input)
)

// Recupere cette valeur d'abord dans le conteneur de service s'il existe 
// sinon dans le depot de configuration
context.get('app.debug')

// Verifie si cette valeur existe d'abord dans le conteneur de service 
// sinon dans le depot de configuration
context.has('app.debug')
```