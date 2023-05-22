import { env } from './validators/env'
import { app } from './app'

app
  .listen({ port: env.PORT })
  .then(() => console.log(`Server is running on port ${env.PORT}`))
