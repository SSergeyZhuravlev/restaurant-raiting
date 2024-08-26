import { validateResponse } from '../utils/validateResponse';
import { z } from 'zod';

const API_URL = 'http://localhost:3000';

const restaurantSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  rating: z.number(),
  url: z.string(),
});

const restaurantListSchema = z.array(restaurantSchema);

export type Restaurant = z.infer<typeof restaurantSchema>;

export type RestaurantListType = z.infer<typeof restaurantListSchema>;

export const getRestaurants = (): Promise<RestaurantListType> => {
  return fetch(`${API_URL}/restaurants/`)
    .then(validateResponse)
    .then(res => res.json())
    .then(data => restaurantListSchema.parse(data));
}

export type UpdateRestaurantRatingArgs = {
  id: Restaurant['id']
  rating: Restaurant['rating']
}

export const updateRestaurantRating = ({
  id,
  rating,
}: UpdateRestaurantRatingArgs): Promise<Restaurant> =>
  fetch(`${API_URL}/restaurants/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ rating }),
  })
  .then(validateResponse)
  .then((res) => res.json())

