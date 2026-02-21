import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const PrimaryButton = ({ children, className = '', ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button
    className={`rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);
