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
    }

    type Person {
      name: String
      age: Int
    }

    type Query {
      myCat: Cat
      persons: [Person]
    }

    type Mutation {
      newPerson(name: String!, age: Int): Person
    }
  
    schema {
      query: Query
      mutation: Mutation
    }
  `
  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  const persons = [
    {
    name: 'Jayant',
    age: 25
    },
    {
      name: 'Scott',
      age: 26
    }
  ];

  const catResolver = (root, args, ctx) => {
    return {name: 'Garfield'};
  }
  
  const personResolver = (root, args, ctx) => {
    return persons;
  }

  const newPersonResolver = (root, args, ctx) => {
    let newPerson = {
      name: args.name,
      age: args.age
    };

    persons.push(newPerson);
    return newPerson
  }

  const server = new ApolloServer({
    typeDefs: rootSchema,
    resolvers: {
      Query: {
        myCat: catResolver,
        persons: personResolver
      },
      Mutation: {
        newPerson: newPersonResolver
      }
    },
  })

  const { url } = await server.listen({ port: config.port })

  console.log(`GQL server ready at ${url}`)
}
