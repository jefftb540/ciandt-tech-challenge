import { render, screen } from '@testing-library/react'
import { PokemonCard } from './PokemonCard'
import { GQLPokemon } from '../../types/Pokemon'

const mockPokemon: GQLPokemon = {
  id: 24,
  name: 'arbok',
  pokemon_v2_pokemonsprites: [
    {
      sprites:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
    },
  ],

  pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: 'poison' } }],
}

describe('PokemonCard', () => {
  it('renders pokemon name', () => {
    render(<PokemonCard pokemon={mockPokemon} />)
    expect(screen.getByRole('heading', { name: /arbok/i })).toBeInTheDocument()
  })

  it('renders type chips', () => {
    render(<PokemonCard pokemon={mockPokemon} />)
    expect(screen.getByText('poison')).toBeInTheDocument()
  })

  it('applies official artwork to background-image', () => {
    render(<PokemonCard pokemon={mockPokemon} />)

    const imageEl = screen.getByRole('img')

    expect(imageEl).toHaveStyle(
      `background-image: url(${mockPokemon.pokemon_v2_pokemonsprites[0].sprites})`
    )
  })

  it('falls back to placeholder if no image available', () => {
    const pokemon: GQLPokemon = {
      ...mockPokemon,
      pokemon_v2_pokemonsprites: [{ sprites: '' }],
    }

    render(<PokemonCard pokemon={pokemon} />)

    const imageEl = screen.getByRole('img')
    expect(imageEl).toHaveStyle(
      `background-image: url(/assets/pokemon-placeholder.png)`
    )
  })
})
