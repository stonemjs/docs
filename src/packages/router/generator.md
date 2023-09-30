---
title: Generateur
---

Il se pourrait que vous ayez besoin d'url d'une des routes que vous aviez definie, 
c'est la qu'intervient le generateur d'url, il te permet de gerer des urls pour vos routes.

Les routes definies doivent avoir l'option name car c'est grace a elle qu'on va pouvoir creer generer notre URL

Prenons par exemple cette definition de route:

```js
{
  name: 'users',
  path: '/users'
}
```

Pour generer une url on utilise la methode `generate` depuis le `router`

```js
router.generate('users')
```

Ce qui donne ca `/users` comme resultat.

### Ajouter des valeurs aux parametres

Jusqu'ici on a generer de simple url, prenons la definition ci dessous qui est beaucoup plus complexe.

```js
{
  name: 'users',
  path: '/users/:id(\\d+)/artticles/:slug?'
}
```

#### Indiquer tous les champs

Pour generer une url depuis cette definition il faut passer une valeur aux parametres, 
pour ce faire la methode `generate` prend un objet literal comme second parametre.

```js
router.generate('users', { id: 12, slug: 'javascript' })
```

La valeur de l'url generer correspondera a `/users/12/artticles/javascript`.

Si aucune valeur n'est specifier pour les segements obligatoire ou des valeurs non conformes aux regex une exeception sera lancée.

#### Ignorer les champs optionels

Il suffit de ne pas indiquer de valeur pour les noms des parametres et l'url sera generer sans lance d'exception.

```js
router.generate('users', { id: 12 })
```

La valeur de l'url generer correspondera a `/users/12/artticles`.

#### Ajouter des parametres de requete

Des fois on aimerait pouvoir ajouter des parametres de requete a nos urls, 
pour ce faire on les definis au meme niveau que les paramtres, 
Stone Router est assez intelligent pour faire la distinction en les parametres de la route et de la requete, 
et va donc les ajouter comme paramtre de la requete.

```js
router.generate('users', { id: 12, sort: '-created', limit: 50 })
```

La valeur de l'url generer correspondera a `/users/12/artticles?sort=-created&limit=50`.

### Generer des routes avec des domaines

Par defaut le domain n'est pas inclu dans une url generer, pour l'include il faut d'abord que le domaine soit defini
lors de la definition des route via l'option `domain`.

```js
{
  name: 'users',
  domain: 'example.com',
  path: '/users/:id(\\d+)/artticles/:slug?'
}
```

A ce moment la, le troisieme parametre de la methode `generate` sert a inclure le domaine.

```js
router.generate('users', { id: 12, sort: '-created', limit: 50 }, true)
```

La valeur de l'url generer correspondera a `http://example.com/users/12/artticles?sort=-created&limit=50`.

#### Inclure le protocol

Par defaut l'url est generer avec le protocol `http`, lorsque l'option `protocol` est presente lors de la definition de route, 
l'url est generer avec ce protocol la.

```js
{
  name: 'users',
  protocol: 'http',
  domain: 'example.com',
  path: '/users/:id(\\d+)/artticles/:slug?'
}
```

```js
router.generate('users', { id: 12, sort: '-created', limit: 50 })
```

La valeur de l'url generer correspondera a `http://example.com/users/12/artticles?sort=-created&limit=50`.

Notes:
- Le protocol est present uniquement quand le domaine est defini

Pour indiquer un protcol specfique et ceci meme quand il a ete defini lors de la definition des routes,
alors le dernier parametre de la methode `generate` sert a ca.

```js
{
  name: 'users',
  domain: 'example.com',
  path: '/users/:id(\\d+)/artticles/:slug?'
}
```

```js
router.generate('users', { id: 12, sort: '-created', limit: 50 }, true, 'https')
```

La valeur de l'url generer correspondera a `https://example.com/users/12/artticles?sort=-created&limit=50`.