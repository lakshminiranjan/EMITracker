import type { Subscription } from '@/types';

export const SubscriptionCard = ({ subscription }: { subscription: Subscription }) => (
  <article className="rounded-xl bg-white p-5 shadow-card">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-slate-900">{subscription.name}</h3>
        <p className="text-sm text-slate-500">{subscription.category}</p>
      </div>
      <p className="text-lg font-semibold text-primary">₹{subscription.amount.toLocaleString('en-IN')}</p>
    </div>
    <p className="mt-4 text-xs text-slate-500">Billing date: {subscription.billingDate}</p>
  </article>
);
