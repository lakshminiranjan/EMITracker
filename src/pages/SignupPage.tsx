import { SignUp } from '@clerk/clerk-react';

export const SignupPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
    <SignUp path="/signup" routing="path" signInUrl="/login" forceRedirectUrl="/" />
  </div>
);
