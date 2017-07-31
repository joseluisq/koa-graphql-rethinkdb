const { find, filter } = require('lodash')
const { posts, authors } = require('./data')

module.exports = {
  Query: {
    post: (_, { id }) => find(posts, { id: id }),
    posts: () => posts,
    author: (_, { id }) => find(authors, { id: id })
  },
  Mutation: {
    upvotePost: (_, { postId }) => {
      const post = find(posts, { id: postId })
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`)
      }
      post.votes += 1
      return post
    }
  },
  Author: {
    posts: author => filter(posts, { authorId: author.id })
  },
  Post: {
    author: post => find(authors, { id: post.authorId })
  }
}
