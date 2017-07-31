const koa = require('koa')
const koaRouter = require('koa-router')
const koaBody = require('koa-bodyparser')
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')

const app = new koa()
const router = new koaRouter()
const PORT = 3000

const schema = require('./schema')

router.post('/graphql', koaBody(), graphqlKoa({ schema }))
router.get('/graphql', graphqlKoa({ schema }))

router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
