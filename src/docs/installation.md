---
title: Installation
---

Stone.js is a Node.js framework requiring JavaScript or TypeScript skills and Node.js installation.

Ensure you have:
- At least the latest version of [Node.js v18](https://nodejs.org/download/release/v18.19.0/)
- A package manager like `npm`, `yarn` or `pnpm`

Verify Node.js installation:

```sh
node -v
```

If not installed, download from [nodejs.org](https://nodejs.org/en/download). For multiple Node.js versions, consider [Node Version Manager](https://github.com/nvm-sh/nvm).

## Creating a New Project

Create a new Stone.js project using:
- [npm create](https://docs.npmjs.com/cli/v10/commands/npm-init)
- [yarn create](https://classic.yarnpkg.com/lang/en/docs/cli/create/)
- [pnpm create](https://pnpm.io/cli/create)

Execute from the console:

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

You can create a Stone.js project with default configurations by skipping the initialization steps:

::: code-tabs#shell

@tab:active npm

```bash
npm create @stone-js@latest hello-world -- -y
```

@tab yarn

```bash
yarn create @stone-js hello-world -y
```

@tab pnpm

```bash
pnpm create @stone-js hello-world -y
```
:::

## Project Initialization Steps

After executing the command to create a new Stone.js project, you'll be guided through a questionnaire. 
This questionnaire helps tailor the project setup to your specific needs by asking about various configuration options.

### Project Name

Specify the directory name (must be empty).

Alternatively, run the command in the current directory:

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

### Template Selection

Choose a starter template:
- `Basic`: For simple, lightweight applications.
- `API`: For creating deployable HTTP APIs, nano and microservices.

### Typings
Choose between:
- `None (Vanilla)` for JavaScript.
- `TypeScript` for TypeScript support.

### Package Manager
Select:
- `npm`
- `yarn`
- `pnpm`

### Modules
Add needed modules during project creation or later.

### Formatting Library
Choose:
- `Eslint (Standard)` for [Standard](https://www.npmjs.com/package/standard).
- `Prettier` for [Prettier](https://prettier.io/).

### Testing Framework
Choose:
- `mocha` for [mocha](https://mochajs.org/).
- `jest` for [jest](https://jestjs.io/).

### Initialize Git
Optionally initialize a Git repository.

## Running Your App

After completing the questionnaire, you can start in development mode:

::: code-tabs#shell

@tab:active npm
```bash
npm run serve
```

@tab yarn

```bash
yarn serve
```

@tab pnpm

```bash
pnpm serve
```
:::

## Build for Production

Stone.js needs to be compiled and bundled due to its use of advanced features not yet supported by all JavaScript engines. Bundling eliminates the need for `node_modules`, creating a single deployable file. During the bundling process, tree shaking ensures only used modules are included, resulting in a lightweight build. The build output is `dist/stone.mjs`, ready for deployment anywhere.

Build your project:

::: code-tabs#shell

@tab:active npm
```bash
npm run build
```

@tab yarn

```bash
yarn build
```

@tab pnpm

```bash
pnpm build
```
:::

## Launch the Production Build

Run your build as a standalone Node.js application, with no `node_modules` or `package.json`:

```sh
node dist/stone.mjs
```

Or deploy it on any serverless platform using an appropriate adapter, which we will discuss later.