import { render, screen, fireEvent } from '@testing-library/react'
import { PokemonCard } from './PokemonCard'
import { BrowserRouter } from 'react-router-dom'
import { GQLPokemon } from '../../types/Pokemon'
import { useFavorites } from '../../hooks/useFavorites/useFavorites'

// ---- MOCK DO HOOK useFavorites ----
jest.mock('../../hooks/useFavorites/useFavorites')

const mockedUseFavorites = jest.mocked(useFavorites)

const mockPokemon: GQLPokemon = {
  id: 24,
  name: 'arbok',
  pokemon_v2_pokemonsprites: [
    {
      sprites:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
    },
  ],
  pokemon_v2_pokemonstats: [],
  pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: 'poison' } }],
}

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe('PokemonCard', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders pokemon card correctly', () => {
    mockedUseFavorites.mockReturnValue({
      favorites: [],
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
      isFavorite: jest.fn().mockReturnValue(false),
    })

    render(<PokemonCard pokemon={mockPokemon} />, { wrapper: Wrapper })

    expect(screen.getByText(/arbok/i)).toBeInTheDocument()
    expect(screen.getByText(/poison/i)).toBeInTheDocument()

    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.style.backgroundImage).toContain(
      mockPokemon.pokemon_v2_pokemonsprites[0].sprites
    )
  })

  it('falls back to placeholder if no image available', () => {
    const pokemon: GQLPokemon = {
      ...mockPokemon,
      pokemon_v2_pokemonsprites: [{ sprites: '' }],
    }

    mockedUseFavorites.mockReturnValue({
      favorites: [],
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
      isFavorite: jest.fn().mockReturnValue(false),
    })

    render(<PokemonCard pokemon={pokemon} />, { wrapper: Wrapper })

    const imageEl = screen.getByRole('img')
    expect(imageEl).toHaveStyle(
      `background-image: url(/assets/pokemon-placeholder.png)`
    )
  })

  it('calls addFavorite when clicking favorite button', () => {
    const mockAddFavorite = jest.fn()

    mockedUseFavorites.mockReturnValue({
      favorites: [],
      addFavorite: mockAddFavorite,
      removeFavorite: jest.fn(),
      isFavorite: jest.fn().mockReturnValue(false),
    })

    render(<PokemonCard pokemon={mockPokemon} />, { wrapper: Wrapper })

    fireEvent.click(screen.getByTestId('favorite-icon'))

    expect(mockAddFavorite).toHaveBeenCalledWith(mockPokemon)
  })

  it('calls removeFavorite when the pokemon is already a favorite', () => {
    const mockRemoveFavorite = jest.fn()

    mockedUseFavorites.mockReturnValue({
      favorites: [mockPokemon],
      addFavorite: jest.fn(),
      removeFavorite: mockRemoveFavorite,
      isFavorite: jest.fn().mockReturnValue(true),
    })

    render(<PokemonCard pokemon={mockPokemon} />, { wrapper: Wrapper })

    fireEvent.click(screen.getByTestId('favorite-icon'))

    expect(mockRemoveFavorite).toHaveBeenCalledWith(mockPokemon.id)
  })
})
