import { ApolloServer } from 'apollo-server'
import { loadTypeSchema } from './utils/schema'
import { merge } from 'lodash'
import user from './types/user/user.resolvers'
import config from './config'
import { Query } from 'mongoose';

const types = ['user']

export const start = async () => {
  const rootSchema = `
    type Book {
      id: Int
      title: String
      status: String
      price: Int
    }

    type Query {
      myBook: Book,
      allBooks: [Book]
    }
  
    schema {
      query: Query
    }
  `
  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  const server = new ApolloServer({
    typeDefs: rootSchema,
    resolvers: {
      Query: {
        myBook() {
          return {
            id: 1,
            title: "H C Verma",
            status: "Available",
            price: 280
          };
        }
      },
    },
  })

  const { url } = await server.listen({ port: config.port })

  console.log(`GQL server ready at ${url}`)
}
