import { createModel } from './Model'
import { r as Author } from './Author'

export const r: any = createModel('Post')

export const Query = {
  post: async (_: any, { id }: any) => await r.get(id).run(),

  posts: async () => await r.run()
}

export const Mutation = {
  createPost: async (_: any, data: any) =>
    await r.save(Object.assign({}, data)),

  updatePost: async (_: any, data: any) => {
    return await r.get(data.id).updateAt(Object.assign({}, data)).run()
  },

  deletePost: async (_: any, { id }: any) => {
    return await r.get(id).then((post: any) => {
      if (post) {
        return post.delete()
      }
    })
  }
}

export const Post = {
  author: async (post: any) => await Author.get(post.authorId).run()
}
