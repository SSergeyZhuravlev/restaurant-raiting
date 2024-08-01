import { FC } from 'react';
import './NavigationLink.css';

interface NavigationLinkProps {
    href: string,
    children: React.ReactNode,
    onClick: (event: React.SyntheticEvent<HTMLAnchorElement>) => void,
}

export const NavigationLink: FC<NavigationLinkProps> = ({ href, onClick, children }) => {
    return <a className='nav-link' href={href} onClick={onClick}>{children}</a>
}