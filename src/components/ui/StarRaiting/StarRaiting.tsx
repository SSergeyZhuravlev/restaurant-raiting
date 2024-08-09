import { useState, FC } from 'react';
import { Button } from '../Button/Button';
import { Star } from '../Star/Star';
import { updateRestaurantRating } from '../../../api/api';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../../api/queryClient';

interface StarRaitingProps {
    id: string,
    raiting: number,
}

export const StarRaiting: FC<StarRaitingProps> = ({ id, raiting }) => {
    const [hover, setHover] = useState<number>(raiting);

    const mutateRaitng = useMutation({
        mutationFn: () => updateRestaurantRating(id, hover + 1),

        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['restaurants'] })
        },
    }, queryClient)

    return (
        <div className='star-raiting'>
            {
                [...Array(5)].map((_item, index) => {
                    return (
                        <Button 
                            type='star' 
                            key={index}>
                            <Star 
                                className={ index >= hover ? 'empty-star' : 'fill-star' }
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(raiting)} 
                                onClick={() => {
                                    mutateRaitng.mutate()
                                }} 
                            />
                        </Button>
                    )
                })
            }
        </div>
    )
}