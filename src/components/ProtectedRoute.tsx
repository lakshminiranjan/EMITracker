import { Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <div className="p-8 text-slate-500">Loading...</div>;
  }

  if (!userId) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
