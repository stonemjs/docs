---
title: Liaison du modèle
---

## Introduction

Le plus souvent les valeurs des parametres de route sont utilisées pour aller chercher des modèles dans la base de données, ou depuis une API externe. 
Avec la liaison des modeles, Stone Routeur peut aller chercher les modeles à votre place dans la base données et les injecter directement dans les routes. 
En resume au lieu d'injecter l'Id d'un utilisateur le router injectera le modèle utilisateur récupéré depuis la base de données, ou depuis une API externe. 


## Liaison locale

Elle se fait au niveau des definitions de routes ce qui permet au router de faire la resolution automatique des modeles depuis la base de données, ou depuis une API externe. 

```ts
import { Service } from '@stone-js/core'

@Service({ alias: 'userService' })
export class UserService {
  findOneBy (key: string, value: any) {
    // Fetch the user somewhere
  }
}
```
```ts
const definitions = {
  method: 'GET',
  path: '/users/:userId(\\d+)',
  bindings: { userId: 'userService@findOneBy' },
  handler: (event) => console.log(event.params.userId)
}
```

La classe `UserService` est un exemple de service avec la methode `findOneBy` qui fait la resolution du modele. 
ensuite on a accès à notre modele depuis la propriete params(`params.userId`) de l'objet `event` injecté à notre handler.

Notes:
- on utilise l'option `bindings` pour lier nos modeles ou services aux valeurs des parametres.
- l'option `bindings` prend un objet literal comme valeur, les clés correspondent aux valeurs des parametres et le service comme valeur
- la valeur des clés des `bindings` doivent des aliass de services avec la methode qui va faire la resolution du modele
- la methode de resolution du modele doit prendre deux parametres, la clé et la valeur du parametre de route
- la logique de recuperation du modele doit etre implementer au niveau de cette meme methode
- elle doit retourner le modele ou `undefined` quand aucun modele n'est trouvé

### Clé personnalisée

On peut utiliser un `@` afin de distinguer la clé du parametre de celle qu'on veut utiliser pour aller chercher le modele.

```ts
const definitions = {
  method: 'GET',
  path: '/users/:user@userId(\\d+)',
  bindings: { userId: 'userService@findOneBy' },
  handler: (event) => console.log(event.params.user)
}
```

Dans cet exemple `user@userId(\\d+)`, le model sera injecté dans `params.user` 
et `userId` sera injecté comme clé de la methode `findOneBy` afin de faire la resolution du modele.

### Parametre optionel

Pour tous les parametres de route obligatoire, une exception sera lancée quand le modele n'est pas trouvé. 
Par contre la valeur `undefined` sera retournée pour les parametres optionnels.

Pour ce path `/users/:user@userId(\\d+)?` si le dernier segment est vide lors de la correspondance avec la requete, 
alors `params.user` contiendra `undefined` comme valeur.


## Liaison globale
On peut definir des liaisons globales pour tous les parametres de route.

At setup time
```ts
blueprint.set('stone.router.bindings', { userId: 'userService@findOneBy' })
```

At runtime
Pour definir des liaisons globales communes a toutes les routes on utilise les methodes `configure` depuis le router.

```ts
router.configure({ bindings: { userId: 'userService@findOneBy' } })
```