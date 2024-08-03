import { FC } from 'react';
import { StarRaiting } from '../StarRaiting/StarRaiting';
import './RestaurantCard.css';
// import { updateRestaurantRating } from '../../../api/api';

interface RestaurantCardProps {
    id: string,
    name: string,
    description: string,
    raiting: number,
    url: string,
}

export const RestaurantCard: FC<RestaurantCardProps> =({ id, name, description, raiting, url }) => {
    return (
        <article className='restaurant-card'>
            <div className='restaurant-card__image-wrapper'>
                <img className='restaurant-card__image' src={url} alt={`Изображение ресторана ${name}`} />
            </div>
            <h2 className='restaurant-card__title'>{name}</h2>
            <div className='restaurant-card__description-wrapper'>
                <p className='restaurant-card__description'>{description}</p>
            </div>
            <StarRaiting id={id} raiting={raiting} />
        </article>
    )
}