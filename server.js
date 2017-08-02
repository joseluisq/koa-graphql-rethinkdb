import { createServer } from 'http'
import Koa from 'koa'
import KoaRouter from 'koa-router'
import KoaBody from 'koa-bodyparser'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { execute, subscribe } from 'graphql'
import schema from './schema'

const app = new Koa()
const router = new KoaRouter()
const PORT = process.env.PORT || 4020
const WS_PORT = process.env.WS_PORT || 4021

// Create WebSocket listener server
const websocketServer = createServer((request, response) => {
  response.writeHead(404)
  response.end()
})
websocketServer.listen(WS_PORT, () =>
  console.log(`Websocket Server is now running on http://localhost:${WS_PORT}`)
)

SubscriptionServer.create(
  { schema, execute, subscribe },
  { server: websocketServer, path: '/subscriptions' }
)

router.post('/graphql', KoaBody(), graphqlKoa({ schema }))
router.get('/graphql', graphqlKoa({ schema }))
router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${WS_PORT}/subscriptions`
  })
)

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT, () => {
  console.log(`API Server is now running on http://localhost:${PORT}`)
})
