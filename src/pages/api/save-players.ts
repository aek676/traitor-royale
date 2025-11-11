import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, session }) => {
    try {
        const { players } = await request.json();

        if (!players || !Array.isArray(players)) {
            return new Response(JSON.stringify({
                error: 'Se requiere un array de jugadores'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (!session) {
            return new Response(JSON.stringify({
                error: 'Sesión no disponible'
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Guardar jugadores en la sesión
        session.set('players', players);
        session.set('gameStarted', true);

        return new Response(JSON.stringify({
            success: true,
            players
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Error al guardar los jugadores'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
