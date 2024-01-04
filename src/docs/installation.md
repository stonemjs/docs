---
title: Installation
---

## Prérequis

Stone.js est un framework Node.js, ce qui necessite des competences en JavaScript et l'installation de Node.js sur votre poste.

Pour etre plus precis:
- vous devriez avoir au moins la dernière version de [Node.js v18](https://nodejs.org/download/release/v18.19.0/)
- mais aussi un gestionnaire de package `npm` ou `yarn`.

Si Node.js est deja installé sur votre poste, vous pouvez verifier sa version avec la commande suivante:

```sh
node -v
```

Si Node.js n'est pas encore installé sur votre poste, veuillez le telecharger depuis le site officiel: [nodejs.org](https://nodejs.org/en/download)

Si pour une raison ou une autre vous avez besoin de plusieurs versions Node.js sur votre poste 
et qu'en plus vous etes a l'aise avec la console, il est mieux d'aller avec [Node Version Manager](https://github.com/nvm-sh/nvm).

## Creating a new project

Pour créer un nouveau projet Stone.js il vous suffit d'utilser notre échafaudage d'application pratique avec 
[npm create](https://docs.npmjs.com/cli/v10/commands/npm-init), 
[yarn create](https://classic.yarnpkg.com/lang/en/docs/cli/create/) ou 
[pnpm create](https://pnpm.io/cli/create), et d'executer les commandes suivantes depuis la console.\
Ces outils vont telecharger le kit de démarrage Stone.js et démarrer le processus d'installation.

::: code-tabs#shell

@tab:active npm

```bash
npm create @stone-js@latest hello-world
```

@tab yarn

```bash
yarn create @stone-js hello-world
```

@tab pnpm

```bash
pnpm create @stone-js hello-world
```

:::

Le processus d'installation vous invite à repondre aux questions suivantes.

### Nom du projet

Le nom du repertoire dans lequel le projet sera créé, le repertoire doit etre vide sinon le processus sera interrompu.
Le nom est obligatoire quand il n'est pas present dans la commande de depart `npm create @stone-js@latest`, et il sera aussi ajouté dans le fichier `package.json`.

On peut aussi executer la commande suivante si on veut créer le projet dans le repertoire courant.

::: code-tabs#shell

@tab:active npm

```bash
npm create @stone-js@latest .
```

@tab yarn

```bash
yarn create @stone-js .
```

@tab pnpm

```bash
pnpm create @stone-js .
```

:::

### Type du projet

Vous pouvez choisir entre l'un des types de projet suivants.
- `Slim` permet de créer de simple et legère application pouvant s'executer partout(Navigateur, worker, serverless, Node.js, etc.).
- `Web` permet de créer des applications web monolithique dont le rendu est fait coté serveur et pouvant se deployer partout(Node.js, serverless). 
A ce niveau, tous les packages essentiels au developpement d'une application fullstack sont installés.
- `API` permet de créer une API HTTP, des microservices pouvant se deployer partout(Node.js, serverless). 
Seuls les simples packages obligatoires à la création d'une API sont installés.
- `CLI` permet de créer des utilitaires en mode console. Stone CLI est un exemple de projet Stone.js de type CLI.
- `WS` permet de créer une application serveur WebSocket pouvant se deployer partout(Node.js, serverless).

### Structure du projet

Vous pouvez choisir entre l'une des structures de projet suivantes.
- `conventional` permet de monter un projet suivant la pholisophie [Convention en guise de configuration](https://en.wikipedia.org/wiki/Convention_over_configuration). 
A ce stade vous serez contraint de suivre à la lettre la structure conventionnelle établie par Stone.js, ce qui laisse la gestion des espaces de nom entre les mains du framework.
- `non-conventional` permet de monter un projet suivant votre propre convention, à vous de choisir comment gérer vos espaces de nom. 
A ce stade Stone.js met à votre disposition des decorateurs afin de decorer vos classes ce qui permet au framework d'identifier 
vos fonctionnalités et de les configurer dans le conteneur de services.

### Nom du package

Vous pouvez choisir entre l'un des gestionnaires de package suivants.
- `npm`
- `yarn`
- `pnpm`

### JavaScript ou TypeScript

Vous pouvez choisir entre l'une des options suivantes.
- `js` permet d'utiliser JavaScript comme langage de developpement.
- `ts` permet d'utiliser le wrapper TypeScript en guise de vanilla JavaScript


### Initialiser Git

### Librairie de test

### Activer JSLint

## Running the Stone.js Server

## Build for production