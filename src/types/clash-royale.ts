import type { cardsApiResponseSchema, cardSchema, itemIconUrlsSchema, raritySchema, supportItemIconUrlsSchema, supportItemSchema } from "@/schemas";
import type { z } from "zod";

export type CardsApiResponse = z.infer<typeof cardsApiResponseSchema>;
export type Card = z.infer<typeof cardSchema>;
export type SupportItem = z.infer<typeof supportItemSchema>;
export type Rarity = z.infer<typeof raritySchema>;
export type ItemIconUrls = z.infer<typeof itemIconUrlsSchema>;
export type SupportItemIconUrls = z.infer<typeof supportItemIconUrlsSchema>;