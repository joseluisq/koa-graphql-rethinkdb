// tslint:disable-next-line:no-circular-imports
import {
  Query as QueryPost,
  Mutation as MutationPost,
  Post
} from './models/Post'

// tslint:disable-next-line:no-circular-imports
import {
  Query as QueryAuthor,
  Mutation as MutationAuthor,
  Author
} from './models/Author'

export default {
  Query: { ...QueryPost, ...QueryAuthor },
  Mutation: { ...MutationPost, ...MutationAuthor },
  Post,
  Author
}
