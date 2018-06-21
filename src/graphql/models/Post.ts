import { createModel } from './Model'
// tslint:disable-next-line:no-circular-imports
import { r as Author } from './Author'

export const r: any = createModel('Post')

export const Query = {
  post: async (_: any, { id }: any) => r.get(id).run(),

  posts: async () => r.run()
}

export const Mutation = {
  createPost: async (_: any, data: any) =>
    r.save(Object.assign({}, data)),

  updatePost: async (_: any, data: any) => {
    return r.get(data.id).updateAt(Object.assign({}, data)).run()
  },

  deletePost: async (_: any, { id }: any) => {
    return r.get(id).then((post: any) => {
      if (post) {
        return post.delete()
      }
    })
  }
}

export const Post = {
  author: async (post: any) => Author.get(post.authorId).run()
}
