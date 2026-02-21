import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { AddEMIPage } from '@/pages/AddEMIPage';
import { AddSubscriptionPage } from '@/pages/AddSubscriptionPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { EMIDetailPage } from '@/pages/EMIDetailPage';
import { EMIsPage } from '@/pages/EMIsPage';
import { LoginPage } from '@/pages/LoginPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ReportsPage } from '@/pages/ReportsPage';
import { SignupPage } from '@/pages/SignupPage';
import { SubscriptionsPage } from '@/pages/SubscriptionsPage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />

    <Route
      element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }
    >
      <Route path="/" element={<DashboardPage />} />
      <Route path="/emis" element={<EMIsPage />} />
      <Route path="/subscriptions" element={<SubscriptionsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/emi/:id" element={<EMIDetailPage />} />
      <Route path="/add-emi" element={<AddEMIPage />} />
      <Route path="/add-subscription" element={<AddSubscriptionPage />} />
    </Route>

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
