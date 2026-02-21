import { Navigate } from 'react-router-dom';
import { SignUp, useAuth } from '@clerk/clerk-react';

export const SignupPage = () => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <div className="p-8 text-slate-500">Loading...</div>;
  }

  if (userId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <SignUp path="/signup" routing="path" signInUrl="/login" />
    </div>
  );
};
