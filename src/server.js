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

    input BookInput {
      id: Int!
      title: String
      status: String
      price: Int
    }

    type Mutation {
      newBook(book: BookInput): Book
    }

    type Query {
      myBook: Book,
      allBooks: [Book],
    }
  
    schema {
      query: Query,
      mutation: Mutation
    }
  `
  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  const books = [
    {
      id: 1,
      title: "H C Verma",
      status: "Available",
      price: 280
    }
  ];

  const newBookResolver = (root, args, ctx) => {
    const bookObj = {
      id: args.book.id,
      title: args.book.title,
      status: args.book.status,
      price: args.book.price
    };
  
    books.push(bookObj);
    return bookObj;
  }

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
        },
        allBooks() {
          return books;
        }
      },
      Mutation: {
        newBook: newBookResolver
      }
    },
  })

  const { url } = await server.listen({ port: config.port })

  console.log(`GQL server ready at ${url}`)
}
