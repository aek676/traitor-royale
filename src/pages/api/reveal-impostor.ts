import type { APIRoute } from 'astro';
import { actions } from 'astro:actions';

export const POST: APIRoute = async ({ request, redirect }) => {
    try {
        const result = await actions.revealImpostor({});

        if (result.data?.success) {
            // Redirigir a la página principal del juego con el resultado
            return redirect(`/game?impostor=${encodeURIComponent(result.data.impostor)}&winner=${result.data.winner}`, 302);
        } else {
            return new Response(JSON.stringify({
                error: result.error?.message || 'Error al revelar impostor'
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Error al revelar impostor'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};