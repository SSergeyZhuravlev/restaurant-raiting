import { BaseLayout } from './components/Layout/BaseLayout';
import { RatingContext } from './context/ratingContext';
import { RestaurantContext } from './context/restaurantContext';
import { useRestaurantsData } from './hooks/useRestaurantsData';
import { useUpdateRestaurantRating } from './hooks/useUpdateRestaurantsData';
import './styles.css';

function App() {
  const { data, status } = useRestaurantsData();
  const mutate = useUpdateRestaurantRating();

  switch (status) {
    case 'pending':
      return (
        <main>
          <p>Пожалуйста, подождите</p>
        </main>
      )

    case 'success':
      return data && (
        <RestaurantContext.Provider value={{ data, status }}>
          <RatingContext.Provider value={{ mutateRating: mutate }}>
            <BaseLayout />
          </RatingContext.Provider>
        </RestaurantContext.Provider>
      )

    case 'error':
      return (
        <main>
          <p>Error!</p>
        </main>
      )
  }
}

export default App
