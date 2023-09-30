---
title: Evenements
---

## Introduction

Les evenements nous informent quand une action pertinente ou importante se produit au sein de notre application.

Pour s'abonner a un evenement on utilise la methode `on` du router, 
qui prend en parametre le nom de l'evenement et un callback avec l'objet `Event` comme argument.

L'objet `Event` contient trois proprietes:
- `name` le nom de l'evenement declenché
- `data` contient les données passées à l'evenement
- `context` le contexte dans lequel l'evenement est declenché, en l'occurance l'objet router.


Deux evenements peuvent etre lancés lorsqu'une requete est transmise au routeur:
- [Routing](#routing)
- [Route Matched](#route-matched)

## Routing

L'evenement `Event.ROUTING` est declenché juste avant que la requete corresponde a une route.

```js
import { Event } from '@stone-js/router'

router.on(Event.ROUTING, ({ name, data, context }) => console.log(data.request))
```

On accede au propriete de l'evenement par decomposition et la propriete `data` contient la requete courante.

## Route Matched

L'evenement `Event.ROUTE_MATCHED` est declenché après que la requete corresponde a une route,
et juste avant de rouler les middlewares et d'executer l'action.

```js
import { Event } from '@stone-js/router'

router.on(Event.ROUTE_MATCHED, (event) => console.log(event.data.route, event.data.request))
```

La propriete `data` contient la requete et la route courantes.