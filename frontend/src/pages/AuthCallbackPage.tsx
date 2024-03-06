import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function AuthCallbackPage() {
    const { user } = useAuth0();
    const navigate = useNavigate();
    const { createUser } = useCreateMyUser();
    const hasCreatedUser = useRef(false); //prevent page re-rendering with user

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({auth0Id: user.sub, email: user.email});
            hasCreatedUser.current = true;
        }
        navigate('/');
    }, [createUser, navigate, user]);
  return (
    <div>Loading... please wait</div>
  );
};
