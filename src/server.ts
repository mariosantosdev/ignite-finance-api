import fastify from 'fastify'
import { env } from './validators/env'

const server = fastify()

server.get('/', () => ({ hello: 'world' }))

server
  .listen({ port: env.PORT })
  .then(() => console.log(`Server is running on port ${env.PORT}`))
