import { cardsApiResponseSchema, type Card } from "@/schemas/clash-royale";
import { z } from "zod";

const API_BASE_URL = 'https://proxy.royaleapi.dev/v1';

function getApiKey(): string | undefined {
    return process.env.CLASH_ROYALE_API_KEY || (import.meta.env?.CLASH_ROYALE_API_KEY as string | undefined);
}

async function getAllCards(): Promise<Card[]> {
    const API_KEY = getApiKey();
    try {
        if (!API_KEY) {
            console.error('CLASH_ROYALE_API_KEY no configurada en el entorno. Revisar docker-compose/env_file.');
            throw new Error('No está configurada CLASH_ROYALE_API_KEY en el entorno');
        }

        const response = await fetch(`${API_BASE_URL}/cards`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const body = await response.text().catch(() => '<no body>');
            console.error('Respuesta de la API', response.status, body);
            throw new Error(`Error en la API: ${response.status}`);
        }

        const data = await response.json();

        try {
            const validatedData = cardsApiResponseSchema.parse(data);
            return validatedData.items;
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.error('Error de validación Zod:', error.errors);
                throw new Error('La respuesta de la API no tiene el formato esperado.');
            }
            throw new Error('Error desconocido al parsear la respuesta de la API.');
        }
    } catch (error) {
        console.error('Error al obtener las cartas:', error);
        throw error;
    }
}

export async function getRandomCard(): Promise<Card | undefined> {
    try {
        const cards = await getAllCards();
        if (cards.length === 0) return undefined;
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    } catch (error) {
        console.error('Error al obtener una carta aleatoria:', error);
        throw error;
    }
}