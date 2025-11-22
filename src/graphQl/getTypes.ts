import { gql } from 'graphql-request'

export const GET_TYPE_LIST = gql`
  query GetTypeList {
    pokemon_v2_type(order_by: { name: asc }) {
      id
      name
    }
  }
`
