export type GQLPokemon = {
  id: number
  name: string
  pokemon_v2_pokemonsprites: { sprites: string }[]
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: { name: string }
  }[]
}

export type GQLPokemonsResponse = {
  pokemon_v2_pokemon: GQLPokemon[]
  pokemon_v2_pokemon_aggregate: {
    aggregate: { count: number }
  }
}
