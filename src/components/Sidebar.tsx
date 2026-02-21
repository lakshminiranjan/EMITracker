import { NavLink } from 'react-router-dom';

const navItems = [
  ['/', 'Dashboard'],
  ['/emis', 'EMIs'],
  ['/subscriptions', 'Subscriptions'],
  ['/reports', 'Reports'],
  ['/profile', 'Profile'],
];

export const Sidebar = () => (
  <aside className="hidden w-64 flex-shrink-0 rounded-xl bg-white p-6 shadow-card lg:block">
    <h1 className="mb-8 text-2xl font-bold text-primary">RupeeTrack</h1>
    <nav className="space-y-2">
      {navItems.map(([path, label]) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `block rounded-lg px-4 py-3 text-sm font-medium transition ${
              isActive ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-100'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  </aside>
);
