import { motion } from "framer-motion";

interface SwipeCardProps {
    isImpostor: boolean;
    image?: string;
}

export function SwipeCard({ isImpostor, image }: SwipeCardProps) {
    return (
        // 1. CONTENEDOR PRINCIPAL: Define el tamaño y la forma externa
        // He añadido 'aspect-[3/4]' para asegurar que tenga altura de carta, ya que 'absolute' lo requiere.
        <div className="relative w-40 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg group">

            {/* 2. CAPA BASE: ORO ESTÁTICO (Color de fondo del borde) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#854d0e] via-[#fcd76b] to-[#854d0e]" />

            {/* 3. CAPA ANIMADA: LUZ QUE GIRA (El brillo lento) */}
            <div className="absolute -inset-[100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_40%,#fff_50%,#0000_60%,#0000_100%)] mix-blend-overlay opacity-100" />

            {/* 4. MÁSCARA INTERIOR: Donde va el contenido real */}
            {/* 'inset-[6px]' define el grosor del borde dorado */}
            <div className="absolute inset-[6px] rounded-xl bg-gray-200 overflow-hidden flex flex-col">

                {/* Lógica del contenido (Impostor o Imagen) */}
                <div className="relative w-full h-full flex items-center justify-center bg-gray-200">
                    {isImpostor ? (
                        <div className="flex flex-col items-center justify-center p-2">
                            {/* He añadido un icono o estilo extra para que resalte */}
                            <p className="text-xl font-bold text-red-600 drop-shadow-md">IMPOSTOR</p>
                        </div>
                    ) : (
                        <img
                            src={image} // Corregido de 'newImage' a 'image' (prop)
                            alt="Carta de Clash Royale"
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* 5. Overlay Deslizable (Framer Motion) */}
                {/* Está dentro de la máscara para no tapar el borde dorado */}
                <motion.div
                    className="absolute inset-0 h-full bg-gray-600 text-white cursor-grab active:cursor-grabbing flex items-center justify-center"
                    role="img"
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={{ top: 0.8 }}
                >
                    {/* Opcional: Un pequeño indicador visual para arrastrar */}
                    <div className="w-10 h-1 bg-white/30 rounded-full mb-auto mt-4" />
                </motion.div>
            </div>
        </div>
    );
}