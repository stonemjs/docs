---
title: Paramètres
---

## Introduction

Parfois, nous avons besoin de définir des segments dynamiques pour les `path` de nos routes, 
afin d'avoir différentes correspondances pour la même route. 
Ces segment dynamiques sont connus sous le nom de **paramètres de route**.

## Route dynamique

Pour définir des paramètres de route, nous utilisons soit la syntaxe des accolades `/users/{id}`, soit celle des deux points `/users/:id`.

Par souci de simplicité, nous utiliserons la syntaxe des deux points `/users/:id` tout au long de la documentation. Il est à noter qu'il n'y a aucun avantage ou inconvénient à utiliser l'une ou l'autre, ou les deux en même temps (ce qui n'est pas recommandé).

Vous vous demandez peut-être pourquoi deux syntaxes différentes?\
La réponse est simple: pour des questions de préférences. Stone Router, étant développeur-friendly, présente plusieurs possibilités et laisse le choix entre les mains des développeurs.

### Path

Pour définir des paramètres de route, il suffit juste d'utiliser les deux points `:`.

```js
{
  ...
  path: '/users/:id/articles/:slug',
  ...
}
```

Les différentes valeurs de `path` pourraient correspondre à :
- `/users/12/articles/javascript`
- `/users/jonh/articles/stone.js`

Le paramètre `id` aura comme valeur respective : `12` et `jonh`, et `slug` comme valeur `javascript` et `stone.js`.

#### Préfixe

On peut aussi définir des préfixes pour nos segments dynamiques.

```js
{
  ...
  path: '/users/user-:id/articles/article-:slug',
  ...
}
```

Les différentes valeurs de `path` pourraient correspondre à :
- `/users/user-12/articles/article-javascript`
- `/users/user-jonh/articles/article-stone.js`

Le paramètre `id` aura comme valeur respective : `12` et `jonh`, et `slug` comme valeur `javascript` et `stone.js`.

#### Préfixe global segment
On peut aussi definir des prefixes globalement pour toutes les routes.

At setup time
```ts
blueprint.set('stone.router.prefix', 'v1')
```

At run time
```ts
router.configure({ prefix: 'v1' })
```

Les différentes valeurs de `path` pourraient correspondre à :
- `/v1/users/user-12/articles/article-javascript`
- `/v1/users/user-jonh/articles/article-stone.js`

Le paramètre `id` aura comme valeur respective : `12` et `jonh`, et `slug` comme valeur `javascript` et `stone.js`.


### Domain

Pour rendre le domaine dynamique, on doit utiliser uniquement des parenthèses `{}` et non des deux points `:`.

```js
{
  ..
  domain: '{subDomain}.example.com',
  ..
}
```

Les différentes valeurs de `domain` pourraient correspondre à :
- `dev.example.com`
- `admin.example.com`

Le paramètre `subDomain` aura comme valeur respective : `dev` et `admin`.

## Segment de route strict

Par défaut, les chemins sont insensibles à la casse et ne prennent pas en compte la présence ou l'absence de la barre oblique finale `/users/`.

Cela signifie que ce chemin : `/ARticeS/javaScript/functions/` correspondra :
- à celui-là : `/articles/javascript/functions`
- et à celui-là : `/ARTICLES/javaScript/functions/`

Pour rendre les chemins des routes stricts afin qu'ils puissent être sensibles à la casse et prendre en compte la présence ou l'absence de la barre oblique finale `/users/`, on passe la propriété `strict` à `true`.

```js
{
  ...
  strict: true,
  ...
}
```

Vous pouvez aussi définir la propriété `strict` à `true` pour toutes les routes.

At setup time
```ts
blueprint.set('stone.router.strict', true)
```

At run time
```ts
router.configure({ strict: true })
```

## Paramètre optionnel

Pour définir des paramètres de route optionnels, on utilise un point d'interrogation `?`.

```js
{
  domain: '{subDomain?}.example.com',
  path: '/users/:id/articles/:slug?',
}
```

Les différentes valeurs de `domain` pourraient correspondre à `dev.example.com` ou `example.com`. Et le paramètre `subDomain` aurait comme valeur `dev` ou `undefined`.

Les différentes valeurs de `path` pourraient correspondre à :
- `/users/12/articles/javascript`
- `/users/12/articles/`
- `/users/12/articles`

Et le paramètre `slug` aurait comme valeur respective `javascript`, `undefined` et `undefined`.

Notes :
- Pour éviter des comportements indésirables, les paramètres optionnels doivent être définis à la fin.

## Paramètre répétable

Les paramètres de route répétables permettent de répéter les segments de routes autant de fois que possible.

Par défaut, les paramètres ne peuvent pas contenir de `/` comme valeur, mais cela est possible grâce aux paramètres répétables.

Les paramètres de route répétables peuvent être [obligatoires](#paramètre-répétable-obligatoire) ou [optionnels](#paramètre-répétable-optionnel).

### Paramètre répétable obligatoire

Pour les paramètres répétables obligatoires, on utilise un plus `+`, ce qui veut dire que la valeur du paramètre devrait se répéter au moins une fois.

```js
{
  domain: '{subDomain+}.example.com',
  path: '/articles/:slug+',
}
```

Les différentes valeurs de `domain` pourraient correspondre à :
- `www.admin.dev.example.com`
- `admin.dev.example.com`
- `dev.example.com`
- Et non `example.com`

Le paramètre `subDomain` aurait comme valeur respective suivant les correspondances antérieures :
- `www.admin.dev`
- `admin.dev`
- `dev`

Les différentes valeurs de `path` pourraient correspondre à :
- `/articles/javascript/functions/arrow-function`
- `/articles/javascript/functions`
- `/articles/javascript`
- Et non `/articles`

Avec comme valeur respective pour le paramètre `slug` :
- `javascript/functions/arrow-function`
- `javascript/functions`
- `javascript`

### Paramètre répétable optionnel

Pour les paramètres répétables optionnels, on utilise une étoile `*`, pour indiquer que la valeur du paramètre pourrait être absente ou répétée plusieurs fois.

```js
{
  domain: '{subDomain*}.example.com',
  path: '/articles/:slug*',
}
```

Les différentes valeurs de `domain` pourraient correspondre à :
- `www.admin.dev.example.com`
- `admin.dev.example.com`
- `dev.example.com`
- `example.com`

Le paramètre `subDomain` aurait comme valeur respective suivant les correspondances antérieures :
- `www.admin.dev`
- `admin.dev`
- `dev`
- `undefined`

Les différentes valeurs de `path` pourraient correspondre à :
- `/articles/javascript/functions/arrow-function`
- `/articles/javascript/functions`
- `/articles/javascript`
- `/articles`

Avec comme valeur respective pour le paramètre `slug` :
- `javascript/functions/arrow-function`
- `javascript/functions`
- `javascript`
- `undefined`

## Valeur par défaut

On peut définir des valeurs par défaut pour les paramètres optionnels. Cette valeur sera affectée au paramètre de la route quand elle n'est pas définie dans la requête.

On utilise l'option `defaults` pour définir les valeurs par défaut.

```js
{
  domain: '{subDomain?}.example.com',
  path: '/users/:id/articles/:slug?',
  defaults: {
    domain: 'dev',
    slug: 'default'
  }
}
```

Pour les correspondances :
- `example.com/users/12/articles`
- `admin.example.com/users/12/articles/javascript`

Les valeurs des paramètres seront
- `{ domain: 'dev', id: 12, slug: 'default' }`
- `{ domain: 'admin', id: 12, slug: 'javascript' }`

Notes :
- Les valeurs par défaut peuvent être définies uniquement pour les paramètres optionnels et n'auront aucun effet sur les paramètres obligatoires.

### Valeurs globales par défaut

Au moment de la configuration du routeur, on peut définir des valeurs par défaut pour tous les paramètres de route.
```ts
blueprint.set('stone.router.defaults', { id: 23 })
```

Pour définir des valeurs par défaut communes à toutes les routes, on utilise les méthodes `configure` depuis le routeur.

```js
router.configure({ defaults: { id: 23 } })
```

## Règles de validation

On peut appliquer des règles de validation à nos paramètres de route de deux manières :
- [Implicite](#règles-implicites)
- [Explicite](#règles-explicites)

### Règles implicites

Les règles implicites sont définies depuis les paramètres des routes.

```js
{
  domain: '{subDomain([a-z]+)}.example.com',
  path: '/users/:id(\\d+)/articles/:slug(.+)?',
  ...
}
```

Notes :
- Les règles sont définies à l'intérieur des parenthèses `([a-z]+)`, `(\\d+)` et `(.+)`
- Les règles doivent être des Regex
- On doit échapper les back-slashes des Regex, donc au lieu de : `\d+` on aura : `\\d+`
- Les règles peuvent être utilisées avec les paramètres optionnels `:slug(.+)?`.

### Règles explicites

Les règles explicites sont définies depuis l'option `rules`.

```js
{
  domain: '{subDomain}.example.com',
  path: '/users/:id/articles/:slug?',
  rules: {
    id: /(\d+)/,
    slug: /(.+)/,
    subDomain: /[a-z]+/
  }
  ...
}
```

Notes :
- Les valeurs sont des Regex mais elles ne sont pas échappées comme pour les Regex string.
- Les règles peuvent être utilisées avec les paramètres optionnels `:slug?`.

### Règles globales

Au moment de la configuration du routeur, on peut définir des règles de validation pour tous les paramètres de route.

```ts
blueprint.set('stone.router.rules', { id: /\d+/ })
```

Pour appliquer des règles communes à toutes les routes, on utilise les méthodes `configure` depuis le routeur.

```js
router.configure({ rules: { id: /\d+/ } })
```

Notes :
- La valeur du paramètre doit être une Regex.