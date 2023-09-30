---
title: Dispatchers
---

## Introduction

Les dispatchers permettent de creer le `RequestContext` et d'executer les actions des routes.

Jusqu'a date Stone Router utlise les dispatchers suivants afin d'executer les diffents types d'action des routes.
- `CallableDispatcher` execute les fonctions de callback definies comme actions
- `ControllerDispatcher` execute les methodes des classes definies comme actions

## Dispatchers personnalisés

Un dispatcher n'est autre qu'une classe Javascript ayant une methode `dispatch` avec comme arguments:
- `dispatch (request, route, callable)` pour le dispatcher `CallableDispatcher`
- `dispatch (request, route, controller, method)` pour le dispatcher `ControllerDispatcher`

### Creation

Voici le `CallableDispatcher`, il peut servir d'exemple afin de creer un dispatcher personnalisé.

```js
export class CallableDispatcher {
  /**
   * Dispatch.
   *
   * @param {Request} request - StoneRequest instance
   * @param {Route}    route
   * @param {Function} callable
   *
   * @return {any}
   */
  dispatch (request, route, callable) {
    const params = route.parametersWithoutNulls()
    const context = {
      route,
      params,
      request,
      parameters: params,
      body: request.body ?? {},
      query: request.query ?? {},
      payload: request.body ?? {}
    }

    return callable(context)
  }
}
```

Notes:
- La methode `dispatch` peut retourner n'importe quel type de valeur
- On a aussi accès aux `meta` dans les dispatchers depuis la route, `route.get('...')`
- On peut aussi ajouter les `meta` dans le `RequestContext`
- Un dispatcher peut etre synchrone ou asynchrone

### Enregistrement

Les dispatchers doivent etre enregistrer au niveau du routeur afin de les utiliser.

Contrairement au matchers on ne peut pas ajouter d'autres types dispatchers on peut juste les remplacer par types.

On utilise les methode `setCallableDispatcher` et `setControllerDispatcher` afin de les enregistrer.

Voici la liste des methodes du `Router` permettant de gerer les dispatchers:

- `getDispatchers (orDefault = true)` retourne la liste des dispatchers enregistrer par l'utilisateur ou les dispatchers par defaut quand `orDefault`est a `true`
- `hasDispatchers()` verifie si des dispatchers ont ete enrgistrer par l'utilisateur
- `setDispatchers(dispatchers)` remplace les dispatchers par type, le parametre est un objet de ce type `{ callable: DispatcherA, controller: DispatcherB }`
- `addDispatcher(type, dispatcher)` remplace un type de dispatcher
- `setCallableDispatcher(dispatcher)` remplace le dispatcher de type `callable`
- `setControllerDispatcher(dispatcher)` remplace le dispatcher de type `controller`

Les differents types de dispatchers sont `callable` et `controller`.