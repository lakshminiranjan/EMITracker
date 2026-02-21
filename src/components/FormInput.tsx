import type { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput = ({ label, id, className = '', ...props }: FormInputProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-slate-700">
      {label}
    </label>
    <input
      id={id}
      className={`w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200 ${className}`}
      {...props}
    />
  </div>
);
