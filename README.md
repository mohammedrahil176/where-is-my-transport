# Where Is My Transport?

**Real-Time Train & KSRTC Karnataka Travel Assistant**

## Problem Statement
Navigating local and intercity transport in Karnataka (trains and KSRTC buses) often requires using multiple applications, leading to a fragmented experience. Passengers struggle to track vehicles in real time, compare options seamlessly, and get contextual help when delays occur.

## Solution
"Where Is My Transport?" is a unified travel assistant that combines Train and KSRTC bus tracking into a single, mobile-first web application. It features real-time tracking (simulated for demo purposes), interactive maps, and an AI Travel Guide to assist passengers with their journey.

## Features
- **🚆 Train Tracking:** View train routes, live/scheduled status, delays, and upcoming stations.
- **🚌 KSRTC Integration:** Search bus routes, check timetables, and monitor live bus progress.
- **🗺️ Interactive Map:** Leaflet-powered maps showing current location, vehicle position, and nearby stations.
- **🤖 AI Travel Guide:** Contextual AI assistant to recommend routes and provide step-by-step guidance.
- **❤️ Favourites & Profile:** Save favorite trains, buses, and routes.
- **📱 Mobile-First UI:** Responsive design with bottom navigation for a native app feel.

## Architecture & Tech Stack
- **Frontend:** Next.js (App Router), React, Tailwind CSS, shadcn/ui
- **Map:** Leaflet, React-Leaflet
- **AI:** Vercel AI SDK
- **Backend & API:** Next.js Route Handlers
- **Database:** Prisma ORM (SQLite for local, PostgreSQL for production)
- **Authentication:** NextAuth.js

### System Diagram
```mermaid
graph TD
    UI[Frontend (Next.js)] --> API[API Routes]
    API --> AI[AI Service (Vercel AI)]
    API --> DB[(Database (Prisma))]
    API --> Ext[External APIs / Demo Data]
    UI --> Map[Map Component (Leaflet)]
```

## Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/where-is-my-transport.git
   cd where-is-my-transport
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Copy `.env.example` to `.env` and fill in your keys:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your_secret_here"
   AI_API_KEY="your_ai_api_key_here"
   ```

4. **Initialize Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```

## Demo Mode
Since official live APIs for Indian Railways and KSRTC are not openly available without strict licensing, this application runs in **DEMO MODE**. 
- Live tracking data is simulated based on scheduled timetables.
- "Estimated" labels are prominently displayed to prevent misinformation.

## License
MIT License
