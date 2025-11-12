import { Button } from "@/components/ui/button"; // Ajusta esta ruta a tu instalación de ShadCN

interface MyButtonProps {
    text: string;
    href: string;
}

export function MyButton({ text, href }: MyButtonProps) {
    const manejarClick = () => {
        window.location.href = href;
    };

    return (
        <Button
            onClick={manejarClick}
            size="lg"
            className="text-xl px-10 py-6 bg-button hover:bg-button/90 text-button-foreground shadow-[0_0_30px_hsl(var(--button)/0.5)] hover:shadow-[0_0_50px_hsl(var(--button)/0.7)] transition-all duration-300">
            {text}
        </Button>
    );
}