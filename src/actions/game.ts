import { defineAction } from "astro:actions";
import { z } from 'astro:schema';
import type { Player } from '@/interfaces';
import { getRandomCard } from '@/lib/clashRoyaleApi';
import { randomInt } from 'crypto';

export const game = {
    startGame: defineAction({
        accept: 'form',
        input: z.object({
            players: z.array(z.string()).min(3)
        }),
        handler: async (input, context) => {
            const playerNames = input.players;

            const shuffledPlayers = [...playerNames].sort(() => Math.random() - 0.5);

            const impostorIndex = randomInt(0, shuffledPlayers.length);

            const players: Player[] = shuffledPlayers.map((name, index) => ({
                name,
                nextPlayer: shuffledPlayers.length <= index + 1 ? '-1' : shuffledPlayers[index + 1],
                isImpostor: index === impostorIndex
            }));

            const randomCard = await getRandomCard();

            if (!randomCard) {
                throw new Error('No se pudo obtener una carta aleatoria. Por favor, inténtalo de nuevo.');
            }

            const randomPlayerToStart = playerNames[randomInt(0, playerNames.length)];

            context.session?.set('players', players);
            context.session?.set('randomCard', randomCard);
            context.session?.set('randomPlayerToStart', randomPlayerToStart);

            return {
                success: true,
                playersCount: shuffledPlayers.length,
                gameId: crypto.randomUUID(),
                firstPlayer: players[0].name
            };
        },
    }),
    clearGame: defineAction({
        accept: "form",
        handler: async (_input, context) => {
            context.session?.destroy();
            return {
                success: true
            };
        },
    })
}