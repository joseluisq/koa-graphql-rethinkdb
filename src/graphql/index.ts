import * as fs from 'fs'
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs: string = fs.readFileSync(
  './src/graphql/schema.graphql',
  'utf-8'
)

const executableSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default executableSchema
