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

interface ImportMetaEnv {
    readonly CLASH_ROYALE_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
