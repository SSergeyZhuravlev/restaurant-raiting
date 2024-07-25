import React, { FC } from 'react';
import './Button.css';

type ButtonProps = {
    type?: 'star' | 'outline',
    children?: React.ReactNode,
    onClick: () => void,
}

export const Button: FC<ButtonProps> = ({
    type = 'outline',
    children,
    onClick
}) => {
    return (
        <button
            className={`btn button-${type}`}
            onClick={onClick}
            >
            {children}
        </button>
    )
}