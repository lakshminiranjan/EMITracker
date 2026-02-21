import { Link } from 'react-router-dom';
import type { EMI } from '@/types';

export const EMICard = ({ emi }: { emi: EMI }) => {
  const completion = Math.max(0, Math.min(100, ((emi.totalLoan - emi.remainingAmount) / emi.totalLoan) * 100));

  return (
    <article className="rounded-xl bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">{emi.name}</h3>
          <p className="text-sm text-slate-500">Due every month on {emi.dueDate}</p>
        </div>
        <span className="text-lg font-semibold text-primary">₹{emi.monthlyEmi.toLocaleString('en-IN')}</span>
      </div>
      <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-primary" style={{ width: `${completion}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-xs text-slate-500">
        <span>{completion.toFixed(0)}% completed</span>
        <Link to={`/emi/${emi.id}`} className="font-medium text-primary">View details</Link>
      </div>
    </article>
  );
};
