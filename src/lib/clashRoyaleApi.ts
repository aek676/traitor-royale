import type { Card } from "@/interfaces";

const API_BASE_URL = 'https://api.clashroyale.com/v1';
const API_KEY = import.meta.env.CLASH_ROYALE_API_KEY;

export async function getAllCards(): Promise<Card[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/cards`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la API: ${response.status}`);
        }

        const data = await response.json();
        return data.items as Card[];
    } catch (error) {
        console.error('Error al obtener las cartas:', error);
        throw error;
    }
}

export async function getRandomCard(): Promise<Card | null> {
    try {
        const cards = await getAllCards();
        if (cards.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    } catch (error) {
        console.error('Error al obtener una carta aleatoria:', error);
        throw error;
    }
}