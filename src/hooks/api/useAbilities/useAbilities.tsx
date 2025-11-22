import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from '../../../providers/graphQLClient'
import { GQLAbilityListResponse } from '../../../types/Ability'
import { GET_ABILITY_LIST } from '../../../graphQl/getAbilities'

export function useAbilities() {
  return useQuery({
    queryKey: ['abilities'],
    queryFn: async () => {
      const data =
        await graphqlClient.request<GQLAbilityListResponse>(GET_ABILITY_LIST)
      return data.pokemon_v2_ability
    },
  })
}
