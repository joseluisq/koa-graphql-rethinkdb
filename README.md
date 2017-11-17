# Koa-GraphQL-RethinkDB

> [GraphQL](https://github.com/graphql/graphql-js) API Server example using [Koa](https://github.com/koajs/koa), [Apollo GraphQL Server](https://github.com/apollographql/apollo-server) & [RethinkDB](https://github.com/rethinkdb/rethinkdb). :rocket:

**Notes:**

- Koa requires NodeJS v7.6.0 or higher.
- Check out the [Vue 2 + Typescript](https://github.com/joseluisq/vue-typescript-starter) client example.

## Usage

Install dependencies

```sh
yarn
```

Run RethinkDB Server

```sh
rethinkdb
```

Start GraphQL API Server

```sh
yarn start
```

## GraphiQL

![koa-graphql-rethinkdb GraphiQL](https://user-images.githubusercontent.com/1700322/32940509-247671ac-cb83-11e7-9842-94a184f5cf66.png)

Use the [GraphiQL](https://github.com/graphql/graphiql) GUI to add demo data. Enter to [GraphiQL](https://github.com/graphql/graphiql) app at http://localhost:4020/graphiql

### Mutations

__1. createAuthor:__

```graphql
mutation {
  createAuthor(firstName: "Jose Luis", lastName: "Quintana")
}
```

__2. createPost:__

```graphql
mutation {
  createPost(title: "Queries and Mutations", authorId: "b61b0fa9-9cb3-41d7-beaa-452df0853335", votes: 1)
}
```

### Queries

__3. authors with posts query:__

```graphql
{
  authors {
    id
    firstName
    lastName
    posts
  }
}
```

## API

Check out the [GraphQL Schema](./src/graphql/schema.graphql).

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/koa-graphql-rethinkdb/pulls) or [issue](https://github.com/joseluisq/koa-graphql-rethinkdb/issues).

## License
MIT license

© 2017 [José Luis Quintana](http://git.io/joseluisq)
