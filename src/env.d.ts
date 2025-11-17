declare namespace App {
    interface SessionData {
        players: import("./interfaces").Player[];
        randomCard: import("./interfaces").Card;
        randomPlayerToStart: string;
    }
}

interface ImportMetaEnv {
    readonly CLASH_ROYALE_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
