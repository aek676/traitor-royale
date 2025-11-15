import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { actions } from "astro:actions";
import type { Player } from "@/interfaces";

interface ConfiguracionJuegoProps {
    onGameStartRedirect: string;
    minPlayers?: number;
}

export function SetupScreen({
    onGameStartRedirect,
    minPlayers = 3,
}: ConfiguracionJuegoProps) {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState<string[]>([]);

    const canStart = players.length >= minPlayers;
    const remainingPlayers = minPlayers - players.length;

    const handleAddPlayer = () => {
        if (playerName.trim()) {
            setPlayers([...players, playerName.trim()]);
            setPlayerName("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddPlayer();
        }
    };

    const onRemovePlayer = (indexToRemove: number) => {
        setPlayers(players.filter((_, index) => index !== indexToRemove));
    };

    const onStartGame = async () => {
        if (!canStart) return;

        try {
            const result = await actions.startGame({ players });

            if (result.data?.success) {
                const firstPlayer = result.data.firstPlayer;
                window.location.href = `/game/${encodeURIComponent(firstPlayer)}`;
            } else {
                console.error('Error al iniciar el juego:', result.error);
            }
        } catch (error) {
            console.error('Error al iniciar el juego:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-background to-accent/20 p-4">
            <Card className="w-full max-w-2xl bg-card/90 backdrop-blur border-border p-8 space-y-6 animate-in fade-in duration-500">
                <div className="text-center space-y-2">
                    <h2 className="text-4xl font-bold text-foreground">Configuración</h2>
                    <p className="text-muted-foreground">
                        Añade al menos {minPlayers} jugadores para empezar
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <Label htmlFor="playerName" className="text-foreground">
                                Nombre del jugador
                            </Label>
                            <Input
                                id="playerName"
                                value={playerName} // ¡Importante! Conecta el estado
                                onChange={(e) => setPlayerName(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Escribe un nombre..."
                                className="mt-1 bg-muted/50 border-border text-foreground"
                            />
                        </div>
                        <div className="flex items-end">
                            <Button
                                onClick={handleAddPlayer}
                                disabled={!playerName.trim()}
                                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                            >
                                Añadir
                            </Button>
                        </div>
                    </div>

                    {players.length > 0 && (
                        <div className="space-y-2">
                            <Label className="text-foreground">
                                Jugadores ({players.length})
                            </Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                                {players.map((player, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between bg-muted/50 p-3 rounded-lg border border-border"
                                    >
                                        <span className="text-foreground font-medium">
                                            {player}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => onRemovePlayer(index)}
                                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <Button
                    onClick={onStartGame}
                    disabled={!canStart}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6 shadow-[0_0_20px_hsl(var(--secondary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)] transition-all duration-300"
                >
                    {canStart
                        ? "Repartir Roles"
                        : `Necesitas ${remainingPlayers} jugador${remainingPlayers === 1 ? "" : "es"
                        } más`}
                </Button>
            </Card>
        </div>
    );
}