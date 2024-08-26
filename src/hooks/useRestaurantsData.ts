import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient';
import { getRestaurants } from '../api/api';

export function useRestaurantsData() {
    const { data, status } = useQuery({
        queryFn: getRestaurants,
        queryKey: ['restaurants'],
    }, queryClient);

    return {
        data,
        status
    }
}