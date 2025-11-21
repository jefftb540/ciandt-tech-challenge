import { gql } from 'graphql-request'

export const GET_POKEMONS = gql`
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name

      pokemon_v2_pokemonsprites(limit: 1) {
        sprites(path: "$.other.official-artwork.front_default")
      }

      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }

    pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
  }
`
