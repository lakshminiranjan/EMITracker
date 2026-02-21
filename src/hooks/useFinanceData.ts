import { useEffect, useMemo, useState } from 'react';
import { fetchUserEmis, fetchUserSubscriptions } from '@/lib/firestore';
import type { EMI, Subscription } from '@/types';

export const useFinanceData = (userId?: string) => {
  const [emis, setEmis] = useState<EMI[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      setLoading(true);
      const [emiData, subscriptionData] = await Promise.all([
        fetchUserEmis(userId),
        fetchUserSubscriptions(userId),
      ]);
      setEmis(emiData);
      setSubscriptions(subscriptionData);
      setLoading(false);
    };
    void load();
  }, [userId]);

  const totalEmi = useMemo(() => emis.reduce((sum, emi) => sum + emi.monthlyEmi, 0), [emis]);
  const totalSubscriptions = useMemo(
    () => subscriptions.reduce((sum, sub) => sum + sub.amount, 0),
    [subscriptions],
  );

  return { emis, subscriptions, totalEmi, totalSubscriptions, loading };
};
