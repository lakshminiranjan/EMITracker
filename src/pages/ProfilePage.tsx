import { useUser, useClerk } from '@clerk/clerk-react';
import { PrimaryButton } from '@/components/PrimaryButton';

export const ProfilePage = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <section className="max-w-xl rounded-xl bg-white p-6 shadow-card">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <div className="mt-5 space-y-3 text-sm text-slate-600">
        <p><span className="font-medium text-slate-900">Name:</span> {user?.fullName}</p>
        <p><span className="font-medium text-slate-900">Email:</span> {user?.primaryEmailAddress?.emailAddress}</p>
        <p><span className="font-medium text-slate-900">Status:</span> <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-primary">Premium</span></p>
      </div>
      <PrimaryButton className="mt-6" onClick={() => void signOut({ redirectUrl: '/login' })}>Logout</PrimaryButton>
    </section>
  );
};
