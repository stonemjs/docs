---
title: Matchers
---

## Introduction

Les matchers permettent de verifier la correspondance des requetes aux routes.

Jusqu'a date Stone Router utlise les matchers suivants pour verifier la correspondance des requetes aux routes:
- `HostMatcher` verifie la correspondance du `host` de la requete avec le `domain` definie dans la route
- `MethodMatcher` verifie la correspondance des `method`
- `ProtocolMatcher` verifie la correspondance des `protocol`
- `UriMatcher` verifie la correspondance des `path`

## Matchers personnalisés

Un matcher n'est autre qu'une classe Javascript ayant une methode `matches` avec comme arguments `route` et `request`.

### Creation

Voici le `MethodMatcher`, il peut servir d'exemple afin de creer un matcher personnalisé.

```js
export class MethodMatcher {
  /**
   * matches.
   *
   * @param  {Route}   route
   * @param  {Request} request - StoneRequest instance
   * @return {boolean}
   */
  matches (route, request) {
    return route.methods.includes(request.method)
  }
}
```

Notes:
- La methode `matches` doit retourner un boolean
- On a aussi accès aux `meta` dans les matchers depuis la route, `route.get('...')`
- On peut aussi utiliser les `meta` pour faire une validation de correspondance
- Un matcher ne peut pas etre asynchrone
- L'echec d'un matcher provoque le rejet de la correspondance meme quand tous les autres ont reussis

### Enregistrement

Les matchers doivent etre enregistrer au niveau du routeur afin de les utiliser.

On utilise la methode `setMatchers` afin d'enregistrer nos matchers.

Voici la liste des methodes du `Router` permettant de gerer les matchers:

- `getMatchers (orDefault = true)` retourne la liste des matchers enrgistrer par l'utilisateur ou les matchers par defaut quand `orDefault`est a `true`
- `hasMatchers()` verifie si des matchers ont ete enrgistrer par l'utilisateur
- `setMatchers (matchers, mergeWithDefault = true)` enregistrer nos matchers et les fusionnés avec les matchers par defaut quand `mergeWithDefault` est a `true`
