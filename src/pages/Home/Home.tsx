import { Box } from '@mui/material'
import { PokemonGrid } from '../../components/'

import { Button } from '../../components/ui/Button/Button'
import { usePokemons } from '../../hooks/api/usePokemons/usePokemons'
import { MenuItem, SearchInput, Select } from '../../components/ui'
import { useAbilities, useAreas, useTypes } from '../../hooks/api'
import { useState } from 'react'
import { useDebounce } from '../../hooks'
import { PokemonTable } from '../../components/PokemonTable/PokemonTable'
import { useSearchParams } from 'react-router-dom'

export const Home = () => {
  const { data: abilities } = useAbilities()
  const { data: types } = useTypes()
  const { data: areas } = useAreas()
  const [searchParams] = useSearchParams()

  const [ability, setAbility] = useState<number>()
  const [type, setType] = useState<number>()
  const [area, setArea] = useState<number>()
  const [search, setSearch] = useState<string>('')

  const debouncedSearch = useDebounce(search)

  const { data: pokemonData, fetchNextPage } = usePokemons({
    ability,
    area,
    name: debouncedSearch,
    type,
  })

  const pokemons = pokemonData?.pages.flatMap((page) => page.pokemons)

  return (
    <>
      <Box
        sx={{
          margin: 'auto',
          display: 'grid',
          maxWidth: '960px',
          gridTemplateColumns: '1fr 1fr',
          columnGap: 5,
          rowGap: 2,
          alignItems: 'end',
        }}
      >
        <SearchInput
          label="Name"
          placeholder="Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          value={ability ?? ''}
          onChange={(e) => setAbility(Number(e.target.value) ?? undefined)}
          label="Ability"
        >
          <MenuItem value={''}>All</MenuItem>
          {abilities?.map((ability) => (
            <MenuItem key={ability.id} value={ability.id}>
              {ability.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={type ?? ''}
          onChange={(e) => setType(Number(e.target.value) ?? undefined)}
          label="Type"
        >
          <MenuItem value={''}>All</MenuItem>
          {types?.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={area ?? ''}
          onChange={(e) => setArea(Number(e.target.value) ?? undefined)}
          label="Area"
        >
          <MenuItem value={''}>All</MenuItem>
          {areas?.map((area) => (
            <MenuItem key={area.id} value={area.id}>
              {area.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 4,
          mt: 4,
        }}
      >
        {searchParams.get('view') === 'Table' ? (
          <PokemonTable pokemons={pokemons} />
        ) : (
          <PokemonGrid pokemons={pokemons} />
        )}
        <Button variant="outlined" size="large" onClick={() => fetchNextPage()}>
          Load more
        </Button>
      </Box>
    </>
  )
}
