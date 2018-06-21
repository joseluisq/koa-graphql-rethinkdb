import { createModel } from './Model'
// tslint:disable-next-line:no-circular-imports
import { r as Post } from './Post'

export const r: any = createModel('Author')

export const Query = {
  author: async (_: any, { id }: any) => r.get(id).run(),

  authors: async () => r.run()
}

export const Mutation = {
  createAuthor: async (_: any, data: any) =>
    r.save(Object.assign({}, data)),

  updateAuthor: async (_: any, data: any) => {
    return r.get(data.id).updateAt(Object.assign({}, data)).run()
  },

  deleteAuthor: async (_: any, { id }: any) => {
    return r.get(id).then((author: any) => {
      if (author) {
        return author.delete()
      }
    })
  }
}

export const Author = {
  posts: async (author: any) => Post.filter({ authorId: author.id }).run()
}
