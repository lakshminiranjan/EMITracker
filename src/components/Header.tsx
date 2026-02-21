import { UserButton, useUser } from '@clerk/clerk-react';

export const Header = () => {
  const { user } = useUser();
  return (
    <header className="mb-6 flex items-center justify-between rounded-xl bg-white p-5 shadow-card">
      <div>
        <p className="text-sm text-slate-500">Welcome back,</p>
        <h2 className="text-xl font-semibold text-slate-900">{user?.firstName ?? 'Investor'}</h2>
      </div>
      <UserButton afterSignOutUrl="/login" />
    </header>
  );
};
