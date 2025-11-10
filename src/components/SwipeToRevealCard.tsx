import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export function SwipeCard() {
    return (
        <Card className="relative w-80 h-80 overflow-hidden rounded-2xl bg-gray-200 shadow-lg">

            <CardContent className="p-5">
                <h3 className="text-xl font-bold text-gray-900">Contenido Secreto</h3>
                <p className="mt-2 text-gray-700">
                    Este es el contenido que se revela al deslizar.
                </p>
            </CardContent>

            <CardContent>
                <motion.div
                    className="absolute inset-0 h-full bg-blue-600 p-5 text-white cursor-grab active:cursor-grabbing"
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0, }}
                    dragElastic={{ top: 0.5, }}
                >
                    <h2 className="text-2xl font-bold">Contenido Exterior</h2>
                    <p className="mt-2">↑ Arrástrame hacia arriba ↑</p>
                </motion.div>
            </CardContent>
        </Card>
    );
}