# RupeeTrack

Production-ready Vite + React + TypeScript app for Indian personal finance tracking with EMI and subscription reminders.

## Setup

1. Copy env file:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies and run:
   ```bash
   npm install
   npm run dev
   ```

## Stack

- Vite + React + TypeScript
- Clerk auth
- Firebase Firestore (database)
- Tailwind CSS
- Recharts


### Clerk key fallback

If `VITE_CLERK_PUBLISHABLE_KEY` is not set, the app falls back to the configured RupeeTrack Clerk test key so local development does not render a blank screen.
