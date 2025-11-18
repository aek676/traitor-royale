import { z } from "zod";

export const PlayerSchema = z.object({
    name: z.string().min(1),
    nextPlayer: z.string().min(1),
    isImpostor: z.boolean(),
})