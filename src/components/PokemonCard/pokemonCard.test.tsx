import { render, screen } from '@testing-library/react'
import { PokemonCard } from './PokemonCard'
import { Pokemon } from '../../types/Pokemon'

const mockPokemon: Pokemon = {
  name: 'arbok',
  sprites: {
    front_default: 'sprite.png',
  },
  types: [{ type: { name: 'poison' } }],
  other: {
    'official-artwork': {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
    },
  },
} as unknown as Pokemon

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
      `background-image: url(${mockPokemon.other?.['official-artwork'].front_default})`
    )
  })

  it('falls back to sprite when artwork missing', () => {
    const pokemon = {
      ...mockPokemon,
      other: { 'official-artwork': { front_default: null } },
    } as unknown as Pokemon

    render(<PokemonCard pokemon={pokemon} />)

    const imageEl = screen.getByRole('img')
    expect(imageEl).toHaveStyle(`background-image: url(sprite.png)`)
  })

  it('falls back to placeholder if no image available', () => {
    const pokemon = {
      ...mockPokemon,
      sprites: { front_default: null },
      other: { 'official-artwork': { front_default: null } },
    } as unknown as Pokemon

    render(<PokemonCard pokemon={pokemon} />)

    const imageEl = screen.getByRole('img')
    expect(imageEl).toHaveStyle(
      `background-image: url(/assets/pokemon-placeholder.png)`
    )
  })
})
