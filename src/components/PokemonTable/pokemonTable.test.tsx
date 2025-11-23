import { render, screen, waitFor } from '@testing-library/react'
import { PokemonTable } from './PokemonTable'

const mockPokemons = [
  {
    id: 25,
    name: 'pikachu',
    pokemon_v2_pokemonsprites: [{ sprites: 'image-url' }],
    pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: 'electric' } }],
    pokemon_v2_pokemonstats: [
      { base_stat: 35, pokemon_v2_stat: { name: 'hp' } },
      { base_stat: 55, pokemon_v2_stat: { name: 'attack' } },
      { base_stat: 40, pokemon_v2_stat: { name: 'defense' } },
      { base_stat: 50, pokemon_v2_stat: { name: 'special-attack' } },
      { base_stat: 50, pokemon_v2_stat: { name: 'special-defense' } },
      { base_stat: 90, pokemon_v2_stat: { name: 'speed' } },
    ],
  },
]

Object.defineProperty(global.HTMLElement.prototype, 'offsetHeight', {
  configurable: true,
  value: 500,
})
Object.defineProperty(global.HTMLElement.prototype, 'offsetWidth', {
  configurable: true,
  value: 800,
})

describe('PokemonTable', () => {
  it('renders the grid and shows the Pokémon name', async () => {
    render(<PokemonTable pokemons={mockPokemons} />)

    await waitFor(() => {
      expect(screen.getByText('pikachu')).toBeInTheDocument()
    })
  })

  it('renders Pokémon stats correctly', async () => {
    render(<PokemonTable pokemons={mockPokemons} />)

    await waitFor(() => {
      expect(screen.getByText('35')).toBeInTheDocument() // HP
    })
  })

  it('formats types properly', async () => {
    render(<PokemonTable pokemons={mockPokemons} />)

    await waitFor(() => {
      expect(screen.getByText('electric')).toBeInTheDocument()
    })
  })

  it('renders an empty grid when no pokemons are provided', async () => {
    render(<PokemonTable pokemons={undefined} />)

    await waitFor(() => {
      expect(screen.queryByText(/pikachu/i)).not.toBeInTheDocument()
    })

    expect(screen.getByRole('grid')).toBeInTheDocument()
  })
})
