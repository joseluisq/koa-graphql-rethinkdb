import { createModel } from './Model'
import { r as Author } from './Author'

export const r = createModel('Post')

export const Query = {
  post: async (_, { id }) => await r.get(id).run(),
  posts: async () => await r.run()
}

export const Mutation = {
  createPost: async (_, data) => await r.save(Object.assign({}, data)),
  updatePost: async (_, data) => {
    return await r.get(data.id).updateAt(Object.assign({}, data)).run()
  },
  deletePost: async (_, { id }) => {
    return await r.get(id).then(post => {
      if (post) {
        return post.delete()
      }
    })
  }
}

export const Post = {
  author: async post => await Author.get(post.authorId).run()
}
