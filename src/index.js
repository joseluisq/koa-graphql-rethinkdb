import Koa from 'koa'
import KoaRouter from 'koa-router'
import KoaBody from 'koa-bodyparser'
import cors from 'kcors'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import schema from './graphql'

const app = new Koa()
const router = new KoaRouter()
const PORT = process.env.PORT || 4020

router.post('/graphql', KoaBody(), graphqlKoa({ schema }))
router.get('/graphql', graphqlKoa({ schema }))
router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql'
  })
)

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`GraphQL API Server is now running on http://localhost:${PORT}`)
})
