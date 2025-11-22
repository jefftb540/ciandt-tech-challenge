export type GQLAbility = {
  id: number
  name: string
}

export type GQLAbilityListResponse = {
  pokemon_v2_ability: GQLAbility[]
}
