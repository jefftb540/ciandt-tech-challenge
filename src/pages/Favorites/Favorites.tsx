import { Box, Typography } from '@mui/material'
import { useFavorites } from '../../hooks'
import { PokemonGrid } from '../../components'

export const Favorites = () => {
  const { favorites } = useFavorites()
  return (
    <Box>
      <Typography variant="h4" marginBottom={4} component="h1">
        Favorites
      </Typography>
      <PokemonGrid pokemons={favorites} />
    </Box>
  )
}
