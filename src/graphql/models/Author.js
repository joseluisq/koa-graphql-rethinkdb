import { createModel } from './Model'
import { r as Post } from './Post'

export const r = createModel('Author')

export const Query = {
  author: async (_, { id }) => await r.get(id).run(),
  authors: async () => await r.run()
}

export const Mutation = {
  createAuthor: async (_, data) => await r.save(Object.assign({}, data)),
  updateAuthor: async (_, data) => {
    return await r.get(data.id).updateAt(Object.assign({}, data)).run()
  },
  deleteAuthor: async (_, { id }) => {
    return await r.get(id).then(author => {
      if (author) {
        return author.delete()
      }
    })
  }
}

export const Author = {
  posts: async author => await Post.filter({ authorId: author.id }).run()
}
