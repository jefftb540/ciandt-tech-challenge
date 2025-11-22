import { render, screen } from '@testing-library/react'
import { PokemonGrid } from './PokemonGrid'
import { GQLPokemon } from '../../types/Pokemon'

const mockPokemons: GQLPokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    pokemon_v2_pokemonsprites: [
      {
        sprites:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
      },
    ],
    pokemon_v2_pokemonstats: [],
    pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: 'poison' } }],
  },
  {
    id: 2,
    name: 'ivysaur',
    pokemon_v2_pokemonsprites: [
      {
        sprites:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
      },
    ],
    pokemon_v2_pokemonstats: [],
    pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: 'poison' } }],
  },
]

jest.mock('../PokemonCard/PokemonCard', () => ({
  PokemonCard: ({ pokemon }: any) => (
    <div data-testid="pokemon-card">{pokemon.name}</div>
  ),
}))

describe('PokemonGrid', () => {
  it('renders without crashing', () => {
    render(<PokemonGrid pokemons={mockPokemons} />)
    expect(screen.getByText('bulbasaur')).toBeDefined()
  })

  it('renders correct number of PokemonCards', () => {
    render(<PokemonGrid pokemons={mockPokemons} />)
    const cards = screen.getAllByTestId('pokemon-card')
    expect(cards).toHaveLength(mockPokemons.length)
    expect(cards[0]).toHaveTextContent('bulbasaur')
    expect(cards[1]).toHaveTextContent('ivysaur')
  })

  it('renders empty state if pokemons prop is empty', () => {
    render(<PokemonGrid pokemons={[]} />)
    expect(screen.getByText('No Pokémons found.')).toBeDefined()
  })
})
