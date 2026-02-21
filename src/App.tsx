import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { AppRoutes } from '@/routes/AppRoutes';
import { createOrUpdateUser } from '@/lib/firestore';

function App() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !user) return;
      await createOrUpdateUser({
        id: user.id,
        name: user.fullName ?? user.firstName ?? 'RupeeTrack User',
        email: user.primaryEmailAddress?.emailAddress ?? '',
        createdAt: new Date().toISOString(),
        premiumStatus: true,
      });
    };
    void syncUser();
  }, [isLoaded, user]);

  return <AppRoutes />;
}

export default App;
