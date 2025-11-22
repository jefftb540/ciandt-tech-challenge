export type GQLPokemon = {
  id: number
  name: string
  pokemon_v2_pokemonsprites: { sprites: string }[]
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: { name: string }
  }[]
  pokemon_v2_pokemonstats: {
    base_stat: number
    pokemon_v2_stat: {
      name: string
    }
  }[]
}

export type GQLPokemonsResponse = {
  pokemon_v2_pokemon: GQLPokemon[]
  pokemon_v2_pokemon_aggregate: {
    aggregate: { count: number }
  }
}

export type Pokemon = {
  id: number
  name: string
  height: number
  weight: number

  pokemon_v2_pokemonsprites: {
    sprites: {
      other: {
        'official-artwork': {
          front_default: string | null
          front_shiny: string | null
        }
      }
    }
  }[]

  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string
    }
  }[]

  pokemon_v2_pokemonstats: {
    base_stat: number
    pokemon_v2_stat: {
      name: string
    }
  }[]

  pokemon_v2_pokemonspecy: {
    pokemon_v2_pokemonspeciesnames: {
      genus: 'Seed Pokémon'
    }[]
    pokemon_v2_pokemonspeciesflavortexts: {
      flavor_text: string
    }[]

    pokemon_v2_evolutionchain: {
      pokemon_v2_pokemonspecies: {
        id: number
        name: string
        pokemon_v2_pokemons: {
          pokemon_v2_pokemonsprites: [{ sprites: string }]
        }[]
      }[]
    }
  }

  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: {
      name: string
      pokemon_v2_abilityflavortexts: {
        flavor_text: string
      }[]
    }
  }[]
}

export type GQLPokemonResponse = {
  pokemon_v2_pokemon_by_pk: Pokemon | null
}
