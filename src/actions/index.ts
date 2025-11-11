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

  nextTurn: defineAction({
    input: z.object({}),
    handler: async (input, context) => {
      const players = await context.session?.get('players') as Player[];
      const currentPlayerIndex = await context.session?.get('currentPlayerIndex') as number;
      const gamePhase = await context.session?.get('gamePhase') as string;

      if (!players || currentPlayerIndex === undefined) {
        throw new Error('No hay juego activo');
      }

      // Si estamos en fase de revelación, pasar al siguiente jugador
      if (gamePhase === 'revealing') {
        const nextIndex = (currentPlayerIndex + 1) % players.length;

        // Si hemos completado una ronda completa, cambiar a fase de juego
        if (nextIndex === 0) {
          await context.session?.set('gamePhase', 'playing');
        }

        await context.session?.set('currentPlayerIndex', nextIndex);

        return {
          success: true,
          nextPlayer: players[nextIndex].name,
          gamePhase: nextIndex === 0 ? 'playing' : 'revealing',
          completedRound: nextIndex === 0
        };
      }

      // Lógica para fase de juego (turnos normales)
      const nextIndex = (currentPlayerIndex + 1) % players.length;
      await context.session?.set('currentPlayerIndex', nextIndex);

      return {
        success: true,
        nextPlayer: players[nextIndex].name,
        gamePhase: 'playing'
      };
    },
  }),

  revealImpostor: defineAction({
    input: z.object({}),
    handler: async (input, context) => {
      const players = await context.session?.get('players') as Player[];
      const gameStarted = await context.session?.get('gameStarted') as boolean;

      if (!gameStarted || !players) {
        throw new Error('No hay juego activo');
      }

      const impostor = players.find(player => player.isImpostor);

      if (!impostor) {
        throw new Error('No se pudo encontrar al impostor');
      }

      // Cambiar a fase de fin del juego
      await context.session?.set('gamePhase', 'finished');
      await context.session?.set('winner', 'citizens'); // Los ciudadanos ganan al revelar

      return {
        success: true,
        impostor: impostor.name,
        winner: 'citizens'
      };
    },
  }),
};
