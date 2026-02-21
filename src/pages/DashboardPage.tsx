import { useMemo } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { SummaryCard } from '@/components/SummaryCard';
import { useFinanceData } from '@/hooks/useFinanceData';

export const DashboardPage = () => {
  const { userId } = useAuth();
  const { emis, subscriptions, totalEmi, totalSubscriptions } = useFinanceData(userId ?? undefined);

  const upcomingDue = useMemo(() => {
    const nextEmi = emis[0]?.monthlyEmi ?? 0;
    const nextSub = subscriptions[0]?.amount ?? 0;
    return nextEmi + nextSub;
  }, [emis, subscriptions]);

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <SummaryCard title="Total EMI" amount={totalEmi} note="Monthly EMI burden" />
        <SummaryCard title="Total Subscriptions" amount={totalSubscriptions} note="Monthly recurring apps/services" />
        <SummaryCard title="Upcoming Due" amount={upcomingDue} note="Expected next billing cycle" />
      </div>
      <article className="rounded-xl bg-white p-6 shadow-card">
        <h3 className="text-lg font-semibold">Recent Payments</h3>
        <ul className="mt-4 space-y-3">
          {[...emis.slice(0, 3).map((emi) => ({ label: emi.name, amount: emi.monthlyEmi })), ...subscriptions.slice(0, 3).map((sub) => ({ label: sub.name, amount: sub.amount }))]
            .slice(0, 5)
            .map((item) => (
              <li key={`${item.label}-${item.amount}`} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                <span className="text-sm text-slate-600">{item.label}</span>
                <span className="font-semibold text-slate-900">₹{item.amount.toLocaleString('en-IN')}</span>
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
};
