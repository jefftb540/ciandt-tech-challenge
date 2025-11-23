import {
  Box,
  Card,
  CardMedia,
  Divider,
  IconButton,
  styled,
  Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Chip } from '../ui/Chip/Chip'
import { GQLPokemon } from '../../types/Pokemon'
import { Link } from 'react-router-dom'
import { useFavorites } from '../../hooks'

type PokemonCardProps = {
  pokemon: GQLPokemon
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.info.main,
  position: 'absolute',
  right: 2,
  top: 2,
}))

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  const isPokemonFavorite = isFavorite(pokemon?.id)

  const toggleFavorite = () => {
    isPokemonFavorite ? removeFavorite(pokemon?.id) : addFavorite(pokemon)
  }
  return (
    <Card
      component={Link}
      to={`/pokemon/${pokemon.id}`}
      sx={{
        position: 'relative',
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
      <StyledIconButton
        data-testid="favorite-icon"
        size="small"
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          toggleFavorite()
        }}
      >
        {isPokemonFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </StyledIconButton>
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
