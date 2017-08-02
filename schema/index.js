import { readFileSync } from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'
const schema = readFileSync('./schema/schema.graphql', 'utf-8')

export default makeExecutableSchema({ typeDefs: schema, resolvers })
