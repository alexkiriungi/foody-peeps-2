import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: String;
    email: String;
};

export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();
    const createUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const res = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(user)
        });
        if (!res.ok) {
            throw new Error("Failed to create User");
        }
    };
    const { mutateAsync: createUser, isLoading, isError, isSuccess} = useMutation(createUserRequest);
    return {
        createUser,
        isLoading,
        isError,
        isSuccess
    };
};

type updateMyUserRequest ={
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateMyUserRequest = async (formData: updateMyUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const res = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!res.ok) {
            throw new Error("Failed to update user");
        }

        return res.json();
    };

    const { mutateAsync: updateUser, isLoading, isSuccess, error, reset} = useMutation(updateMyUserRequest);

    if (isSuccess) {
        toast.success('User profile updated!')
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return { updateUser, isLoading };
};

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyUserRequest = async () => {
        const accessToken = getAccessTokenSilently();
        const res = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch user");
        }
        return res.json();
    };

    const { data: currentUser, isLoading, error } = useQuery('fetchCurrentUser', getMyUserRequest);

    if (error) {
        toast.error(error.toString());
    }
    return { currentUser, isLoading };
};