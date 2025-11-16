interface MyButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
}

export function MyButton({ text, onClick, type = "button" }: MyButtonProps) {
    return (
        // 1. Cambiamos el <div> exterior por un <button>
        // 2. Movemos las props 'onClick' y 'type' aquí
        <button className="couche1" onClick={onClick} type={type}>
            <div className="couche2">
                <div className="couche23">
                    <div className="couche3">
                        <div className="couche4">
                            {/* 3. Cambiamos el <button> interno por un <div> */}
                            <div className="battle">{text}</div>
                            <div className="couche5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}