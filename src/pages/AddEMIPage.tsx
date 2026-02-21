import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { addEmi } from '@/lib/firestore';
import { FormInput } from '@/components/FormInput';
import { PrimaryButton } from '@/components/PrimaryButton';

export const AddEMIPage = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', totalLoan: '', monthlyEmi: '', startDate: '', endDate: '', dueDate: '', remainingAmount: '' });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!userId) return;

    await addEmi({
      userId,
      name: form.name,
      totalLoan: Number(form.totalLoan),
      monthlyEmi: Number(form.monthlyEmi),
      startDate: form.startDate,
      endDate: form.endDate,
      dueDate: form.dueDate,
      remainingAmount: Number(form.remainingAmount),
      createdAt: new Date().toISOString(),
    });
    navigate('/emis');
  };

  return (
    <form onSubmit={onSubmit} className="max-w-2xl space-y-4 rounded-xl bg-white p-6 shadow-card">
      <h1 className="text-2xl font-semibold">Add EMI</h1>
      <FormInput id="name" label="EMI Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput id="totalLoan" label="Total Loan" type="number" min={1} required value={form.totalLoan} onChange={(e) => setForm({ ...form, totalLoan: e.target.value })} />
        <FormInput id="monthlyEmi" label="Monthly EMI" type="number" min={1} required value={form.monthlyEmi} onChange={(e) => setForm({ ...form, monthlyEmi: e.target.value })} />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <FormInput id="startDate" label="Start Date" type="date" required value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
        <FormInput id="endDate" label="End Date" type="date" required value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
        <FormInput id="dueDate" label="Due Day (e.g., 5th)" required value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
      </div>
      <FormInput id="remainingAmount" label="Remaining Amount" type="number" min={0} required value={form.remainingAmount} onChange={(e) => setForm({ ...form, remainingAmount: e.target.value })} />
      <PrimaryButton type="submit" className="w-full py-4 text-base">Save EMI</PrimaryButton>
    </form>
  );
};
