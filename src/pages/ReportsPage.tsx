import { useAuth } from '@clerk/clerk-react';
import { Bar, BarChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useFinanceData } from '@/hooks/useFinanceData';

export const ReportsPage = () => {
  const { userId } = useAuth();
  const { totalEmi, totalSubscriptions } = useFinanceData(userId ?? undefined);

  const pieData = [
    { name: 'EMI', value: totalEmi },
    { name: 'Subscriptions', value: totalSubscriptions },
  ];

  const barData = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'].map((month, index) => ({
    month,
    expense: Math.round((totalEmi + totalSubscriptions) * (0.8 + index * 0.05)),
  }));

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="h-80 rounded-xl bg-white p-6 shadow-card">
        <h3 className="mb-4 text-lg font-semibold">EMI vs Subscription</h3>
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90} fill="#2563EB" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </article>
      <article className="h-80 rounded-xl bg-white p-6 shadow-card">
        <h3 className="mb-4 text-lg font-semibold">Last 6 Months Spend</h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="expense" fill="#2563EB" />
          </BarChart>
        </ResponsiveContainer>
      </article>
    </section>
  );
};
