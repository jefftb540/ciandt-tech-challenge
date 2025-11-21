import { useInfiniteQuery } from '@tanstack/react-query'
import { graphqlClient } from '../../../providers/graphQLClient'
import { GET_POKEMONS } from '../../../graphQl/getPokemons'
import { GQLPokemonsResponse } from '../../../types/Pokemon'

type PokemonsResponse = {
  pokemons: GQLPokemonsResponse['pokemon_v2_pokemon']
  total: number
}

export function usePokemons(limit: number, offset: number = 0) {
  return useInfiniteQuery<PokemonsResponse>({
    queryKey: ['pokemons', limit],
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
        GET_POKEMONS,
        { limit, offset: pageParam }
      )
      return {
        pokemons: data.pokemon_v2_pokemon,
        total: data.pokemon_v2_pokemon_aggregate.aggregate.count,
      }
    },
  })
}
