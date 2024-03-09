import { SearchState } from "@/pages/SearchPage";
import { RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const useSearchRestaurants = (searchstate: SearchState, city?: string) => {
    const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
        const params = new URLSearchParams();
        params.set("searchQuery", searchstate.searchQuery);
        const res = await fetch(`${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`);

        if (!res.ok) {
            throw new Error("Failed to get restaurant")
        }
        return res.json();
    };

    const { data: results, isLoading } = useQuery(["searchRestaurants", searchstate], createSearchRequest,{ enabled: !!city });

    return { results, isLoading }
};