interface SummaryCardProps {
  title: string;
  amount: number;
  note: string;
}

export const SummaryCard = ({ title, amount, note }: SummaryCardProps) => (
  <article className="rounded-xl bg-white p-5 shadow-card">
    <h3 className="text-sm text-slate-500">{title}</h3>
    <p className="mt-2 text-3xl font-bold text-slate-900">₹{amount.toLocaleString('en-IN')}</p>
    <p className="mt-3 text-sm text-slate-500">{note}</p>
  </article>
);
