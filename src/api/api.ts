import { validateResponse } from "../utils/validateResponse"

const API_URL = 'http://localhost:3000'

export interface Restaurant {
  id: string
  name: string
  description: string
  rating: number
  url: string
}

export const getRestaurants = (): Promise<Restaurant[]> => {
  return fetch(`${API_URL}/restaurants/`)
    .then(validateResponse)
    .then(res => res.json());
}

interface UpdateRestaurantRatingArgs {
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
  }).then((res) => res.json())

