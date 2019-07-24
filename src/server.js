import { ApolloServer } from 'apollo-server'
import { loadTypeSchema } from './utils/schema'
import { merge } from 'lodash'
import user from './types/user/user.resolvers'
import example from './types/example/example.resolvers'
import config from './config'

const types = ['user', 'example']

export const start = async () => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `
  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  const server = new ApolloServer({
    typeDefs: [rootSchema, ...schemaTypes],
    resolvers: merge({}, example, user),
  })

  const { url } = await server.listen({ port: config.port })

  console.log(`GQL server ready at ${url}`)
}
