import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL not set')

export const knexConfig: Knex.Config = {
  client: 'sqlite',
  useNullAsDefault: true,
  connection: {
    filename: process.env.DATABASE_URL,
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(knexConfig)
