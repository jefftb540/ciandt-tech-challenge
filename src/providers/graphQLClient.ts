import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
  process.env.REACT_APP_GRAPHQL_ENDPOINT || ''
)
