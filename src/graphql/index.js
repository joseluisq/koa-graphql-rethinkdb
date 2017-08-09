import fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = fs.readFileSync('./src/graphql/schema.graphql', 'utf-8')

export default makeExecutableSchema({ typeDefs, resolvers })
