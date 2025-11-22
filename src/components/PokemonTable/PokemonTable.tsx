import { AgGridReact } from 'ag-grid-react'

import { GQLPokemon } from '../../types/Pokemon'
import { ColDef } from 'ag-grid-community'

import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community'

import { themeQuartz } from 'ag-grid-community'

ModuleRegistry.registerModules([AllCommunityModule])

type PokemonTableProps = {
  pokemons?: GQLPokemon[]
}

type RowData = {
  id: number
  name: string
  artwork: string
  types: string[]
  stats: {
    hp?: number
    attack?: number
    defense?: number
    specialDefense?: number
    specialAttack?: number
    speed?: number
  }
}

const myTheme = themeQuartz.withParams({
  backgroundColor: '#1f2836',
  browserColorScheme: 'dark',
  chromeBackgroundColor: {
    ref: 'foregroundColor',
    mix: 0.07,
    onto: 'backgroundColor',
  },
  foregroundColor: '#FFF',
  headerFontSize: 14,
})

export function PokemonTable({ pokemons }: PokemonTableProps) {
  const rowData: RowData[] =
    pokemons?.map((p) => ({
      id: p.id,
      name: p.name,
      artwork: p.pokemon_v2_pokemonsprites[0].sprites,
      types: p.pokemon_v2_pokemontypes.map((type) => type.pokemon_v2_type.name),
      stats: {
        hp: p.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'hp'
        )?.base_stat,
        attack: p.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'attack'
        )?.base_stat,
        defense: p.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'defense'
        )?.base_stat,
        specialDefense: p.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'special-defense'
        )?.base_stat,
        specialAttack: p.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'special-attack'
        )?.base_stat,
        speed: p.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'speed'
        )?.base_stat,
      },
    })) ?? []

  const columnDefs: ColDef<RowData>[] = [
    {
      headerName: 'ID',
      field: 'id',
      width: 70,
    },
    {
      headerName: 'Name',
      field: 'name',
      flex: 1,
    },

    {
      headerName: 'Types',
      field: 'types',
      valueFormatter: ({ data }) => `${data?.types.join(' | ')}`,
      flex: 1,
    },
    {
      headerName: 'HP',
      field: 'stats.hp',
      width: 80,
    },
    {
      headerName: 'Attack',
      field: 'stats.attack',
      width: 80,
    },
    {
      headerName: 'Defense',
      field: 'stats.defense',
      width: 80,
    },
    {
      headerName: 'Special Defense',
      field: 'stats.specialDefense',
      width: 80,
    },
    {
      headerName: 'Special Attack',
      field: 'stats.specialAttack',
      width: 80,
    },
    {
      headerName: 'speed',
      field: 'stats.speed',
      width: 80,
    },
  ]

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: '960px' }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} theme={myTheme} />
    </div>
  )
}
