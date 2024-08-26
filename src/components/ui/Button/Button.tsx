import React, { FC } from 'react';
import './Button.css';

export type ButtonProps = {
    type?: 'star' | 'outline',
    children: React.ReactNode,
    href?: string,
    onClick: (event: React.BaseSyntheticEvent) => void,
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