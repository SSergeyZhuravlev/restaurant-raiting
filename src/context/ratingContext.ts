import { createContext } from "react";
import { Restaurant, UpdateRestaurantRatingArgs } from "../api/api";
import { UseMutateFunction } from "@tanstack/react-query";

type ratingContext = {
    mutateRating: UseMutateFunction<Restaurant, Error, UpdateRestaurantRatingArgs, unknown>
}


export const RatingContext = createContext<ratingContext>({
    mutateRating: () => {}
})