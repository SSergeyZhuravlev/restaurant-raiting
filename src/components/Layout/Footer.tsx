import { FC } from 'react';
import { ROUTES } from '../../ROUTES';
import { Button } from '../ui/Button/Button';
import { ButtonProps } from '../ui/Button/Button';

interface FooterProps {
    onClick: ButtonProps['onClick']
}

export const Footer: FC<FooterProps> = ({ onClick }) => {
    return (
        <footer>
            <nav>
                {
                    ROUTES.map((route) => {
                        return <Button key={route.id} href={route.path} onClick={onClick}>{route.title}</ Button>
                    })
                }
            </nav>
            <p className="corporation">2024 Eats</p>
        </footer>
    )
}