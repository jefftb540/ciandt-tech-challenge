import { Link as RouterLink, useParams } from 'react-router-dom'
import { usePokemon } from '../../hooks/api/'
import {
  Box,
  Card,
  CardMedia,
  Divider,
  IconButton,
  styled,
  Typography,
} from '@mui/material'
import { Chip, Link } from '../../components/ui'
import { Loading, RadarChart } from '../../components/'
import { colorsMap } from '../../utils/constants/colorsMap'
import { useFavorites } from '../../hooks'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const StyledProp = styled(Typography)({
  textShadow:
    'rgb(0, 0, 0) 0px 0px 3px,rgb(155, 225, 255) 1px 1px 1px,rgb(155, 225, 255) -1px -1px 1px',
})
const StyledPropTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main,
}))
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.info.main,
}))

export const Pokemon = () => {
  const { id } = useParams()
  const { data: pokemon, isLoading } = usePokemon({ id: Number(id) })

  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  const isPokemonFavorite = isFavorite(pokemon?.id)

  if (isLoading) return <Loading />
  if (!pokemon) {
    const randomId = Math.floor(Math.random() * 898) + 1
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          margin: 'auto',
          mt: 8,
          px: 2,
        }}
      >
        <Typography variant="h3" color="error">
          Pokemon not found
        </Typography>
        <Typography sx={{ textAlign: 'center', maxWidth: 560 }}>
          The Pokémon you are looking for does not exist or could not be loaded.
        </Typography>

        <Link to={`/pokemon/${randomId}`}>Try a random Pokémon</Link>
      </Box>
    )
  }

  const toggleFavorite = () => {
    isPokemonFavorite ? removeFavorite(pokemon?.id) : addFavorite(pokemon)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              borderWidth: 1,
              borderStyle: 'solid',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                ' rgb(0, 0, 0) 0px 0px 3px, rgb(155, 225, 255) 2px 2px 7px, rgb(155, 225, 255) -2px -2px 7px',
            }}
          >
            <CardMedia
              component="image"
              image={
                pokemon.pokemon_v2_pokemonsprites[0].sprites ||
                '/assets/pokemon-placeholder.png'
              }
              sx={{
                width: '280px',
                height: '280px',
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <Box
              display="flex"
              flexDirection="column-reverse"
              alignItems="center"
            >
              <StyledPropTitle>Height</StyledPropTitle>
              <StyledProp variant="h6">{pokemon.height}m</StyledProp>
            </Box>
            <Box
              display="flex"
              flexDirection="column-reverse"
              alignItems="center"
            >
              <StyledPropTitle>Weight</StyledPropTitle>
              <StyledProp variant="h6">{pokemon.weight}Kg</StyledProp>
            </Box>
            <Box
              display="flex"
              flexDirection="column-reverse"
              alignItems="center"
            >
              <StyledPropTitle>Category</StyledPropTitle>
              <StyledProp variant="h6">
                {
                  pokemon.pokemon_v2_pokemonspecy
                    .pokemon_v2_pokemonspeciesnames[0].genus
                }
              </StyledProp>
            </Box>
          </Box>
          <RadarChart
            stats={pokemon.pokemon_v2_pokemonstats.map((stat) => ({
              name: stat.pokemon_v2_stat.name
                .split('-')
                .join(' ')
                .toLocaleUpperCase('PT-br'),
              value: stat.base_stat,
            }))}
            color={
              colorsMap[pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name]
            }
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '48px',
                  fontWeight: '500',
                  textShadow:
                    ' rgb(0, 0, 0) 0px 0px 3px, rgb(155, 225, 255) 2px 2px 7px, rgb(155, 225, 255) -2px -2px 7px',
                }}
              >
                {pokemon.name}
              </Typography>
              <StyledIconButton onClick={toggleFavorite}>
                {isPokemonFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </StyledIconButton>
            </Box>
            <Typography
              sx={({ palette }) => ({
                color: palette.info.main,
                fontStyle: 'italic',
                textAlign: 'justify',
              })}
            >
              "
              {
                pokemon.pokemon_v2_pokemonspecy
                  .pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
              }
              "
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
              }}
            >
              {pokemon.pokemon_v2_pokemontypes.map((typeInfo) => (
                <Chip
                  key={typeInfo.pokemon_v2_type.name}
                  label={typeInfo.pokemon_v2_type.name}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 8,
              }}
            >
              {pokemon.pokemon_v2_pokemonabilities.map(
                (ability, index, arr) => (
                  <>
                    <Box>
                      <StyledProp variant="h6" textTransform="capitalize">
                        {ability.pokemon_v2_ability.name}
                      </StyledProp>
                      <StyledPropTitle>
                        {
                          ability.pokemon_v2_ability
                            .pokemon_v2_abilityflavortexts[0].flavor_text
                        }
                      </StyledPropTitle>
                    </Box>
                    {index < arr.length - 1 && (
                      <Divider orientation="vertical" />
                    )}
                  </>
                )
              )}
            </Box>
            <Box marginTop={4}>
              <Typography variant="h4" textAlign="center">
                Evolutions
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  marginTop: 4,
                }}
              >
                {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.map(
                  (evolution) => (
                    <Card
                      component={RouterLink}
                      to={`/pokemon/${evolution.id}`}
                      sx={{
                        textDecoration: 'none',
                        padding: 1,
                        textAlign: 'center',
                        width: 140,
                        height: 160,
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        boxShadow:
                          ' rgb(0, 0, 0) 0px 0px 3px, rgb(155, 225, 255) 2px 2px 7px, rgb(155, 225, 255) -2px -2px 7px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        alignItems: 'center',
                        borderRadius: 4,
                      }}
                    >
                      {evolution.name}

                      {evolution.pokemon_v2_pokemons.map((pokemon) => (
                        <CardMedia
                          image={pokemon.pokemon_v2_pokemonsprites[0].sprites}
                          sx={{
                            width: '100px',
                            height: '100px',
                          }}
                        />
                      ))}
                    </Card>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
