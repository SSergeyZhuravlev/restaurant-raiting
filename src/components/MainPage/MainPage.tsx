import { FC } from 'react';
import { InputField } from '../ui/InputField/InputField';
import { RestaurantList } from '../ui/RestaurantList/RestaurantList';
import { Restaurant } from '../../api';
import { Privacy } from './Privacy';
import { Terms } from './Terms';

interface MainPageProps {
    data: Restaurant[],
    pathname: string,
}

export const MainPage: FC<MainPageProps> = ({ data, pathname }) => {
    switch (pathname) {
        case '/':
            return (
                <>
                    <InputField inputType='search' />
                    <RestaurantList restaurantList={data} />
                </>
            )
    
        case '/privacy-policy':
            return <Privacy />

        case '/terms-of-service':
            return <Terms />
    }
}