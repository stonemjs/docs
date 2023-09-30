---
title: Meta proprietes
---

Les metas servent à definir des options personnalisés lors de la definition des routes. 
En un mot toutes options non standard presentes dans une definition de routes est appelé `mata`.

Ces options permettent d'etendre les fonctionnalités du routeur, 
prenons par exemple l'option `validators` est une meta definition par la librairie Stone Validator 
qui permet de valider les données des utilisateurs.

Les possibilité sont infinies lorsque les metas et les middlewares sont utilisés ensemble.

## Definition

Les metas peuvent etre definis au meme niveau que les options de definition standard.

```js
const usernameValidator = (body) => {
  if (!body.username) {
    throw new HttpException(400, '`username` ne doit pas etre vide.')
  }
}

export const definitions = [
  {
    path: '/users',
    method: 'POST',
    validators: [
      usernameValidator
    ]
  }
]
```

Ici `validators` est une meta et c'est un simple exemple qui valide les données en entrée, plus precisement le `username`.

On peut definir autant de metas que possible et les valeurs peuvent etre de n'importe quel type.

## Recuperation

Tout les metas sont recuperables depuis la methode `get` de la route courante, 
et on peut les recuperer depuis les actions ou les middlewares, en un mot partout ou l'on a accès a la route courante.

```js
const validators = router.current().get('validators', [])
```

Ici on recupere la meta `validators` defini plus haut depuis la methode `current` du routeur qui retourne la route courante, 
ensuite on recupere la meta depuis la methode `get` de la route.

Notes:
- La methode `get` sert pas seulement a recuperer les meta mais toutes les options presentes dans une definitions de route.
- Le second parametre de la methode `get` est la valeur par defaut a retourner quand une option n'est pas definie.

### Depuis les actions

Exemple de recuperation d'une meta depuis une action.

```js
export class UserController {
  create ({ route }) {
    const validators = route.get('validators', [])
  }
}
```

Ici on a acces a la route courante par de composition de l'objet `RequestContext`, 
ensuite on recupere notre meta.

### Depuis un middleware

Exemple de recuperation d'une meta depuis un middleware.

```js
export class ValidatorMiddleware {
  handle (request, next) {
    const validators = request.route.get('validators', [])
  }
}
```

Ici on accede a la route courante depuis l'objet request, ensuite on recupere notre meta.

## Un exemple

Nous allons completer notre simple petit exemple de validation de username avec les metas.

### Le middlewra

On va creer un middleware pour intercepter toutes les requetes, 
ensuite recuperer la meta `validators` depuis la route, 
efin executer toutes les fonction de validation.

```js
export class ValidatorMiddleware {
  handle (request, next) {
    const validators = request.route.get('validators', [])
    validators.forEach(validator => validators(request.body))

    return next(request)
  }
}
```

Le middleware ne fait qu'executer toutes les fonctions de validation.

### La fonction de validation

On va creer notre fonction qui va verifier la validiter la donnée `username` fournit par l'utilisateur.

```js
export const usernameValidator = (body) => {
  if (!body.username) {
    throw new HttpException(400, '`username` doit etre present.')
  }

  if (body.username.length < 2) {
    throw new HttpException(400, '`username` doit avoir au minimum deux caracteres.')
  }

  return true
}
```

On verifie si `username` est present et si son nombre de caractere est superieur a 1, 
le cas contraire une exception est lancée.

### Le controlleur

On va juste definir un controlleur pour notre route qui va juste enregistrer l'utilisateur.

```js
export class UserController {
  constructor (userService) {
    this.userService = userService
  }

  create({ body }) {
    this.userService.save(body)
  }
}
```

### La definition des routes

Maintenant qu'on a tout on peut denifir la route qui va pointer vers notre controller `create` de la classe `UserController`.

```js
export const definitions = [
  {
    path: '/users',
    method: 'POST',
    action: { create: UserController },
    validators: [ usernameValidator ]
  }
]
```

La meta `validators` contient notre `usernameValidator` qui va valider notre `username` 
avant meme que la requete parvient a notre controller `create`.

### Integration

On va creer une instance du `Router` et une representation de l'objet `StoneRequest` afin d'executer le tout.

```js
const options = {
  definitions
}

const router = new Router(options)
const request = { path: '/users', method: 'POST', body: { username: 'Stone.js' } }

const response = await router.dispatch(request)
```

On importe nos defintions de routes via la syntaxe shorthand property,
ensuite on cree une instance `Router` avec notre `options` en parametres, 
apres on cree une representation de l'objet `StoneRequest`, 
enfin on envoie notre requete a la route.

### Resume

Dans ce petit exemple:

- On cree un middleware qui va intercepter toutes les requetes et verifier si la meta `validators` est presente
- Si la meta `validators` est presente il va executer toutes les fonctions presente dans `validators`
- On cree une fonction `usernameValidator` pour valider le `username` fournit par l'utlisateur
- On cree un controlleur pour enregistrer les infos validés
- On definit nos routes avec notre meta `validators` qui contient un tableau de validateurs
- Enfin on creer une instance du `Router` et envoie notre requete a la route.