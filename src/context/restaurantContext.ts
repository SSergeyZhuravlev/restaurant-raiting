import { createContext } from "react";
import { RestaurantListType } from "../api/api";

type RestaurantsContextParams = {
    data: RestaurantListType | [],
    status: string,
}

export const RestaurantContext = createContext<RestaurantsContextParams>({
    data: [],
    status: '',
});