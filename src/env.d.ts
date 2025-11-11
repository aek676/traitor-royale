/// <reference types="astro/client" />

import type { Player } from "./interfaces";

declare namespace App {
    interface SessionData {
        players: Player[];
        gameStarted?: boolean;
        currentPlayerIndex?: number;
        gamePhase?: 'revealing' | 'playing' | 'finished';
        winner?: string;
    }
}
