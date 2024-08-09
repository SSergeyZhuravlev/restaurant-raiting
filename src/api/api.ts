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
    .then(res => res.json());
}

export const updateRestaurantRating = (id: Restaurant['id'], rating: Restaurant['rating']): Promise<Restaurant> =>
  fetch(`${API_URL}/restaurants/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ rating }),
  }).then((res) => res.json())
