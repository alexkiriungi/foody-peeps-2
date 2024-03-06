import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: String;
    email: String;
};

export const useCreateMyUser = () => {
    const createUserRequest = async (user: CreateUserRequest) => {
        const res = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
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