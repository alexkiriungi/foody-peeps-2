import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CheckOutSessionRequest = {
    cartItems: {
        menuItemId: string;
        name: string;
        quantity: string;
    }[];
    deliveryDetails: {
        email: string;
        name: string;
        addressLine1: string;
        city: string;
    };
    restaurantId: string;
};

export const useCreateCheckoutSession = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createCheckoutSessionRequest = async (checkoutSessionRequest: CheckOutSessionRequest) => {
        const accessToken = await getAccessTokenSilently();

        const res = await fetch(`${API_BASE_URL}/api/order/checkout/create-checkout-session`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(checkoutSessionRequest)
        });

        if (!res.ok) {
            throw new Error("Unable to create checkout session");
        }

        return res.json()
    };
    const { mutateAsync: createCheckoutSession, isLoading, error, reset }= useMutation(createCheckoutSessionRequest);
     if (error) {
        toast.error(error.toString());
        reset();
     }

     return { createCheckoutSession, isLoading };
};