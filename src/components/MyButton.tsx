interface MyButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
}

export function MyButton({ text, onClick, type = "button" }: MyButtonProps) {
    return (
        <button className="couche1" onClick={onClick} type={type}>
            <div className="couche2">
                <div className="couche23">
                    <div className="couche3">
                        <div className="couche4">
                            <div className="battle">{text}</div>
                            <div className="couche5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}