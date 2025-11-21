import { Box, Typography } from '@mui/material'
import { PokemonCard } from '../'
import { GQLPokemon } from '../../types/Pokemon'

type PokemonGridProps = {
  pokemons?: GQLPokemon[]
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <>
      {pokemons?.length ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 4,
              maxWidth: 960,
            }}
          >
            {pokemons?.map((pokemon) => (
              <PokemonCard pokemon={pokemon} />
            ))}
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" align="center">
            No Pokémons found.
          </Typography>
          <Typography variant="body1" align="center">
            Try adjusting your search or filter to find what you're looking for.
          </Typography>
        </Box>
      )}
    </>
  )
}
