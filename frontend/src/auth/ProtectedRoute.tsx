import { useAuth0 } from '@auth0/auth0-react';
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <p className='text-center font-bold tracking-tight'>Loading...</p>;
    }

    if (isAuthenticated) {
      return <Outlet />
    }
  return (
    <Navigate to='/' replace />)
};
