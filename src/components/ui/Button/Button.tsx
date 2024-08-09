import React, { FC } from 'react';
import './Button.css';

type ButtonProps = {
    type?: 'star' | 'outline',
    children: React.ReactNode,
    href?: string,
    onClick?: () => void,
}

export const Button: FC<ButtonProps> = ({
    type = 'outline',
    children,
    href,
    onClick
}) => {
    return !href ? (
        <button
            className={`btn button-${type}`}
            onClick={onClick}
            >
            {children}
        </button>
    ) : (
        <a className={`btn button-${type}`} href={href} onClick={onClick}>{children}</a>
    )
}