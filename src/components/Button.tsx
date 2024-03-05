import React from 'react';
import style from "./styles/Button.module.scss";

interface ButtonProps {
    name: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
    return (
        <button className={style.default} onClick={onClick}>{name}</button>
    );
}

export default Button;