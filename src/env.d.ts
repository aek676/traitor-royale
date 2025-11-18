declare namespace App {
    interface SessionData {
        players: import("./types").Player[];
        randomCard: import("./types").Card;
        randomPlayerToStart: string;
    }
}

interface ImportMetaEnv {
    readonly CLASH_ROYALE_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
