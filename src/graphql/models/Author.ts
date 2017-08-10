import { createModel } from './Model'
import { r as Post } from './Post'

export const r: any = createModel('Author')

export const Query = {
  author: async (_: any, { id }: any) => await r.get(id).run(),

  authors: async () => await r.run()
}

export const Mutation = {
  createAuthor: async (_: any, data: any) =>
    await r.save(Object.assign({}, data)),

  updateAuthor: async (_: any, data: any) => {
    return await r.get(data.id).updateAt(Object.assign({}, data)).run()
  },

  deleteAuthor: async (_: any, { id }: any) => {
    return await r.get(id).then((author: any) => {
      if (author) {
        return author.delete()
      }
    })
  }
}

export const Author = {
  posts: async (author: any) => await Post.filter({ authorId: author.id }).run()
}
