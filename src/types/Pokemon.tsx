export type StatName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: StatName
    url: string
  }
}

export interface PokemonType {
  slot: number
  type: { name: string; url: string }
}

export interface PokemonSprites {
  front_default?: string | null
  other?: { 'official-artwork'?: { front_default?: string | null } }
}

export interface Pokemon {
  id: number
  name: string
  base_experience?: number
  height?: number
  weight?: number
  types: PokemonType[]
  abilities?: {
    ability: { name: string; url: string }
    is_hidden: boolean
    slot: number
  }[]
  stats: PokemonStat[]
  sprites?: PokemonSprites
  other?: {
    'official-artwork': { front_default?: string | null }
  }
}
