import { z } from "zod";

export const raritySchema = z.enum([
    "champion",
    "common",
    "epic",
    "legendary",
    "rare",
]);

export const itemIconUrlsSchema = z.object({
    medium: z.string().url(),
    evolutionMedium: z.string().url().optional(),
});

export const supportItemIconUrlsSchema = z.object({
    medium: z.string().url(),
});

export const cardSchema = z.object({
    name: z.string(),
    id: z.number().int(),
    maxLevel: z.number().int(),
    maxEvolutionLevel: z.number().int().optional(),
    elixirCost: z.number().int().optional(),
    iconUrls: itemIconUrlsSchema,
    rarity: raritySchema,
});

export const supportItemSchema = z.object({
    name: z.string().nullable(),
    id: z.number().int(),
    maxLevel: z.number().int(),
    iconUrls: supportItemIconUrlsSchema,
    rarity: raritySchema,
});

export const cardsApiResponseSchema = z.object({
    items: z.array(cardSchema),
    supportItems: z.array(supportItemSchema),
});
