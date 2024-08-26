import { FC } from 'react';
import { StarRating } from '../StarRaiting/StarRating';
import { Restaurant } from '../../../api/api';
import './RestaurantCard.css';

export const RestaurantCard: FC<Restaurant> =({ id, name, description, rating, url }) => {
    return (
        <article className='restaurant-card'>
            <div className='restaurant-card__image-wrapper'>
                <img className='restaurant-card__image' src={url} alt={`Изображение ресторана ${name}`} />
            </div>
            <h2 className='restaurant-card__title'>{name}</h2>
            <div className='restaurant-card__description-wrapper'>
                <p className='restaurant-card__description'>{description}</p>
            </div>
            <StarRating id={id} rating={rating} />
        </article>
    )
}