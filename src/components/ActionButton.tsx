import { MyButton } from "./MyButton";

export default function StartGameAgain() {
    const handleStartAgain = () => {
        window.location.href = "/";
    };

    return (
        <MyButton
            text="Empezar de nuevo" />
    );
};
