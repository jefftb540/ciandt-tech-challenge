import { Box } from '@mui/material'
import { PokemonGrid } from '../../components/'
import { Button } from '../../components/ui/Button/Button'
import { usePokemons } from '../../hooks/api/usePokemons/usePokemons'
import { MenuItem, SearchInput, Select } from '../../components/ui'
import { useAbilities, useAreas, useTypes } from '../../hooks/api'
import { useState } from 'react'

export const Home = () => {
  const { data: pokemons, fetchNextPage } = usePokemons(16)

  const { data: abilities } = useAbilities()
  const { data: types } = useTypes()
  const { data: areas } = useAreas()

  const [ability, setAbility] = useState<number>()
  const [type, setType] = useState<number>()
  const [area, setArea] = useState<number>()
  const [search, setSearch] = useState<string>()

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
          value={ability}
          onChange={(e) => setAbility(Number(e.target.value))}
          label="Ability"
        >
          {abilities?.map((ability) => (
            <MenuItem value={ability.id}>{ability.name}</MenuItem>
          ))}
        </Select>
        <Select
          value={type}
          onChange={(e) => setType(Number(e.target.value))}
          label="Type"
        >
          {types?.map((type) => (
            <MenuItem value={type.id}>{type.name}</MenuItem>
          ))}
        </Select>
        <Select
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          label="Area"
        >
          {areas?.map((area) => (
            <MenuItem value={area.id}>{area.name}</MenuItem>
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
        <PokemonGrid
          pokemons={pokemons?.pages.flatMap((page) => page.pokemons)}
        />
        <Button variant="outlined" size="large" onClick={() => fetchNextPage()}>
          Load more
        </Button>
      </Box>
    </>
  )
}
