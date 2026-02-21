import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { FormInput } from '@/components/FormInput';
import { PrimaryButton } from '@/components/PrimaryButton';
import { addSubscription } from '@/lib/firestore';

export const AddSubscriptionPage = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', amount: '', billingDate: '', category: '' });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!userId) return;

    await addSubscription({
      userId,
      name: form.name,
      amount: Number(form.amount),
      billingDate: form.billingDate,
      category: form.category,
      createdAt: new Date().toISOString(),
    });
    navigate('/subscriptions');
  };

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4 rounded-xl bg-white p-6 shadow-card">
      <h1 className="text-2xl font-semibold">Add Subscription</h1>
      <FormInput id="name" label="Service Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <FormInput id="amount" label="Amount" type="number" min={1} required value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <FormInput id="billingDate" label="Billing Date" type="date" required value={form.billingDate} onChange={(e) => setForm({ ...form, billingDate: e.target.value })} />
      <FormInput id="category" label="Category" required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <PrimaryButton type="submit" className="w-full py-4 text-base">Save Subscription</PrimaryButton>
    </form>
  );
};
