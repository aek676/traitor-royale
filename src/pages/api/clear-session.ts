import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ session }) => {
    try {
        if (!session) {
            return new Response(JSON.stringify({
                error: 'Sesión no disponible'
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Limpiar la sesión
        await session.destroy();

        return new Response(JSON.stringify({
            success: true,
            message: 'Sesión eliminada correctamente'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Error al limpiar la sesión'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
