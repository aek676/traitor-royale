import type { Card, Player } from "./interfaces";

declare namespace App {
    interface SessionData {
        players: Player[];
        randomCard?: Card;
        randomPlayerToStart?: string;
    }
}

interface ImportMetaEnv {
    readonly CLASH_ROYALE_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
