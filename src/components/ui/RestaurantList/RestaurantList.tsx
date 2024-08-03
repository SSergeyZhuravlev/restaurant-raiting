import { FC } from 'react';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { Restaurant } from '../../../api/api'
import './RestaurantList.css';

interface RestaurantListProps {
    restaurantList: Restaurant[],
}

export const RestaurantList: FC<RestaurantListProps> = ({ restaurantList }) => {
    return (
        restaurantList?.length ? (
            <ul className='restaurant-list'>
                {
                    restaurantList.map(({ id, name, description, raiting, url }) => {
                        return <li key={id} className='restaurant-list__item'>
                            <RestaurantCard id={id} name={name} description={description} url={url} raiting={raiting} />
                        </li>})
                }
            </ul>
        ) : null
    )
}