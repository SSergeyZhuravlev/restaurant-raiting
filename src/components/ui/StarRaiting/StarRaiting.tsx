import { useState, FC } from 'react';
import { Button } from '../Button/Button';
import { Star } from '../Star/Star';

interface StarRaitingProps {
    raiting: number,
}

export const StarRaiting: FC<StarRaitingProps> = ({ raiting }) => {
    const [hover, setHover] = useState<number>(raiting);

    return (
        <div className='star-raiting'>
            {
                [...Array(5)].map((_item, index) => {
                    return (
                        <Button onClick={() => console.log(index + 1)} type='star' key={crypto.randomUUID()}>
                            <Star 
                                className={ (index >= raiting) || (index >= hover) ? 'empty-star' : 'fill-star' }
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(raiting)} />
                        </Button>
                    )
                })
            }
        </div>
    )
}