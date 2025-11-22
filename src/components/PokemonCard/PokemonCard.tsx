import { Box, Card, CardMedia, Divider, Typography } from '@mui/material'
import { Chip } from '../ui/Chip/Chip'
import { GQLPokemon } from '../../types/Pokemon'
import { Link } from 'react-router-dom'

type PokemonCardProps = {
  pokemon: GQLPokemon
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Card
      component={Link}
      to={`/pokemon/${pokemon.id}`}
      sx={{
        textDecoration: 'none',
        padding: 2,
        textAlign: 'center',
        width: 180,
        height: 260,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        boxShadow:
          ' rgb(0, 0, 0) 0px 0px 3px, rgb(155, 225, 255) 2px 2px 7px, rgb(155, 225, 255) -2px -2px 7px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          borderWidth: 1,
          borderStyle: 'solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardMedia
          component="image"
          image={
            pokemon.pokemon_v2_pokemonsprites[0].sprites ||
            '/assets/pokemon-placeholder.png'
          }
          sx={{
            width: '80px',
            height: '80px',
          }}
        />
      </Box>
      <Divider sx={{ width: '100%' }} />
      <Typography variant="h5" component="h2" textTransform="capitalize">
        {pokemon.name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        {pokemon.pokemon_v2_pokemontypes.map((typeInfo) => (
          <Chip
            key={typeInfo.pokemon_v2_type.name}
            label={typeInfo.pokemon_v2_type.name}
          />
        ))}
      </Box>
    </Card>
  )
}
