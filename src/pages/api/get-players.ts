import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ session }) => {
    try {
        if (!session) {
            return new Response(JSON.stringify({
                error: 'Sesión no disponible'
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const players = await session.get('players');
        const gameStarted = await session.get('gameStarted');

        return new Response(JSON.stringify({
            players: players || [],
            gameStarted: gameStarted || false
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Error al obtener los jugadores'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
