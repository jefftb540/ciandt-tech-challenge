import { useState, useCallback } from 'react'
import { GQLPokemon } from '../../types/Pokemon'

export const useFavorites = () => {
  const STORAGE_KEY = 'favorites'

  const [favorites, setFavorites] = useState<GQLPokemon[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as GQLPokemon[]) : []
    } catch {
      return []
    }
  })

  const addFavorite = useCallback((pokemon: GQLPokemon) => {
    setFavorites((prev) => {
      if (!prev.find((p) => p.id === pokemon.id)) {
        const next = [...prev, pokemon]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        return next
      }
      return prev
    })
  }, [])

  const removeFavorite = useCallback((pokemonId: number) => {
    setFavorites((prev) => {
      const next = prev.filter((p) => p.id !== pokemonId)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))

      return next
    })
  }, [])

  const isFavorite = useCallback(
    (pokemonId: number | undefined) =>
      favorites.some((p) => p.id === pokemonId),
    [favorites]
  )

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }
}
