import { RestaurantList } from '../ui/RestaurantList/RestaurantList';
import { Privacy } from './Privacy';
import { Terms } from './Terms';

type MainPageProps = {
    pathname: string,
}

export const MainPage = ({ pathname }: MainPageProps) => {
    switch (pathname) {
        case '/':
            return <RestaurantList />
    
        case '/privacy-policy':
            return <Privacy />

        case '/terms-of-service':
            return <Terms />
    }
}