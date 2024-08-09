import { useState, FC } from 'react';
import { Button } from '../Button/Button';
import { Star } from '../Star/Star';
import { updateRestaurantRating } from '../../../api/api';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../../api/queryClient';

interface StarRatingProps {
    id: string,
    rating: number,
}

export const StarRating: FC<StarRatingProps> = ({ id, rating }) => {
    const [currentRating, setCurrentRating] = useState<number>(rating);

    const mutateRaitng = useMutation({
        mutationFn: () => updateRestaurantRating(id, currentRating + 1),

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
                                className={ index >= currentRating ? 'empty-star' : 'fill-star' }
                                onMouseEnter={() => setCurrentRating(index)}
                                onMouseLeave={() => setCurrentRating(rating)} 
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