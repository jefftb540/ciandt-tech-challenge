import { graphqlClient } from '../../../providers/graphQLClient'
import { GQLPokemonResponse, Pokemon } from '../../../types/Pokemon'
import { GET_POKEMON } from '../../../graphQl/getPokemon'
import { useQuery } from '@tanstack/react-query'

type PokemonRequest = {
  id: number
}

export function usePokemon({ id }: PokemonRequest) {
  return useQuery<Pokemon | null>({
    queryKey: ['pokemon', id],

    queryFn: async () => {
      const data = await graphqlClient.request<GQLPokemonResponse>(
        GET_POKEMON,
        { id }
      )

      return data.pokemon_v2_pokemon_by_pk
    },
  })
}
