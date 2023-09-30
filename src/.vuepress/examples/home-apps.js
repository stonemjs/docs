export const nanoApp = 
`import { HttpResponse } from '@stone-js/http-core'
import { StoneApp } from '@stone-js/core/decorators'
import {
  NodeHttpAdapter
} from '@stone-js/node-adapter/decorators'

@StoneApp()
@NodeHttpAdapter({ default: true })
export class Application {
  constructor (container) {
    this.container = container
  }

  async handle (event) {
    const user = await this
      .container
      .userService
      .getByEmail(event.get('user.email'))
  
    return HttpResponse.json({
      message: \`Hello \${user.fullname}!\`
    })
  }
}
`
export const macroApp = 
`import { HttpResponse } from '@stone/http-core'
import {
  Get, Post, Controller
} from '@stone-js/router/decorators'

@Controller()
@Group({ path: '/users' })
export class UserController {
  constructor ({ userService }) {
    this.userService = userService
  }

  @Get({ path: '/' })
  async getUsers(event) {
    const users = await this
      .userService
      .fetchByStatus(event.get('status'))

    return HttpResponse.json(users)
  }

  @Post({ path: '/' })
  async saveUser(event) {
    await this.userService.save(event.get('user'))

    return HttpResponse.noContent()
  }
}
`