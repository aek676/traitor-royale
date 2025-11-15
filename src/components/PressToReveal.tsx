import { motion } from "framer-motion";
import { BattleBannerImpostor } from "@/assets";
import { useState } from "react";

interface PressToRevealProps {
    nameImpostor: string;
}

export default function PressToReveal({ nameImpostor }: PressToRevealProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className="relative overflow-hidden w-full aspect-4/1 max-w-96 sm:max-w-2xl">
            <div
                className="absolute inset-0 flex items-center justify-center"
            >
                <p className="text-xl font-bold text-red-500">{nameImpostor}</p>
            </div>

            <motion.div
                animate={isAnimating && { x: "-100%", opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onTap={() => { setIsAnimating(true) }}
                className="absolute inset-0 h-full cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${BattleBannerImpostor.src})` }}
            />

        </div>
    );
};
