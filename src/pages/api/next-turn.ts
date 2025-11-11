import type { APIRoute } from 'astro';
import { actions } from 'astro:actions';

export const POST: APIRoute = async ({ request, redirect }) => {
    try {
        const formData = await request.formData();
        const result = await actions.nextTurn({});

        if (result.data?.success) {
            // Redirigir al siguiente jugador
            return redirect(`/game/${encodeURIComponent(result.data.nextPlayer)}`, 302);
        } else {
            return new Response(JSON.stringify({
                error: result.error?.message || 'Error al pasar turno'
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Error al procesar el turno'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};