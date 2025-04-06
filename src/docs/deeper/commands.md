---
title: Commands
---

The Stone CLI is the command line interface for Stone.js that assists developers throughout the development process. 
It automates various tasks, making development more efficient and productive. With Stone CLI, developers can create new Stone.js project, 
export packages configurations, run build, and much more with simple commands.

Additionally, it allows for the creation of custom commands tailored to specific project needs, 
providing flexibility and enhancing workflow. The Stone CLI is an invaluable tool that streamlines development and helps maintain consistency across projects.

## Installation

The Stone CLI is installed by default in all Stone.js projects but it is not installed globally.
Le mieux serait de l'installer globalement si on veut profiter de son plein potentiel

The CLI package is available on the [npm registry](https://www.npmjs.com) and can be installed globally as follows:

::: code-tabs#shell
@tab:active npm

```bash
npm i -g @stone-js/cli
```

@tab yarn

```bash
yarn add -g @stone-js/cli
```

@tab pnpm

```bash
pnpm add -g @stone-js/cli
```
:::

## Built in commands

Une fois installer globallement vous pouvez commencer par lister les built-in commandes disponibles actuellement en utilisant `--help`:

```sh
stone --help
```

Chaque commande comprend également un écran « d'aide » qui affiche et décrit les arguments et options disponibles de la commande. 
Pour afficher un écran d'aide, faites succeder le nom de la commande de `--help`:

```sh
stone export --help
```

La commande `serve` sert a rouler votre application en `dev`:

```sh
stone serve
```

La commande `build` sert a creer un build de production:

```sh
stone build
```

La commande `init` sert a creer une nouvelle application Stone.js, Vous aurez a remplir un questionnaire une fois executée.

```sh
stone init
```

La commande `export` sert a exporter les configuration des packages afin de profiter de la configuration explicite:

```sh
stone export @stone-js/router
```

`typings` sert à faire une validation statique des types du code pour les projet Typescript et `cache` sert à vider la cache durant le processus de developpement.

## Custom commands

Stone.js vous permet d'etendre les fonctionnalités du CLI en ajoutant vos propres commandes, non seulement vous, 
mais les librairies tierce etendent aussi les fonctionnalités du CLI en ajoutant leur propres commandes, 
dans les deux cas on les appelent des custom commands.

Les custom commands constituent une autre applications independante au yeux de Stone.js et ne seront pas inclu dans le build de production, 
car le but des custom command c'est de faciliter le processus de developpement.

Cette structure nous permet de produire un build très leger afin de profiter totalement des fonctionnalités du cloud native, 
surtout des services FAAS ou le concept de CLI n'existe meme pas.

Toutefois pour avoir les custom commands en prod il va falloir dans ce cas deployer le projet au grand complet sur votre serveur de production 
et non le build de production.

### Initialisation

Les custom commands ne sont pas activé par defaut, il va falloir utiliser la commande `init cli` afin de les activer:

```sh
stone init cli
```

Cette commande va venir creer une classe `Application` decorer avec le decorator `StoneCliApp` 
dans le repertoire `commands` a la racine de votre projet, cette classe joue le meme role que celle la `app/Application`, 
c'est a dire il constitue le main handler de votre application CLI.

```js
import { StoneCliApp } from '@stone-js/cli/decorators'

@StoneCliApp()
export class Application {}
```

Meme etant deux applications independantes les fonctionnalités de votre application CLI a accès à celles de votre application 
et partage le meme service container, ce qui vous permet bien sur d'appeler et d'utiliser vos fonctionnalités en ligne de commande. 
Il est a noter que l'inverse n'est pas vrai.

En conclusion toutes les fonctionnalités qui ne devraient pas aller en prod, donc qui n'ajoute aucune valeur à l'utilisateur, 
qui sont juste des utilitaire, utilisé uniquement a des fins de developpement doivent etre implementé au niveau de l'application CLI.

### Configuration

Vous pouvez profiter des APIs implicite et explictes afin de configurer votre application CLI.

#### Implicit

Vous pouvez enregistrer des providers et des middleware depuis les options du decorateur:

```js
@StoneCliApp({
  providers: [],
  middleware: []
})
export class Application {}
```

Vous pouvez aussi activer les fonctionnalités CLI d'une librairie tierce en enregistrant leur service provider depuis le main handler.
Voici un exemple de comment activer les fonctionnalités CLI du router:

```js
import { StoneCliApp } from '@stone-js/cli/decorators'
import { RoutingCliServiceProvider } from '@stone-js/router/decorators'

@StoneCliApp({
  providers: [RoutingCliServiceProvider]
})
export class Application {}
```

#### Explicit

Pour profiter des configurations explicites on peut utiliser la commande `export` avec le flag `--cli` sur n'importe quel package, 
si la configuration existe, elle sera exporté dans le repertoire `commands/config`.

Voici comment exporter les configurations de votre application CLI:

```sh
stone export @stone-js/cli --cli
```

Cette commande va venir exporter les configurations dans `commands/config/AppConfig.mjs` ou `commands/config/AppConfig.ts` dans le cas d'une application Typescript, 
que vous pouvez personnaliser a volonté, d'ailleurs toutes les options sont bien commentées.

Pour les librairies tierces veuillez vous referer leur documentation respectives afin de savoir comment activer leurs fonctionnalités CLI.

### Create command

Pour creer une nouvelle commande on utilise la commande `make command <command-name>`:

```sh
stone make command UserCommand
```

Cette commande va venir creer votre fichier command dans le repertoire `commands/UserCommand.mjs` 
ou `commands/UserCommand.ts` dans le cas d'une application TypeScript.

Vous pouvez aussi organiser vos commandes par repertoire:

```sh
stone make command user/UserCommand
```

Cette fois ci votre fichier command sera ajouter dans le repertoire `commands/user/UserCommand.mjs` 
ou `commands/user/UserCommand.ts` dans le cas d'une application TypeScript.

Une commande dans stone.js est represente par une classe ES6 qui etend la classe `AbstractCommand`, decorer avec le decorator `@Command()` 
et dont la methode `handle` est obligatoire afin d'intercepter les evenement entrants quand la commande sera executer.

```js
import { AbstractCommand } from '@stone-js/cli'
import { Command } from '@stone-js/cli/decorators'

@Command()
export class UserCommand extends AbstractCommand {
  handle (event) {}
}
```

### Command Signature

Stone.js met a votre disposition une API tres interessante afin de definir la signature de vos commandes, 
à savoir leurs noms, descriptions et les valeur souhaitée en entrées à savoir les arguments ou les options.

La signature des commandes peuvent etre defini via les options du decorator `@Command`.

#### Name

Pour donner un nom à votre commande on utilise l'option `name`:

```js
@Command({
  name: 'user:list'
})
```

Ensuite vous pourrez l'executer depuis la racine de votre projet:

```sh
stone user:list
```

On peut aussi definir des alias pour nos commandes en utilisant l'option `alias`:

```js
@Command({
  name: 'user:list',
  alias: 'ul'
})
```

Ensuite vous pourrez l'executer depuis la racine de votre projet via son alias:

```sh
stone ul
```

#### Description

Pour fournir une description à votre commande vous pouvez utiliser l'options `desc`:

```js
@Command({
  name: 'user:list',
  desc: 'List application users'
})
```

On peut utiliser le flag `--help` pour afficher les details d'une commande y compris sa description:

```sh
stone user:list --help
```

#### Arguments

Pour definir des valeurs obligatoires souhaités pour les arguments on utilise 
l'option `args` avec le nom de l'argument enveloppé dans `<name>`:

```js
@Command({
  name: 'user:list',
  alias: 'ul',
  args: '<email>',
})
```

A ce moment la on pourra passer une valeur à notre argument obligatoire:

```sh
stone user:list jonh.doe@domain.com
```

On peut aussi rendre les arguments optionels, pour se faire on enveloppe le nom de l'argument dans `[name]`:

```js
@Command({
  name: 'user:list',
  alias: 'ul',
  args: '<email> [status]',
})
```

Dans cet exemple `email` sera obligatoire et `status` optionnel. 
La commande tombera en erreur et imprimera la signature de la commande quand un argument obligatoire n'est pas fournit.

Voici un simple exemple d'utilisation:

```sh
stone user:list jonh.doe@domain.com active
```

#### Options

Pour definir des valeurs souhaités pour les options on utilise 
l'option `options` qui prend comme valeur soit un objet literal avec le nom de l'option comme clé 
et les parametres de l'options comme valeur:

```js
@Command({
  name: 'user:list',
  alias: 'ul',
  options: {
    admin: {}
  }
})
```

Les options contairement aux argument sont prefixé de `--`, en voici un simple exemple d'utilisation:

```sh
stone user:list --admin
```

On peut profiter des parametres des options afin de mieux les definir, à savoir leur type, leur alias, leur description et leur valeur par defaut:

```js
@Command({
  options: {
    admin: {
      alias: 'ad',
      default: false,
      describe: 'List only admin',
      type: 'boolean'
    }
  }
})
```

Stone.js utilise Yargs en arriere plan, veuillez vous referer à sa 
[documentation](https://yargs.js.org/docs/#api-reference-optionskey-opt) pour plus de parametre pour la definition des options.

### Command I/O

Une fois vos commandes definis, vous allez devoir vouloir acceder aux `arguments` et `options` durant l'execution de la commande, 
mais aussi afficher des messages à l'utilisateur, pour ce faire Stone.js met à votre disposition une API tres interessante qui vous 
permet de bien gerer les flux des entrées et sorties de votre application.

#### Retrieving Input

Losrque votre commande s'execute, vous devrez probablement accéder aux valeurs des `arguments` et des `options` acceptées par votre commande. 
Pour ce faire, vous pouvez utiliser le méthode `get` de votre objet d'`event`. Si un `argument` ou une `option` n'existe pas, `null` sera renvoyé:

```js
handle (event) {
  const email = event.get('email') // Your arg
  const status = event.get('status') // Your arg
  const isAdmin = event.get('admin') // Your options
}
```

La methode `get` prend un second argument en parametre qui est la valeur a renvoyé si un `argument` ou une option n'existe pas:

```js
handle (event) {
  const status = event.get('status', 'disabled') // Your arg
  const isAdmin = event.get('admin', false) // Your options
}
```

#### Prompting for Input

Vous pouriez aussi demander à l'utilisateur de fournir des entrées durant l'execution de votre commande 
en utilisant les differentes methodes que Stone met à votre disposition.

::: important
L'API des entrées de Stone.js est asynchrone.
:::

##### Ask

Vous pouvez utiliser la methode `ask` afin de poser une question à l'utilisateur, qui fera sa saisi, 
ensuite la donnée saisie sera retourner à votre commande:

```js
async handle (event) {
  const email = await this.ask('Provide your email?')
}
```

La methode `ask` prend un second argument en parametre qui est la valeur a renvoyé si aucune entrée utilisateur n'est fournie:

```js
async handle (event) {
  const email = await this.ask('Provide your email?', 'jonh.doe@domain.com')
}
```

##### AskNumber

La methode `askNumber` fait la meme chose que `ask` à l'exception que la donnée saisie en entrée doit etre de type `number`:

```js
const salary = await this.askNumber('Provide your salary?')
```

##### Secret

La methode `secret` fait la meme chose que `ask` à l'exception que la donnée saisie en entrée sera cacher durant la saison par l'utilisateur, 
utile pour demander des données sensibles à l'utilisateur:

```js
const password = await this.secret('Provide your password?')
```

##### Confirm

Pour avoir la confirmation de l'utilisateur on peut utiliser la methode `confirm` qui par defaut retourne `false`:

```js
const agreements = await this.confirm('Do accept the terms and conditions?')
```

Ce que vous pouvez aussi personnalisé en passant `true` via le second argument:

```js
const agreements = await this.confirm('Do accept the terms and conditions?', false)
```

##### Choice

Pour proposer un ensemble de choix prédéfinis à l'utilisateur on utilise la méthode `choice`. 
Vous pouvez définir l'index du tableau de la valeur par défaut à renvoyer si aucune option n'est choisie en passant l'index comme troisième argument à la méthode :

```js
const color = await this.secret('Choose a color?', ['Red', 'Green'], 1)
```

Par defaut l'utilisateur a doit a un seul choix, pour lui permettre de faire des choix multiple on passe true au quatrieme argument 
de la methode:

```js
const color = await this.secret('Choose some colors?', ['Red', 'Green'], 1, true)
```

##### Editor

Pour permettre à l'utilisateur de fournir une large quantite de données en entré on peut utiliser la methode `editor`:

```js
const biography = await this.editor('Provide your biography?')
```

Elle prend aussi un second argument en parametre qui est la valeur a renvoyé si aucune entrée utilisateur n'est fournie:

```js
const biography = await this.editor('Provide your biography?', 'I am Jonh Doe')
```

#### Writing Output

Pour afficher la sortie dans la console, vous pouvez utiliser les méthodes : `info`, `show`, `breakLine`, `error`, `warn` et `succeed`. 
Ces méthodes appliquent automatiquement les couleurs ANSI appropriées à leurs objectifs respectifs.

On utilise la methode `info` pour transmettre une informations générales à l'utilisateur, 
elle affiche généralement le texte en blue dans la console.

```js
handle (event) {
  this.info('You need to change your name.')
}
```

Pour afficher un message d'erreur, utilisez la méthode `error`. Le texte du message d'erreur est généralement affiché en rouge:

```js
this.info('An error has occured!')
```

Pour afficher un message de succès, utilisez la méthode `succeed`. Le texte du message de succès est généralement affiché en vert:

```js
this.succeed('Operation succeed!')
```

Vous pouvez utiliser la méthode `breakLine` pour faire un retour chariot et afficher une ligne vide :

```js
this.breakLine()
```

##### Table

La méthode `table` permet de formatter plusieurs lignes et colonnes de données. 
Il prend un argument obligatoire, qui doit être un tableau ou un objet, 
et un argument optionel qui doit etre un tableau contenant les noms des colonnes à inclure dans la sortie.

```js
const data = [
  { name: 'Jonh Doe', email: 'jonh.doe@domain.com' },
  { name: 'Jane Doe', email: 'jane.doe@domain.com' }
]

this.table(data, ['name', 'email'])
```

##### Spiner

Vous pouvez utiliser la méthode `spin` pour avoir un jolie spinner, utile pour les commandes qui prennent un peu plus de temps a s'executer:

```js
const spinner = this.spin()
```

Il prend aussi un texte en parametre a afficher avec le spinner:

```js
const spinner = this.spin('Loading...')
```

Pour arreter le spinner on utilise la methode `stop` depuis l'instance retourné par la methode `spin`:

```js
spinner.stop()
```


#### Progress bar

Pour les tâches longues, l'affichage d'une barre de progression peut être utile pour informer les utilisateurs de l'état d'avancement de la tâche. 
La méthode `progresBar` nous retourne un objet qui permet d'afficher une barre de progression qui se met à jour 
à chaque itération sur une valeur itérable spécifiée en appelant la methode `tick`, il prend en parametre un token et un objet d'options:

```js
const progress = this.progresBar(':bar', { total: 10 })

const timer = setInterval(() => {
  progress.tick()
  progress.complete && clearInterval(timer)
}, 100)
```

Stone.js utilise la fameuse librairie [`Progress`](https://www.npmjs.com/package/progress) veuillez vous referez a sa documentation pour plus d'informations.

#### Calling Commands From Other Commands

Pour executer une commande depuis une autre on peut utiliser la methode `call` qui prend en parametre le nom de la commande 
et un tableau des arguments et options de la commande:

```js
handle (event) {
  this.call('user:list', ['jonh.doe@domain.com', 'active', '--admin'])
}
```

Comme vous pouvez le voir les valeur du tableau doivent suivre le meme ordre que la signature de la commande.