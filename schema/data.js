// Example data

const authors = [
  { id: 1, firstName: 'Octo', lastName: 'Cat' },
  { id: 2, firstName: 'John', lastName: 'Doe' },
  { id: 3, firstName: 'Tax', lastName: 'Linux' }
]

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to Github API', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to GraphQL', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 2, title: 'Configuring a GraphQL Server', votes: 8 },
  { id: 5, authorId: 3, title: 'Linux is Awesome!', votes: 7 },
  { id: 6, authorId: 1, title: 'How to send a Github Pull Request', votes: 7 }
]

module.exports = {
  authors,
  posts
}
