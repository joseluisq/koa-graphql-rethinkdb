import Koa from 'koa'
import KoaRouter from 'koa-router'
import KoaBody from 'koa-bodyparser'
import cors from 'kcors'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import schema from './schema'

const app = new Koa()
const router = new KoaRouter()
const PORT = process.env.PORT || 4020
const WS_PORT = process.env.WS_PORT || 4021

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

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`GraphQL API Server is now running on http://localhost:${PORT}`)
})
