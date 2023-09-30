---
title: Middleware
---

Les middlewares permettent d'intercepter les requetes afin de les inspecter, les filtrer, les modifier ou les rejeter
avant meme qu'elles atteignent les actions definies au niveau des routes.

Un middleware peut etre utilise afin de verifier qu'un utilisateur est authentifie, 
s'il l'est on laisse passer la requete sinon on la rejete tout en l'informant qu'il n'est pas connecté.

## Definir un middleware

Un middleware peut etre defini soit via une fonction ou une classe, on peut utiliser les deux au sein d'une application,
avec la seule difference que dans le cas d'une classe et dans un contexte d'une application Stone.js, 
le containeur de service lui est injecté depuis son constructeur.

### Fonction

Une fonction comme middleware prend en parametre la requete courante et un callback `next`, 
la fonction peut etre synchrone ou asynchrone, elle doit appeler et retourner le callback `next` ou une reponse.

```js
export const authMiddleware = (request, next) {
  if (!request.hasHeader('Authorization')) {
    throw new HttpException(401, 'Unauthorized')
  }

  return next(request)
}
```

Dans la vie reelle un middleware d'authentification est beaucoup plus complexe que celui la, 
mais c'est un bon exemple pour comprendre le sujet.

Ici on verifie si `Authorization` exsiste dans le header si oui on laisse passer la requete `return next(request)`, 
sinon une exception est lancée.

### Classe

Une classe comme middleware doit obligatoirement avoir la methode `handle` 
qui prend en parametre la requete courante et un callback `next`, 
la methode peut etre synchrone, elle doit appeler et retourner le callback `next` ou une reponse.

```js
export class AuthMiddleware {
  handle (request, next) {
    if (!request.hasHeader('Authorization')) {
      throw new HttpException(401, 'Unauthorized')
    }

    return next(request)
  }
}
```

Dans la vie reelle un middleware d'authentification est beaucoup plus complexe que celui la, 
mais c'est un bon exemple pour comprendre le sujet.

Ici on verifie si `Authorization` exsiste dans le header si oui on laisse passer la requete `return next(request)`, 
sinon une exception est lancée.

### Acceder a la route

Dans un middleware, on peut acceder à la route courante depuis la requete via la propriete `route`.

```js
export class AuthMiddleware {
  handle (request, next) {
    console.log(request.route.params)

    return next(request)
  }
}
```

## Affecter des middlewares aux routes

On peut affecter les middleware aux routes de deux manieres:
- [Local](#local)
- [Global](#global)

### Local

Pour affecter des middlewares directement aux routes on utilise la propriete `middleware` 
qui prend comme valeur un tableau de middlewares.

```js
{
  ...
  middleware: [AuthMiddleware, AdminMiddleware],
  ...
}
```

Les middlewares peuvent etre definis tant au niveau des parents qu'au niveau des enfants pour les definitions de route regroupées.

### Global

Pour affecter des middlewares à toutes les routes on utilise les methodes:
- `setMiddleware` qui permet d'ajouter un tableau de middleware
- `addMiddleware` qui permet d'ajouter un seul middleware

```js
router.addMiddleware(AuthMiddleware)
router.setMiddleware([AuthMiddleware, AdminMiddleware])
```

## Exclure des middleware

Pour exclure des middlewares globaux sur une route, on utilise la propriete `excludeMiddleware` lors de la definition de la route, 
et elle prend comme valeur le tableau des middleware à exclure.

```js
{
  ...
  excludeMiddleware: [AuthMiddleware, AdminMiddleware],
  ...
}
```

### Desactiver tous les middleware

On peut demander au router de desactiver tous les middlewares definis tant au niveau des routes qu'au niveau du router.

```js
router.skipMiddleware(true)
```