---
title: Package development
---

Stone.js is a micro-framework, and one of the primary ways to extend its capabilities is through package development. Packages in Stone.js are designed to add various functionalities, enhancing the framework's versatility. 
For instance, the [Router package](../../packages/router/) extends Stone.js by providing powerful routing capabilities, 
allowing developers to manage application routes efficiently. 

Packages can be of two types: standalone and specific to Stone.js. Standalone packages are universal and can be used in any JavaScript project, offering functionalities that are not tied exclusively to Stone.js. On the other hand, Stone.js-specific packages are tailored to work seamlessly within the Stone.js ecosystem, leveraging its unique features and architecture.

This documentation will guide you through the process of creating your own Stone.js package or converting existing standalone packages into Stone.js-compatible packages. Whether you're looking to add new utilities, integrate third-party services, or build custom functionalities, this guide will provide you with the necessary steps and best practices for package development in Stone.js.

## ES Module

Stone.js est un framework JavaScript et TypeScript qui suit la philosophie [Pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c), 
c'est à dire qu'on utilise uniquement ES module dans Stone.js.
Ensuite il faut que tous les modules exposé par le packages soit uniquement du Javascript, 
Meme si vous utiliser TypeScript pour creer votre package, vous devez le transpiler en ESM avant de le publier.
Vous devez aussi inclure des Typings pour vos librairies pour les application TypeScript, 
Meme quand votre librairie est ecrit en Vanilla Javascript, vous pouvez profiter de 
la puissante librairie [JSDoc](https://jsdoc.app) et de TypeScript afin d'ajouter des Typing à vos codes.
Vous pouvez vous inspirer de n'importe quelle librairie core de Stone.js car elles sont tous ecrit en Vanilla JavaScript.

## Package Blueprint

Le package blueprint dans le contexte d'une librairie tierce represente sa fiche technique qui contient toutes 
les informations necessaires sur comment Stone.js doit enregistrer et configurer ses differents composants, 
le blueprint est un fichier obligatoire a toutes les librairies tierces car sans lui, 
Stone.js ne sait quasiment rien au sujet de votre librairie.

Voici ce à quoi ressemble un package blueprint:

```ts
type PackageBlueprint = {
  builder: { // Setup layer config
    middleware: Function[]
  },
  adapters: AdapterBlueprint[], // Integration layer config
  app: { // Initialization layer config
    providers: Function[],
    middleware: {
      event: Function[],
      response: Function[],
      terminate: Function[],
    }
  },
  router: { // Feature layer config
    definitions: Object[],
    middleware: Function[]
  }
}

type AdapterBlueprint = {
  alias: string,
  default: boolean,
  type: Function,
  input: {
    type: Function,
    resolver: Function,
    middleware: Function[]
  },
  output: {
    type: Function,
    resolver: Function,
    middleware: Function[]
  }
}
```

Comme vous pouvez le voir, le blueprint expose les configuration pour toutes les couches du continuum architecture 
et sont classé par namespace:

- `builder` contient les configuration de la couche de configuration et c'est la dedans qu'il faut enregistrer vos middleware d'introspection
- `adapters` contient les configuration de la couche d'integration et c'est la qu'il faut venir enregistrer vos adapters. Si vous voulez 
bonifier un adapters existant avec des middleware il faut juste indiquer l'`alias` de l'adapter existant et vos `middleware` `input` ou `output`, Stone.js 
est assez intelligent pour les fusionner avec ceux de l'adpater existant
- `app` contient les configuration de la couche d'initialisation et c'est la qu'il faut venir enregistrer vos service providers et middleware
- `router` contient les configuration de la couche features et c'est la qu'il faut venir enregistrer vos middleware et definitions de routes. 
Il est important de savoir que le `router` est activé suivant le besoin de l'utilisateur et que dans le cas des nano application, 
le `router` n'est souvent pas present.

Vous pouvez definir votre propre namespace dans le blueprint pourvu qu'il soit unique afin de ne pas ecraser d'autre namespace, 
c'est pourquoi qu'il est conseiller d'utiliser le nom de votre package comme namespace afin de s'assurer de son unicité.

### Exports

Vous devez exposer et votre code et vos typings en utilisant le field [`exports`](https://nodejs.org/api/packages.html#package-entry-points) du `package.json` de Node.js, 
si votre package utilise des dependances core de Stone.js exemple: `@stone-js/core` vous devez les declarer comme `peerDependencies`,
enfin vous devez utiliser `"type": "module"` pour indiquer que votre package expose uniquement que du ESM, 
voici un exemple ce a quoi devrait ressembler votre `package.json`

```json
{
  ...,
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/types/index.d.ts",
      "default": "./dist/index.js"
    }
  },
  "peerDependencies": {
    "@stone-js/cli": "^x.x.x",
    "@stone-js/core": "^x.x.x",
    "@stone-js/http-core": "^x.x.x"
  },
  ...
}
```

## Service Providers

Le service provider constitue l'entrepot des fonctionnalités et c'est par lui qu'on peut ajouter de nouvelles fonctionnalités à Stone.js, 
car c'est lui qui fait le bootstraping des differentes composantes applicative, en identifiant les composants, en les enregistrant dans le service container, 
et en les configurant afin d'etre pret a etre utilisé.

Dans Stone.js un service provider est une classe ES6 avec ces methodes `onInit`, `beforeHandle`, `register`, `boot`, `onTerminate`
qui servent de hooks permettant ainsi aux librarie d'enregistrer et de configurer leurs fonctionnalités au moment opportun. 
Il est conseiller de suffixer tous les services providers de `ServiceProvider`.

En resume une fois vos fonctionnalités sont prete il faut venir l'enregistrer et le configurer dans le service provider afin d'etre pret a etre utilise dans Stone.js.
Veuillez vous referez a la [documentation](../architecture/providers.md) sur les Service provider pour plus d'informations

## Configuration

Stone.js est concu sur la philosophie plug and play, c'est à dire que tous les packages de Stone.js une fois installer doit etre pret à etre utiliser 
et ceci sans le moindre effort coté utilisateur, c'est pour cela que Stone.js met à votre disposition deux APIs de configuration implicite et explicites.

### Implicit API

L'API de configuration implicite est concu sur le paradigme de programmation metadata et consiste a utiliser des decorator afin de mettre des metadata sur vos composants,
qui permet à la couche de configuration de faire l'auto discovery via des middleware, et 
permet ensuite au service provider de les identifier, de les enregistrer dans le service container et de les configurer correctement.

Chaque librairie devrait implementer l'API implicite afin de permettre au consommateurs de cette librairie de profiter de cette fonctionnalité au sein de Stone.js, 
ce qui lui permettra d'enregistrer et de configurer votre librairie en utilisant votre decorator afin de decorer le main handler.
Par exemple pour activer le Router dans n'importe que projet Stone.js on utilise le decorator `@RouterProvider` afin de decorer le main handler, 
ce qui nous permet d'utiliser toutes les fonctionnalités fournit par le Router en un moindre temps.

Veuillez vous referez a la documentation sur la configuration implicite pour plus de details sur comment implementer vos propes decorators.

Une fois vos decorators prets, il va falloir les exposer afin d'etre consommé au sein de Stone.js, 
afin de garder une coherence, tous les decorators doivent etre exposé en definissant un sous path `decorators` comme point d'entré vers vos decorators 
dans le `package.json`. Exemple tous les decorator du router sont exposé via ce sous path `@stone-js/router/decorators`.
Disons que tous vos decorators sont builder et bundle dans ce fichier `dist/decorators.js`, voici un exemple de comment les exporter depuis le sous path `decorators`:

```json
{
  ...,
  "exports": {
    ...
    "./decorators": {
      "types": "./dist/types/decorators.d.ts",
      "default": "./dist/decorators.js"
    }
  },
  ...
}
```

Ce qui permet à quiconque de les consommer facilement via cette importation:

```js
import { MyDecorator } 'my-stonejs-lib/decorators'
```

### Explicit API

L'API de configuration explicite vous permet d'utiliser le CLI afin d'exporter toutes les options de configurations 
utiliser en interne par Stone.js ou par des librairies en vu de les personnaliser selon ses besoins et 
Stone.js utilisera la configuration exporté en guise de celle definie en interne.

Chaque librairie devrait implementer l'API explicite afin de permettre au consommateurs 
de cette librairie de profiter de cette fonctionnalité au sein de Stone.js, 
ce qui lui permettra de personnaliser la configuration selon ses besoins. 
Par exemple après avoir installé le router pour l'activer de maniere explicite dans n'importe quel projet Stone.js, 
on utilise la commande `npm run export @stone-js/router`, qui va exporter les configurations utilisé en interne par le router 
dans le repertoire `config` avec toutes les options du router utile pour personnaliser ce dernier.

Veuillez vous referez a la documentation sur la configuration explicite pour plus de details.

Une fois vos configurations pretes, il va falloir les enregistrer afin qu'il puisse etre exporté par la commande `npm run export`.
Disons que vos configurations explicites se trouvent dans le repertoire `dist/stub/`, voici un exemple de comment l'enregistrer 
dans le fichier `package.json`:


```json
{
  ...
  "stone": {
    "export": {
      "config": {
        "router": {
          "default": "dist/stub/router",
          "typescript": "dist/stub/router-ts"
        }
      }
    }
  }
  ...
}
```

Comme vous pouvez le voir, elles sont enregistrer sous le namespace `stone.export.config` d'ou la clé constitue le nom de votre librairie 
qui doit etre unique au sein de l'ecosysteme de Stone.js et sera utilisé comme nom du fichier qui va etre crée
ensuite deux champs, `default` qui contient votre configuration pour les 
projets vanilla javascript et `typescript` pour les projets `TypeScript`.

## Commands

Stone.js permet aussi librairie de definir des custom commands afin de fournir des fonctionnalités en ligne de commande aux consommateurs.
Il est important de se rappeler que les custom commands constituent une applications independante 
qui ne seront pas inclu dans le build de production, car le but des custom command c'est de faciliter le processus de developpement.

### Defining

La definition des customs commands se fait differement lorsqu'on est dans un package, 
voici les etapes afin de bien definir des customs au sein de votre package:

Il faut que votre classe soit une sous classe de `AbstractCommand`:

```js
export class MyCustomCommand extends AbstractCommand {}
```

Ensuite il faut definir le nom de votre custom commande depuis le getter `metadata`:

```js
export class MyCustomCommand extends AbstractCommand {
  get metadata () {
    return { name: 'my-command' }
  }
}
```

Par la suite il faut utiliser la methode `registerCommand` qui prend en paramètre une intance de [`yargs`](https://yargs.js.org/docs/)
que vous pouvez utiliser afin de definir la signature de votre commande:

```js
registerCommand (builder) {
  builder
    .command({
      command: 'my-command <action>',
      desc: 'My custom lib command',
      builder: (yargs) => {
        return yargs
          .positional('action', {
            type: 'string',
            choices: ['list'],
            desc: 'List my lib items'
          })
      }
    })
}
```

Enfin vous pouvez utiliser la methode `handle` pour traiter la demande de l'utilisateur lorsque votre commande sera executer:

```js
handle (event) {
  this.output.info(event.get('action'))
}
```

Les APIs I/O sont les memes que celles explicité dans la documentation CLI, veuillez vous referez à cette documentation pour plus d'informations.

Il est aussi important de savoir que votre custom command a aussi accès aux different hooks: `onInit`, `beforeHandle` et `onTerminate` 
du cycle de vie d'un event.

```js
beforeHandle () {
  this.output.info('Before handle...')
}
```

### Exposing

Une fois vos commandes definies il faut les exposer afin de permettre leur consommation,
pour ce faire vous devez exposer toutes vos commandes sous le sous path `commands` depuis votre `package.json`:

```json
{
  ...
  "./commands": {
    "types": "./dist/types/commands.d.ts",
    "default": "./dist/commands.js"
  }
  ...
}
```

Ce qui permettra aux consommateurs d'importer uniquement les commandes dont il a besoin au sein de son application.

### Registering

Pour enregistrer une commande d'une librairie tierce dans un contexte de configuration implicite
on utilise l'option `commands` du decorator `@StoneCliApp`:

```js
import { MyCustomCommand } from 'my-package/commands'
import { StoneCliApp } from '@stone-js/cli/decorators'

@StoneCliApp({
  commands: [MyCustomCommand]
})
export class Application {}
```

Dans un contexte de configuration explicite on le fait dans le namespace `app.commands`:

```js
import { MyCustomCommand } from 'my-package/commands'

{
  app: {
    commands: [MyCustomCommand]
  }
}
```

## Best practices

Pour garder une certaines coherence et faciliter le developpement et la collaboration au sein de l'ecosysteme de Stone.js,
il est conseillé d'appliquer les bonnes pratiques suivantes dans le processus de developpement de package Stone.js.

### Package Structure

Il est conseillé de structurer les packages Stone.js de la sorte dans le repertoire `src` à la racine de votre package:

- `ServiceProvider`: Le fichier de votre service provider
- `decorators`: Le repertoire contenant la liste des decorateur pour la configuration implicite
- `config`: Le repertoire contenant les options pour la configuration explicite
- `commands`: Le repertoire contenant tous les composants qui seront utilisé depuis la console

Comme ca quiconque pourra facilement se reperer et porter sa collaboration. Qu'il soit un nouveau package ou 
une conversion d'un package standalone le principe reste le meme.

### Bundler

Il est conseillé d'utiliser un bundler afin d'organiser et de reduire la taille de votre librairie,
par contre il n'est pas conseiller de minifier vos modules.

- Tous vos decorators doivent etre bundlé dans le fichier `decorators.js`
- Toutes vos commandes doivent etre bundlé dans le fichiers `commands.js`
- Toutes configurations doivent etre bundlé dans le fichier `config.js`
- Et tous les autres modules de votre librairies doivent etre bundler dans `index.js`

Et les modules exporté dans chacun d'eux doivent etre accessible via un sous path specifique.

Voici un exemple complet:

```json
{
  ...
  "exports": {
    ".": {
      "types": "./dist/types/index.d.ts",
      "default": "./dist/index.js"
    },
    "./config": {
      "types": "./dist/types/config.d.ts",
      "default": "./dist/config.js"
    },
    "./commands": {
      "types": "./dist/types/commands.d.ts",
      "default": "./dist/commands.js"
    },
    "./decorators": {
      "types": "./dist/types/decorators.d.ts",
      "default": "./dist/decorators.js"
    }
  }
  ...
}
```

Suivant cette configuration les modules peuvent etre acceder comme suit:

- `import { MyProvider } from 'my-package'`
- `import { MyConfig } from 'my-package/config'`
- `import { MyCommand } from 'my-package/commands'`
- `import { MyDecorator } from 'my-package/decorators'`

Ce qui permettra de garder une seule et meme nomenclature, donc une certaines coherence au niveau de l'ecosysteme de Stone.js.