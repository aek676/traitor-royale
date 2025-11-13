import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BattleBannerImpostor } from "@/assets";

export default function PressToReveal() {
    const [isVisible, setIsVisible] = useState(true);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const scaleFactor = 0.3;

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
        };
        img.src = BattleBannerImpostor.src;
    }, []);

    const handleClick = () => {
        setIsVisible(false);
    };

    const scaledWidth = imageSize.width * scaleFactor;
    const scaledHeight = imageSize.height * scaleFactor;

    return (
        <div className="relative rounded-2xl">
            <div
                className="relative flex items-center justify-center rounded-lg "
                style={{ width: scaledWidth || 'auto', height: scaledHeight || 'auto' }}
            >
                <p className="text-xl font-bold text-red-500">IMPOSTOR</p>
            </div>

            <motion.div
                onTap={() => {a}}
                className="absolute inset-0 h-full bg-transparent cursor-pointer"
                style={{ backgroundImage: `url(${BattleBannerImpostor.src})`, backgroundSize: 'cover' }}
            />

        </div>
    );
};
