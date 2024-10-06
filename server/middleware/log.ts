import { Logger, LogLevel } from '../logger'

const log = new Logger('request')
log.level = LogLevel.DEBUG

export default defineEventHandler((event) => {
  const start = performance.now()

  event.node.res.on('finish', () => {
    log.debug(`${event.node.req.method} [${event.node.res.statusCode}] ${event.node.req.url} - ${Math.round(performance.now() - start)}ms`)
  })
})
