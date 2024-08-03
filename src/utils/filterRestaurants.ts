import { Restaurant } from "../api";

export const filterRestaurants = (restaurantList: Restaurant[], str: string) => {
    return restaurantList.filter((restaurant) => restaurant.name
        .trim()
        .toLowerCase()
        .includes(str.trim().toLowerCase()))
}