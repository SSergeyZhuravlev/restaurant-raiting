import { FC, useState } from 'react';
import { InputField } from '../ui/InputField/InputField';
import { RestaurantList } from '../ui/RestaurantList/RestaurantList';
import { Restaurant } from '../../api';
import { Privacy } from './Privacy';
import { Terms } from './Terms';
import { filterRestaurants } from '../../utils/filterRestaurants';

interface MainPageProps {
    data: Restaurant[],
    pathname: string,
}

export const MainPage: FC<MainPageProps> = ({ data, pathname }) => {
    const [value, setValue] = useState('');
    const [restaurantData, setRestaurantData] = useState(data);

    switch (pathname) {
        case '/':
            return (
                <>
                    <InputField 
                        inputType='search'
                        value={value}
                        onChange={(event) => {
                            setValue(event.target.value);
                            setRestaurantData(filterRestaurants(data, event.target.value))
                        }} />
                    <RestaurantList restaurantList={restaurantData} />
                </>
            )
    
        case '/privacy-policy':
            return <Privacy />

        case '/terms-of-service':
            return <Terms />
    }
}