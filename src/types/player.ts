import type { PlayerSchema } from "@/schemas";
import type { z } from "zod";

export type Player = z.infer<typeof PlayerSchema>;