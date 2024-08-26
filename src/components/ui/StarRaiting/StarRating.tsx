import { useState, FC, useContext } from 'react';
import { Button } from '../Button/Button';
import { Star } from '../Star/Star';
import { RatingContext } from '../../../context/ratingContext';

interface StarRatingProps {
    id: string,
    rating: number,
}

export const StarRating: FC<StarRatingProps> = ({ id, rating }) => {
    const [currentRating, setCurrentRating] = useState<number>(rating);
    const { mutateRating } = useContext(RatingContext);

    return (
        <div className='star-raiting'>
            {
                [...Array(5)].map((_, index) => {
                    return (
                        <Button 
                            type='star' 
                            key={index}
                            onClick={() => {
                                mutateRating({id, rating: currentRating + 1})
                            }} >
                            <Star 
                                className={ index >= currentRating ? 'empty-star' : 'fill-star' }
                                onMouseEnter={() => setCurrentRating(index)}
                                onMouseLeave={() => setCurrentRating(rating)} 
                            />
                        </Button>
                    )
                })
            }
        </div>
    )
}