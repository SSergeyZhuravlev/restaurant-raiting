import React, { FC } from 'react';
import { ROUTES } from '../../ROUTES';
import { NavigationLink } from '../NavigationLink/NavigationLink';

interface FooterProps {
    onClick: (event: React.SyntheticEvent<HTMLAnchorElement>) => void,
}

export const Footer: FC<FooterProps> = ({ onClick }) => {
    return (
        <footer>
            <nav>
                {
                    ROUTES.map((route) => {
                        return <NavigationLink key={route.id} href={route.path} onClick={onClick}>{route.title}</NavigationLink>
                    })
                }
            </nav>
            <p className="corporation">2022 Eats</p>
        </footer>
    )
}