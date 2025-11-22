import { useQuery } from '@tanstack/react-query'
import { GET_AREA_LIST } from '../../../graphQl/getAreas'
import { graphqlClient } from '../../../providers/graphQLClient'
import { GQLAreaListResponse } from '../../../types/Area'

export function useAreas() {
  return useQuery({
    queryKey: ['areas'],
    queryFn: async () => {
      const data =
        await graphqlClient.request<GQLAreaListResponse>(GET_AREA_LIST)
      return data.pokemon_v2_locationarea
    },
  })
}
