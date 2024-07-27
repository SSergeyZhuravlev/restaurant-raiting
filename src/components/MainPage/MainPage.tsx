import { FC } from 'react';
import { InputField } from '../ui/InputField/InputField';
import { RestaurantList } from '../ui/RestaurantList/RestaurantList';
import { Restaurant } from '../../api';

interface MainPageProps {
    data: Restaurant[],
}

export const MainPage: FC<MainPageProps> = ({ data }) => {
    return (
        <>
            <InputField inputType='search' />
            { data && <RestaurantList restaurantList={data} /> }
        </>
    )
}