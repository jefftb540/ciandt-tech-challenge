import { useInfiniteQuery } from '@tanstack/react-query'
import { graphqlClient } from '../../../providers/graphQLClient'
import { buildGetPokemonsQuery } from '../../../graphQl/getPokemons'
import { GQLPokemonsResponse } from '../../../types/Pokemon'

type PokemonsResponse = {
  pokemons: GQLPokemonsResponse['pokemon_v2_pokemon']
  total: number
}

type PokemonFilters = {
  limit?: number
  offset?: number
  name?: string
  ability?: number
  type?: number
  area?: number
}

export function usePokemons({
  ability,
  limit = 40,
  area,
  name,
  offset = 0,
  type,
}: PokemonFilters) {
  return useInfiniteQuery<PokemonsResponse>({
    queryKey: ['pokemons', limit, ability, area, name, type],
    getNextPageParam: (lastPage, allPages) => {
      const loadedPokemons = allPages.flatMap((page) => page.pokemons).length
      if (loadedPokemons < lastPage.total) {
        return loadedPokemons
      }
      return undefined
    },
    initialPageParam: offset,
    queryFn: async ({ pageParam }) => {
      const data = await graphqlClient.request<GQLPokemonsResponse>(
        buildGetPokemonsQuery({
          abilityId: ability,
          areaId: area,
          name: name,
          typeId: type,
        }),
        { limit, offset: pageParam }
      )
      return {
        pokemons: data.pokemon_v2_pokemon,
        total: data.pokemon_v2_pokemon_aggregate.aggregate.count,
      }
    },
  })
}
