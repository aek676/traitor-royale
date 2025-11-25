import { motion } from "framer-motion";

interface SwipeCardProps {
    isImpostor: boolean;
    image?: string;
}

export function SwipeCard({ isImpostor, image }: SwipeCardProps) {
    const newImage = image?.replace("/300", "");

    return (
        <div className="relative overflow-hidden w-40 rounded-2xl bg-gray-200 shadow-lg bg-clip-border border-4">
            {isImpostor ? (
                <div className="relative w-full aspect-152/224 flex items-center justify-center rounded-lg overflow-hidden">
                    <p className="text-xl font-bold text-red-500">IMPOSTOR</p>
                </div>
            ) : (
                <img src={newImage} alt={`Carta de Clash Royale`} className="w-full h-min" />
            )}

            <motion.div
                className="absolute inset-0 h-full bg-gray-600 text-white cursor-grab active:cursor-grabbing"
                role="img"
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0.8 }}
            />
        </div>
    );
}


