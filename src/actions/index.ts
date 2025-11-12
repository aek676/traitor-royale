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

      const shuffledPlayers = [...playerNames].sort(() => Math.random() - 0.5);

      const impostorIndex = Math.floor(Math.random() * shuffledPlayers.length);

      const players: Player[] = shuffledPlayers.map((name, index) => ({
        name,
        nextPlayer: shuffledPlayers.length <= index + 1 ? '-1' : shuffledPlayers[index + 1],
        isImpostor: index === impostorIndex
      }));

      await context.session?.set('players', players);
      await context.session?.set('currentPlayerIndex', 0);
      await context.session?.set('gameStarted', true);
      await context.session?.set('gamePhase', 'revealing'); 

      return {
        success: true,
        playersCount: shuffledPlayers.length,
        gameId: crypto.randomUUID(),
        firstPlayer: players[0].name
      };
    },
  }),
};
