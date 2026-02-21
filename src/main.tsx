import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const DEFAULT_CLERK_PUBLISHABLE_KEY =
  'pk_test_ZmFzdC1hbmNob3Z5LTE5LmNsZXJrLmFjY291bnRzLmRldiQ';

const clerkPubKey =
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY?.trim() || DEFAULT_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={clerkPubKey}
        signInUrl="/login"
        signUpUrl="/signup"
        afterSignInUrl="/"
        afterSignUpUrl="/"
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
