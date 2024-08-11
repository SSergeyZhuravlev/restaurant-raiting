import { BaseLayout } from './components/Layout/BaseLayout';
import { RatingContext } from './context/ratingContext';
import { RestaurantContext } from './context/restaurantContext';
import { useRestaurantsData } from './hooks/useRestaurantsData';
import { updateRestaurantRating } from './api/api';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import './styles.css';

function App() {
  const { data, status } = useRestaurantsData();

  const { mutate } = useMutation({
    mutationFn: updateRestaurantRating,

    onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['restaurants'] })
    },
  }, queryClient)

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
          <RatingContext.Provider value={mutate}>
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
