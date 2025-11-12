import { motion } from "framer-motion";

interface SwipeCardProps {
    isImpostor: boolean;
    image?: string;
}

const imgSrc = "https://cdns3.royaleapi.com/cdn-cgi/image/w=150,h=180,format=auto/static/img/cards/v8-7d088998/goblin-cage-ev1.png";
const reveledImgSrc = "https://static.wikia.nocookie.net/clashroyale/images/3/3a/MysteryCard.png"

export function SwipeCard({ isImpostor = true, image = imgSrc }: SwipeCardProps) {
    return (
        <div className="relative overflow-hidden w-40 rounded-2xl bg-gray-200 shadow-lg bg-clip-border border-4">
            {isImpostor ? (
                <div className="relative w-full aspect-150/180 flex items-center justify-center rounded-lg overflow-hidden">
                    <p className="text-xl font-bold text-red-500">IMPOSTOR</p>
                </div>
            ) : (
                <img src={image} alt={`Carta de Clash Royale`} className="w-full h-fit" />
            )}

            <motion.div
                className="absolute inset-0 h-full bg-center text-white cursor-grab active:cursor-grabbing"
                style={{ backgroundImage: `url(${reveledImgSrc})` }}
                role="img"
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0.8 }}
            />
        </div>
    );
}