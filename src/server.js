import { ApolloServer } from 'apollo-server'
import { loadTypeSchema } from './utils/schema'
import { merge } from 'lodash'
import user from './types/user/user.resolvers'
import config from './config'
import { Query } from 'mongoose';

const types = ['user']

export const start = async () => {
  const rootSchema = `
    type Cat {
      name: String
      age: Int
      owner: Person
    }

    type Person {
      name: String
      age: Int
      pet: Cat
    }

    type Query {
      myCat: Cat
      person: Person
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
        myCat() {
          return {}
        } ,
        person() {
          return {}
        },
      },
      Cat: {
        name() {
          return "Garfield"
        },
        age() {
          return 2
        },
        owner(){
          return {}
        }
      },
      Person: {
        name() {
          return "Jayant"
        },
        age() {
          return 25
        },
        pet() {
          return {} 
        }
      }
    },
  })

  const { url } = await server.listen({ port: config.port })

  console.log(`GQL server ready at ${url}`)
}
