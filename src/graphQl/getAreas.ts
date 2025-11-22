import { gql } from 'graphql-request'

export const GET_AREA_LIST = gql`
  query GetAreaList {
    pokemon_v2_locationarea(order_by: { name: asc }) {
      id
      name
    }
  }
`
