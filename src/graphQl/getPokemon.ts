import { gql } from 'graphql-request'

export const GET_POKEMON = gql`
  query GetPokemon($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight

      pokemon_v2_pokemonsprites {
        sprites
      }

      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }

      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }

      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(
          limit: 1
          where: { language_id: { _eq: 9 } }
        ) {
          flavor_text
        }

        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            id
            name
          }
        }
      }
    }
  }
`
