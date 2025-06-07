export const nanoApp = 
`@NodeHttp()
@StoneApp()
export class Application implements IEventHandler<IncomingEvent> {
  private readonly logger: ILogger

  constructor ({ logger }: { logger: ILogger }) {
    this.logger = logger
  }

  handle(event: IncomingEvent): { message: string } {
    const message = \`Hello \${event.get<string>('name', 'World')}!\`

    this.logger.info(message)

    return { message }
  }
}
`
export const macroApp = 
`@Router()
@NodeHttp()
@StoneApp()
@EventHandler()
export class Application {
  @Get({ path: '/' })
  welcome(event: IncomingEvent): { message: string } {
    const message = \`Hello \${event.get<string>('name', 'World')}!\`
    return { message }
  }

  @Get({ path: '/bye' })
  bye(event: IncomingEvent): { message: string } {
    const name = event.get<string>('name', 'World')
    const message = \`Good Bye \${name}!\`
    return { message }
  }
}
`