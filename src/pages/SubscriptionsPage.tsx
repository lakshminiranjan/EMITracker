import { Link } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { SubscriptionCard } from '@/components/SubscriptionCard';
import { PrimaryButton } from '@/components/PrimaryButton';
import { useFinanceData } from '@/hooks/useFinanceData';

export const SubscriptionsPage = () => {
  const { userId } = useAuth();
  const { subscriptions } = useFinanceData(userId ?? undefined);

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Subscriptions</h1>
        <Link to="/add-subscription">
          <PrimaryButton>Add Subscription</PrimaryButton>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {subscriptions.map((subscription) => (
          <SubscriptionCard key={subscription.id} subscription={subscription} />
        ))}
      </div>
    </section>
  );
};
