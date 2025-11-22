import { gql } from 'graphql-request'

export function buildGetPokemonsQuery(filters: {
  name?: string
  typeId?: number
  abilityId?: number
  areaId?: number
}) {
  const where: string[] = []

  if (filters.name) where.push(`{ name: { _ilike: "%${filters.name}%" } }`)

  if (filters.typeId)
    where.push(
      `{ pokemon_v2_pokemontypes: { pokemon_v2_type: { id: { _eq: ${filters.typeId} } } } }`
    )

  if (filters.abilityId)
    where.push(
      `{ pokemon_v2_pokemonabilities: { pokemon_v2_ability: { id: { _eq: ${filters.abilityId} } } } }`
    )

  if (filters.areaId)
    where.push(
      `{ pokemon_v2_encounters: { pokemon_v2_locationarea: { id: { _eq: ${filters.areaId} } } } }`
    )

  const whereBlock = where.length ? `_and: [${where.join(',')}]` : ''

  return gql`
    query GetPokemons($limit: Int!, $offset: Int!) {
      pokemon_v2_pokemon(
        limit: $limit
        offset: $offset
        where: { ${whereBlock} }
      ) {
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
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
      }
      }

      pokemon_v2_pokemon_aggregate(
        where: { ${whereBlock} }
      ) {
        aggregate {
          count
        }
      }
    }
  `
}
