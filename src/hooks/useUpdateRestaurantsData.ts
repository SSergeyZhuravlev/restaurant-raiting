import { updateRestaurantRating } from '../api/api';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient';

export function useUpdateRestaurantRating() {
    const { mutate } = useMutation({
        mutationFn: updateRestaurantRating,

        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['restaurants'] })
        },
        }, queryClient);

        return mutate;
}