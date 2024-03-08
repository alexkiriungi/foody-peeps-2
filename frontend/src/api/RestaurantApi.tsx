import { RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.API_BASE_URL;
export const useSearchRestaurants = (city?: string) => {
    const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
        const res = await fetch(`${API_BASE_URL}/api/restaurant/search/${city}`);


        if (!res.ok) {
            throw new Error("Failed to get restaurant")
        }
        return res.json();
    };

    const { data: results, isLoading } = useQuery(["searchRestaurants"], createSearchRequest,{ enabled: !!city });

    return { results, isLoading }
};