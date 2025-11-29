import { motion } from "framer-motion";

interface SwipeCardProps {
    isImpostor: boolean;
    image?: string;
}

export function SwipeCard({ isImpostor, image }: SwipeCardProps) {
    return (
        <div className="relative w-40 aspect-3/4 overflow-hidden rounded-2xl shadow-lg group">

            <div className="absolute inset-0 bg-linear-to-br from-[#854d0e] via-[#fcd76b] to-[#854d0e]" />

            <div className="absolute -inset-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_40%,#fff_50%,#0000_60%,#0000_100%)] mix-blend-overlay opacity-100" />

            <div className="absolute inset-1.5 rounded-xl bg-gray-200 overflow-hidden flex flex-col">

                <div className="relative w-full h-full flex items-center justify-center bg-gray-200">
                    {isImpostor ? (
                        <div className="flex flex-col items-center justify-center p-2">
                            <p className="text-xl font-bold text-red-600 drop-shadow-md">IMPOSTOR</p>
                        </div>
                    ) : (
                        <img
                            src={image}
                            alt="Carta de Clash Royale"
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                <motion.div
                    className="absolute inset-0 h-full bg-gray-600 text-white cursor-grab active:cursor-grabbing flex items-center justify-center"
                    role="img"
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={{ top: 0.8 }}
                >
                    <div className="w-10 h-1 bg-white/30 rounded-full mb-auto mt-4" />
                </motion.div>
            </div>
        </div>
    );
}