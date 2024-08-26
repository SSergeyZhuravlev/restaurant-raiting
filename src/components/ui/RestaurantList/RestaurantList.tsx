import { useContext, useState, useEffect } from 'react';
import { RestaurantContext } from '../../../context/restaurantContext';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { filterRestaurants } from '../../../utils/filterRestaurants';
import { InputField } from '../InputField/InputField';
import { RestaurantListType } from '../../../api/api';
import './RestaurantList.css';

export const RestaurantList = () => {
    const { data } = useContext(RestaurantContext);
    const [value, setValue] = useState('');
    const [restaurantData, setRestaurantData] = useState<RestaurantListType>(data);

    useEffect(() => {
        setRestaurantData(data)
    }, [data]);

    return (
        <section>
            <InputField 
                inputType='search'
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                    setRestaurantData(filterRestaurants(data, event.target.value));
            }} />
            {
                restaurantData.length ? (
                    <ul className='restaurant-list'>
                        {
                            restaurantData.map(({ id, name, description, rating, url }) => {
                                return <li key={id} className='restaurant-list__item'>
                                    <RestaurantCard id={id} name={name} description={description} url={url} rating={rating} />
                                </li>})
                        }
                    </ul>
                ) : <div>Ничего не найдено :(</div>
            }
        </section>
    )
}

