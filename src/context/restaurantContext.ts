import { createContext } from "react";
import { Restaurant } from "../api/api";

type RestaurantsContextParams = {
    data: Restaurant[] | [],
    status: string,
}

export const RestaurantContext = createContext<RestaurantsContextParams>({
    data: [],
    status: '',
});