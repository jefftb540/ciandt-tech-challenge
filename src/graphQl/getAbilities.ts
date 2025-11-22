import { gql } from 'graphql-request'

export const GET_ABILITY_LIST = gql`
  query GetAbilityList {
    pokemon_v2_ability(order_by: { name: asc }) {
      id
      name
    }
  }
`
