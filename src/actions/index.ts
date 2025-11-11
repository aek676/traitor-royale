import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import type { Player } from '@/interfaces';

export const server = {
  startGame: defineAction({
    input: z.object({
      players: z.array(z.string()).min(3)
    }),
    handler: async (input, context) => {
      const playerNames = input.players;

      // Determinar quién es el impostor (aleatorio)
      const impostorIndex = Math.floor(Math.random() * playerNames.length);

      // Crear array de jugadores con roles asignados
      const players: Player[] = playerNames.map((name, index) => ({
        name,
        nextPlayer: playerNames.length <= index + 1 ? '-1' : playerNames[index + 1],
        isImpostor: index === impostorIndex
      }));

      // Mezclar el orden de los jugadores para la sesión
      const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

      // Guardar en sesión
      await context.session?.set('players', shuffledPlayers);
      await context.session?.set('currentPlayerIndex', 0);
      await context.session?.set('gameStarted', true);
      await context.session?.set('gamePhase', 'revealing'); // Fase de revelación de roles

      return {
        success: true,
        playersCount: shuffledPlayers.length,
        gameId: crypto.randomUUID(),
        firstPlayer: shuffledPlayers[0].name
      };
    },
  }),
};
