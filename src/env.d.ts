/// <reference types="astro/client" />

declare namespace App {
    interface SessionData {
        players: string[];
        gameStarted?: boolean;
        currentPlayer?: string;
    }
}
