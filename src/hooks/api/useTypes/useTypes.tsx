import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from '../../../providers/graphQLClient'
import { GQLTypeListResponse } from '../../../types/Type'
import { GET_TYPE_LIST } from '../../../graphQl/getTypes'

export function useTypes() {
  return useQuery({
    queryKey: ['types'],
    queryFn: async () => {
      const data =
        await graphqlClient.request<GQLTypeListResponse>(GET_TYPE_LIST)
      return data.pokemon_v2_type
    },
  })
}
