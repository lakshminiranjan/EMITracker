import { SignIn } from '@clerk/clerk-react';

export const LoginPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
    <SignIn path="/login" routing="path" signUpUrl="/signup" forceRedirectUrl="/" />
  </div>
);
