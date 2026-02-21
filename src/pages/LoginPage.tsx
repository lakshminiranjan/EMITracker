import { Navigate } from 'react-router-dom';
import { SignIn, useAuth } from '@clerk/clerk-react';

export const LoginPage = () => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <div className="p-8 text-slate-500">Loading...</div>;
  }

  if (userId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/signup"
        forceRedirectUrl="/"
        fallbackRedirectUrl="/"
      />
    </div>
  );
};
