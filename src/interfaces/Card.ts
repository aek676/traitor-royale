export interface Card {
    name: string,
    id: number,
    maxLevel: number,
    elixirCost: number,
    iconUrls: {
        medium: string
    },
    rarity: string
}