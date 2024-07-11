---
title: Configurations
---

In Stone.js, configuration begins with registering various application components and defining their specific settings. Using adaptive configuration, you can declaratively define and register your components as needed. If you need more control, you can also define your configurations imperatively, ensuring efficient structuring and organization of your application.

## Overview

The configuration layer performs introspection on components to classify and organize them. This process relies on metadata embedded in the components via decorators. Essentially, we are leveraging metaprogramming: providing decorators that users apply to their classes as needed, which then attach metadata to these classes. During runtime, the framework introspects the components to identify the metadata, 
producing a well-organized object known as a Stone Blueprint, which the framework can use to register and utilize various application components effectively.

### Metadata

Metadata is crucial for organizing and managing the components within a Stone.js application. Decorators add metadata to classes, which the configuration layer reads and processes. This approach ensures that the framework has a comprehensive understanding of all necessary components, including services, route definitions, and user-provided configuration elements such as database information.

### Stone Blueprint

The final output of this introspection process is a structured configuration object, known as the `StoneBlueprint`. This object not only includes the information required to construct the application such as services to register in the service container and route definitions but also configuration elements provided by the user, such as database settings and other environment-specific details.

### Terminology

- **Metadata**: Information added to classes via decorators, used for organizing and managing application components.
- **Introspection**: The process of examining components at runtime to identify and process metadata.
- **Stone Blueprint**: The structured object resulting from introspection, containing all the information needed to build and run the application.

## Declarative

Les configurations declaratives permettent d'ajouter des metadata a vos composant applicatifs via les decorators 
en vue de les enregistrer et configurer au moment du runtime.
Voici le flow de la configuration declarative dans l'ecosysteme de Stone.js, qu'il soit votre configuration declarative 
ou celles definies par Stone.js ou celle des librairies tierces le principe reste le meme.

### Defining

Pour commencer il faut creer un decorator afin d'ajouter les meta informations soit au niveau d'une classe ou au niveau des propriete ou des methodes.

Stone.js utilise la derniere revision de [`proposal-decorators`](https://github.com/tc39/proposal-decorators) 
et de [`proposal-decorator-metadata`](https://github.com/tc39/proposal-decorator-metadata) à savoir la version `2023-11`, 
voici la signature d'un decorator:

```ts
type Decorator = (value: Input, context: {
  kind: string;
  name: string | symbol;
  access: {
    get?(): unknown;
    set?(value: unknown): void;
  };
  isPrivate?: boolean;
  isStatic?: boolean;
  addInitializer?(initializer: () => void): void;
+ metadata?: Record<string | number | symbol, unknown>;
}) => Output | void;
```

Comme vous pouvez le voir un decorateur c'est juste une fonction avec une valeur et un contexte comme parametre.

Vous pouvez definir vos decorators directement via cette fonction, à ce moment ce sera un decorateur sans parametre:

```js
export const MyDecorator = (value, context) => {}
```

Et l'utiliser comme suit:

```js
@MyDecorator
export class MyClass {}
```

Ou du moins creer un decorator factory ce qui vous permet des passer des parametres a votre decorator: 

```js
export const MyDecorator = (options) => {
  return (value, context) => {
    // Acceder a options ici
  }
}
```

Et l'utiliser comme suit:

```js
@MyDecorator({ name: 'Stone' })
export class MyClass {}
```

Etant donné que la majeure partie du temps qu'on va juste ajouter des metadata a nos classes 
en passant par la propriete `metadata` de l'objet `context`, 
Stone.js met à votre disposition la classe utilitaire `Metadata` afin de gerer les metadata au sein de votre decorator:

```js
import { Metadata } from '@stone-js/core/decorators'

Metadata.set(context, key, value)
Metadata.has(Class, key)
Metadata.get(Class, key, default)
Metadata.all(Class, default)
Metadata.remove(Class, key)

Metadata.class(key, value)
Metadata.field(key, value)
Metadata.method(key, value)
```

Pour les parametres des fonctions:

- `context` represente le contexte du decorator comme mentionné ci-haut
- `Class` represent la classe dans laquelle la metadata a ete definie
- `Key` represente la clé qui sera utilisé afin d'ajouter et de recuperer votre metadata
- `value` consitue la metadata 
- `default` dans le cas du `get` et `all` represente une valeur par defaut a retourner si le metadata n'existe pas.

La methode `set` doit etre utilise a l'interieur des decorators:

```js
import { Metadata } from '@stone-js/core/decorator'

export const MY_DECORATOR_KEY = Symbol('mydecorator')

export const MyDecorator = (options) => {
  return (value, context) => Metadata.set(context, MY_DECORATOR_KEY, options)
}
```

Les methodes `has`, `get`, `all` et `remove` sont utiliser pour inspecter, recuperer et supprimer les metadata applique a une classe:

```js
import { Metadata } from '@stone-js/core/decorator'
import  { MyDecorator, MY_DECORATOR_KEY } from 'my-decorator'

@MyDecorator({ name: 'Stone' })
export class MyClass {}

Metadata.has(MyClass, MY_DECORATOR_KEY)
Metadata.get(MyClass, MY_DECORATOR_KEY)
Metadata.all(MyClass)
Metadata.remove(MyClass, MY_DECORATOR_KEY)
```

Efin les methodes `class`, `field` et `method` sont des methodes factory qui retournent un decorateur avec les informations fournies 
et fait aussi la validation en lancant une exception lorsque le decorateur est appliquer la ou il ne fallait pas.
Exemple, un decorateur defini avec `class` lancera une exception lorsqu'il est appliqué sur une methode ou propriete.

```js
import { Metadata } from '@stone-js/core/decorator'

export const MY_DECORATOR_KEY = Symbol('mydecorator')

export const MyDecorator = (options) => Metadata.class(MY_DECORATOR_KEY, options)
```

En voici un simple exemple d'utilisation:

```js
import { Metadata } from '@stone-js/core/decorator'
import  { MyDecorator, MY_DECORATOR_KEY } from 'my-decorator'

@MyDecorator({ name: 'Stone' })
export class MyClass {
  @MyDecorator({ name: 'Stone' }) // Lance un exception
  getName () {}
}

Metadata.get(MyClass, MY_DECORATOR_KEY)
```

Comme vous pouvez le voir la cle `MY_DECORATOR_KEY` est utiliser afin d'ajouter et de recurer votre metadata depuis la classe, 
il doit etre unique afin de ne pas interferer avec les autre cles presentes dans la classe, c'est pour cela qu'il est conseille 
d'utiliser un `Symbol` comme clé.

Pour finir, vous pouvez organiser vos decorator dans n'importe quel repertoire mais il est mieux de les garder dans le repertoire `decorators`.

### Introspecting

Une fois votre decorator defini il faut l'instrospecter afin de receuillir vos metadata et les composants sur lesquels ils ont ete appliqués.
L'instrospection se fait au niveau de la couche de configuration et consiste a:

- Creer un middleware de configuration, qui va filtrer tous les composants afin d'indentifier le ou les composants sur lequel votre decorator a ete appliqué
- ensuite recuperer les metadata et composants depuis le middleware
- Enfin l'injecter dans le Stone Blueprint dans le namespace apprioprié afin de les recuperer plus tard.

Pour creer un middleware de configuration au sein d'une application Stone.js on utilise le decorator `ConfigMiddleware`, en voici un exemple:

```js
import { Metadata } from '@stone-js/core/decorator'
import  { MyDecorator, MY_DECORATOR_KEY } from 'my-decorator'
import { ConfigMiddleware } from '@stone-js/core/decorators'

@ConfigMiddleware
export class MyConfigMiddleware {
  handle (context, next) {
    context.modules
      .filter((module) => Metadata.has(module, MY_DECORATOR_KEY))
      .forEach((module) => {
        context.blueprint.add('app.myConfigs', {
          module,
          metadata: Metadata.get(module, MY_DECORATOR_KEY, {})
        })
      })

    return next(context)
  }
}
```

Le contexte est une instance de `ConfigContext` avec pour proprietes `modules` qui est un tableau qui contient tous vos modules(classes, functions, etc..), 
et `blueprint` qui est une instance de [`Config`](../../packages/config/) dans lequel on organise nos composants et nos elements de configuration.

Veuillez vous referez a la section sur les [`middleware`](../essentials/middleware.md) pour avoir plus d'informations sur les middlewares 
de configuration ainsi que le `ConfigContext`.

### Accessing

Une fois vos composants introspecter vous pouvez acceder à vos elements à svoir composant ou configuration partout dans votre application Stone.js 
en utilisant l'objet `config` qui est une instance de [`Config`](../../packages/config/) qui est disponible depuis votre container de service.

```js
@Service()
export class FooService {
  constructor ({ config }) {
    this.config = config
  }

  barMethod () {
    console.log(this.config.get('app.myConfigs'))
  }
}
```

Vous pouvez aussi y acceder depuis un service provider afin de faire des configurations depuis les differents hooks: 
`beforeHandle`, `register`, `boot` et `onTerminate` du cycle de vie de Stone.js.
Utile pour les librairies tierce afin d'intercepter les composants ou configuration definies via des decorator 
et l'ayant besoin au moment du register ou du boot.

```js
@ServiceProvider()
export class MyServiceProvider {
  constructor (container) {
    this.container = container
  }

  register () {
    this
      .container
      .config
      .get('app.myConfigs', [])
      .forEach(({ module, metadata }) => {
        this.container.singleton(() => new module(metadata))
      })
  }
}
```

## Imperative

La configuration imperative vous donne plus de flexibilite vis a vis de la configuration de vos composant applicatif. 
elle peut etre utilisé en complement a la configuration declarative afin d'avoir plus de controle sur les parametres de configuration.
elle permet de definir ses propres configurations mais aussi de personnaliser les built-in configurations et celle des librairies tierces.

### Defining

Pour definir une configuration imperative on utilise le decorator `@Configuration` afin de decorer notre classe de configuration, 
ensuite on utilise des accesseurs comme root namespace afin de definir nos options configurations:

```js
@Configuration
export class AppConfig {
  get app () {
    return {
      name: 'Stone'
    }
  }
}
```

Des fois on a besoin de definir des configurations pour nos libraries tierces, 
pour ce faire il suffit d'utiliser le namespace de la librarie et de definir la configuration.
Exemple pour enregistrer des middleware globaux à toutes nos routes on utilise le namespace `router`:

```js
@Configuration
export class AppConfig {
  get router () {
    return {
      middleware: [MyMiddleware]
    }
  }
}
```

Puisque vous utiliser des decorators pour definir vos configurations, libre à vous de les organiser par classes de configuration 
et de les mettre dans les repertoires de vos choix, mais il est conseillé de les enregistrer dans le repertoir `app/config/`.

Veuillez vous referer a la documentation de chaque librairie afin de savoir leurs namespace ainsi que leurs options de configuration.

### Exporting

Vous pouvez aussi exporter les built-in blueprints et ceux des librairies tierces qui en offrent la possibilité.
L'exportation des blueprints est l'un des principaux elements de la configuration adaptative 
qui vous permet de personnalisé Stone.js pour repondre à des besoins specifiques 
en utilisant uniquement les composant necessaire pour le bon foncionnement de votre application.

Pour exporter un blueprint on utilise le script `npm run export <package-name>` 
qui va venir l'exporter dans le repertoire `app/config` que vous pouvez personnalisé pour repondre à vos besoins.

Par exemple on pourrait exporter le blueprint du router comme suit `npm run export @stone-js/router`, 
qui va venir le placer dans `app/config/RouterConfig.mjs` ou `app/config/RouterConfig.ts` dans la cas d'une application TypeScript:

```js
@Configuration
export class RouterConfig {
  get builder () {
    return  {
      middleware: [RouterConfigMiddleware, ControllerConfigMiddleware]
    }
  }

  get app () {
    return  {
      providers: [RoutingServiceProvider]
    }
  }

  get router () {
    return {
      ...
      middleware: []
      ...
    }
  }
}
```

Une fois un blueprint exporté c'est lui qui sera utilisé par Stone.js afin de construire votre application, 
assurez de savoir ce que vous faites avant d'exporter et de personnaliser un built-in ou third party blueprint.

Il est conseiller de definir des options configurations pour les librairies tierces depuis votre objet de configuration en utilisant leur 
namespace au lieu d'exporter leur blueprint au grand complet.