import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useFinanceData } from '@/hooks/useFinanceData';

export const EMIDetailPage = () => {
  const { id } = useParams();
  const { userId } = useAuth();
  const { emis } = useFinanceData(userId ?? undefined);
  const emi = useMemo(() => emis.find((item) => item.id === id), [emis, id]);

  if (!emi) return <p className="text-slate-500">EMI not found.</p>;

  return (
    <section className="max-w-2xl rounded-xl bg-white p-6 shadow-card">
      <h1 className="text-2xl font-semibold">{emi.name}</h1>
      <div className="mt-5 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
        <p>Total Loan: ₹{emi.totalLoan.toLocaleString('en-IN')}</p>
        <p>Monthly EMI: ₹{emi.monthlyEmi.toLocaleString('en-IN')}</p>
        <p>Remaining Amount: ₹{emi.remainingAmount.toLocaleString('en-IN')}</p>
        <p>Due Date: {emi.dueDate}</p>
        <p>Start Date: {emi.startDate}</p>
        <p>End Date: {emi.endDate}</p>
      </div>
    </section>
  );
};
