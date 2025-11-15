import { MyButton } from "./MyButton";

interface StartGameAgainButtonProps {
    text: string;
}

export default function ActionButton({ text }: StartGameAgainButtonProps) {
    return <MyButton text={text} type="submit" />;
};
