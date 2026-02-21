import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout = () => (
  <div className="min-h-screen bg-slate-50 p-4 lg:p-8">
    <div className="mx-auto flex max-w-7xl gap-6">
      <Sidebar />
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  </div>
);
