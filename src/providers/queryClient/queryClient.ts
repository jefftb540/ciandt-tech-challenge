import { QueryClient, DefaultOptions } from '@tanstack/react-query'

const DEFAULT_STALE_TIME = 1000 * 60 * 60

const defaultOptions: DefaultOptions = {
  queries: {
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: DEFAULT_STALE_TIME,
  },
}

export const queryClient = new QueryClient({ defaultOptions })
