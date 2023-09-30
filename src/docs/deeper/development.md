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
  - Defining (Options and decorator)
  - Namespace
  - Exporting
## Commands
### Service Provider
### Config
  - Implicit and explicit API

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