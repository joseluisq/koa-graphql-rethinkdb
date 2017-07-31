const fs = require('fs')
const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')
const schema = fs.readFileSync('./schema/schema.graphql', 'utf8')

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
