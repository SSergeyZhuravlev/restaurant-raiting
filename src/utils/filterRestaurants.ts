import { RestaurantListType } from "../api/api";

export const filterRestaurants = (restaurantList: RestaurantListType, str: string): RestaurantListType => {
    return restaurantList.filter((restaurant) => restaurant.name
        .trim()
        .toLowerCase()
        .includes(str.trim().toLowerCase()))
}