---
title: Redirection et Alias
---

Les redirections et les alias offrent plus de flexibilite a nos routes.

## Redirection

Pour definir une route qui redirige vers une autre on utilise l'option `redirect` lors de la definition de des routes.

Dison qu'on souhaite rediriger toutes les requetes entrant vers la route `/people` vers la route `/users`:

```js
[
  {
    ...
    path: '/users'
    ...
  },
  {
    ...
    path: '/people',
    redirect: '/users'
    ...
  }
]
```

Par defaut le router fait une redirection temporaire avec le code status `302` 
pour changer le code status on peut passer un object literal comme valeur a l'option `redirect`

```js
{
  ...
  path: '/people',
  redirect: { 301: '/users' }
  ...
}
```

Ca pourrait etre une fonction aussi qui retourne soit une chaine de caractere ou l'objet literal.

```js
{
  ...
  path: '/people',
  redirect: () => ({ 301: '/users' })
  ...
}
```


## Alias

Les alias permettent de definir des chemins alternatifs pour acceder a la meme ressource. 
L'option `alias` peut etre utilise afin de definir des alias, elle prend comme valeur une chaine de caractere ou un tableau de chaine.

Pour la definition de route suivante

```js
{
  ...
  path: '/users',
  alias: ['people', 'person']
  ...
}
```

Pour la meme et seule route les correspondances seront:
- `/users`
- `/people`
- `/person`

Les alias doivent etre declare de la meme maniere qu'on declare les path 
et si les paths contienent des parametres obligatoire, les alias devraient les avoir et ceci avec les meme noms. 
En un mot les segment statiques sont les seules devrant etre change au niveau des alias.

```js
{
  ...
  path: '/users/:id(\\d+)/articles/:slug?',
  alias: [
    '/people/:id(\\d+)/articles/:slug?',
    '/person/:id(\\d+)/articles/:slug?',
  ]
  ...
}
```

Les correspondances seraient:
- `/users/12/articles/javascript`
- `/people/34/articles/stone.js`
- `/person/56/articles/stone-router`