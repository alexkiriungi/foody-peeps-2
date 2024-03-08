import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyRestaurantRequest = async (restaurantFormData: FormData):Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();
        const res = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: restaurantFormData,
        });

        if(!res.ok) {
            throw new Error("Error Failed to create restaurant");
        }

        return res.json();
    };

    const { mutate: createRestaurant, isLoading, isSuccess, error} = useMutation(createMyRestaurantRequest);

    if (isSuccess) {
        toast.success("Restaurant created!")
    }

    if (error) {
        toast.error("Unable to update restaurant");
    }
    return { createRestaurant, isLoading};
};

export const useGetMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const useGetMyRestaurantRequest = async (): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();

        const res = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (!res.ok) {
            throw new Error("Failed to get restaurant");
        }
        return res.json();
    };

    const { data: restaurant, isLoading } = useQuery("fetchMyRestaurant", useGetMyRestaurantRequest);

    return { restaurant, isLoading };
};
