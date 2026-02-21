import { Link } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { EMICard } from '@/components/EMICard';
import { PrimaryButton } from '@/components/PrimaryButton';
import { useFinanceData } from '@/hooks/useFinanceData';

export const EMIsPage = () => {
  const { userId } = useAuth();
  const { emis } = useFinanceData(userId ?? undefined);

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your EMIs</h1>
        <Link to="/add-emi">
          <PrimaryButton>Add EMI</PrimaryButton>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {emis.map((emi) => (
          <EMICard key={emi.id} emi={emi} />
        ))}
      </div>
    </section>
  );
};
