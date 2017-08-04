import { Author, Post } from './models'

const resolvers = {
  Query: {
    author: async (_, { id }) => {
      return await Author.get(id).run()
    },
    authors: async () => {
      return await Author.run()
    },
    post: async (_, { id }) => {
      return await Post.get(id).run()
    },
    posts: async () => {
      return await Post.run()
    }
  },
  Mutation: {
    createAuthor: async (_, data) => {
      return await Author.save(Object.assign({}, data))
    },
    createPost: async (_, data) => {
      return await Post.save(Object.assign({}, data))
    },
    updateAuthor: async (_, data) => {
      return await Author.get(data.id).update(Object.assign({}, data)).run()
    },
    updatePost: async (_, data) => {
      return await Post.get(data.id).update(Object.assign({}, data)).run()
    },
    deletePost: async (_, { id }) => {
      return await Post.get(id).then(post => {
        if (post) {
          return post.delete()
        }
      })
    }
  },
  Author: {
    posts: async author => {
      return await Post.filter({ authorId: author.id }).run()
    }
  },
  Post: {
    author: async post => {
      return await Author.get(post.authorId).run()
    }
  }
}

export default resolvers
