import * as fs from 'fs'
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
// tslint:disable-next-line:no-circular-imports
import resolvers from './resolvers'

const typeDefs: string = fs.readFileSync('./src/graphql/schema.gql', 'utf-8')

const executableSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default executableSchema
