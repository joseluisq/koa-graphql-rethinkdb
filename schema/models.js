import thinky from './connector'
import { isNull } from 'lodash'

const models = {}

export function getModel (name) {
  return models[name]
}

export function createModel (name, fields, ...args) {
  const model = thinky.createModel(
    name,
    {
      createdAt: thinky.type.date().default(thinky.r.now()),
      id: thinky.type.string().min(2),
      ...fields
    },
    ...args
  )

  models[name] = model
  model.defineStatic('exist', exist)

  return model
}

async function exist (offset) {
  try {
    return !isNull(await this.nth(offset).default(null))
  } catch (e) {
    return false
  }
}

export const Post = createModel('Post', {
  title: thinky.type.string(),
  votes: thinky.type.number(),
  authorId: thinky.type.string()
})

export const Author = createModel('Author', {
  firstName: thinky.type.string(),
  lastName: thinky.type.string()
})

Post.hasOne(Author, 'author', 'id', 'authorId')
Author.hasMany(Post, 'posts', 'id', 'authorId')
