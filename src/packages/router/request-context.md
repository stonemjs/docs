---
title: Request context
---

Le `RequestContext` est le fameux objet qui est passé en paramtre a toutes les actions des routes.

```js
{
  route: Route,
  params: Object,
  request: Request,
  parameters: Object,
  body: Object,
  query: Object,
  payload: Object
}
```

Cet objet est composé de:
- `route` la route actuelle
- `params` les parametres de la route
- `request` la requete courante
- `parameters` un alias de `params`
- `query` les parametres de la requete
- `body` le corps de la requete s'il est present
- `payload` un alias de `body`


Exemple d'acces au niveau d'un callback comme action.

```js
import { Router } from '@stone-js/router'

const router = new Router()

router.post('/users', (context) => console.log(context.payload))
```

Exemple d'acces par decomposition au niveau d'un controlleur.

```js
export class UserController {

  @Post('/users')
  create ({ request, routes, params, query, payload }) {
    console.log(payload)
  }
}
```