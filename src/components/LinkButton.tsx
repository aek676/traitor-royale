import { MyButton } from "./MyButton";

interface LinkButtonProps {
    text: string;
    href: string;
}

export default function LinkButton({ text, href }: LinkButtonProps) {
    return <MyButton text={text} onClick={() => window.location.href = href} />;
};
