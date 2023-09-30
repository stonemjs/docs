---
title: Liaison du modèle
---

## Introduction

Le plus souvent les valeurs des parametres de route sont utilisées pour aller chercher des modèles dans la base de données. 
Avec la liaison des modeles, Stone Routeur peut aller chercher les modeles à votre place dans la base données et les injecter directement dans les routes. 
En resume au lieu d'injecter l'Id d'un utilisateur le router injectera le modèle utilisateur récupéré depuis la base de données.


## Liaison locale

Elle se fait au niveau des definitions de routes ce qui permet au router de faire la resolution automatique des modeles depuis la base de données.

```js
const User = class {
  resolveRouteBinding (key, value) {
    return this.findOneBy({ [key]: value })
  }
}

const ArticleService = class {
  static resolveRouteBinding (key, value) {
    return this.findOneBy({ [key]: value })
  }
}

const definitions = {
  method: 'GET',
  path: '/users/:id(\\d+)/articles/:slug?',
  bindings: { id: User, slug: ArticleService },
  action: ({ params }) => console.log(params.id, params.slug)
}
```

Les classes `User` et `ArticleService` sont des exemples de modeles et services avec la methode `resolveRouteBinding` qui fait la resolution du modele. 
ensuite on a accès à nos modeles depuis la propriete params(`params.id`, `params.slug`) du `RequestContext` injecté à notre action.

Notes:
- on utilise l'option `bindings` pour lier nos modeles ou services aux valeurs des parametres.
- l'option `bindings` prend un objet literal comme valeur, les clés correspondent aux valeurs des parametres et le modele ou service comme valeur
- la valeur des clés des `bindings` doivent des etre des classes
- la methode `resolveRouteBinding` doit etre present dans le modele ou service et peut etre une methode de classe `statique` ou d'instance
- la logique de recuperation du modele doit etre implementer au niveau de cette meme methode `resolveRouteBinding`
- elle doit retourner le modele ou null quand aucun modele n'est trouvé

### Clé personnalisée

On peut utiliser un `@` afin de distinguer la clé du parametre de celle qu'on veut utiliser pour aller chercher le modele dans la base de données.

```js
const definitions = {
  method: 'GET',
  path: '/users/:user@id(\\d+)/articles/:article@slug?',
  bindings: { id: User, slug: ArticleService },
  action: ({ params }) => console.log(params.user, params.article)
}
```

Dans cet exemple `user@id(\\d+)`, le model sera injecté dans `params.user` 
et `id` sera injecté comme clé de la methode `resolveRouteBinding` afin de faire la resolution du modele.

### Parametre optionel

Pour tous les parametres de route obligatoire, une exception sera lancée quand le modele n'est pas trouvé. 
Par contre la valeur `null` sera retournée pour les parametres optionnels.

Pour ce path `/users/:user@id(\\d+)/articles/:article@slug?` si le dernier segment est vide lors de la correspondance avec la requete, 
alors `params.article` contiendra `null` comme valeur.


## Liaison globale

Pour definir des liaisons globales communes a toutes les routes on utilise les methodes `addBinding` et `setBindings` depuis le router.

```js
router.addBinding('id', User)
router.setBindings({ id: UserService })
```