import { Restaurant } from "../api/api";

export const filterRestaurants = (restaurantList: Restaurant[], str: string): Restaurant[] => {
    return restaurantList.filter((restaurant) => restaurant.name
        .trim()
        .toLowerCase()
        .includes(str.trim().toLowerCase()))
}