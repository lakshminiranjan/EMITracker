/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
      },
      borderRadius: {
        xl: '16px',
      },
      boxShadow: {
        card: '0 10px 25px -15px rgb(15 23 42 / 0.28)',
      },
    },
  },
  plugins: [],
};
