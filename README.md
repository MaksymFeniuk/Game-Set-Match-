# Game! Set! Match!

Tennis & Padel matchmaking platform built with **Next.js 16**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## 📄 Pages

- **Dashboard** (`/`) - Quick access to courts, matches, and events
- **Explore** (`/explore`) - Find courts and nearby players
- **Profile** (`/profile`) - Your stats, achievements, and match history
- **Bookings** (`/bookings`) - Manage your court reservations
- **League Tables** (`/league-tables`) - Rankings and tournaments
- **Messages** (`/messages`) - Chat with other players
- **Help** (`/help`) - FAQs and support

## 🎨 Design

- **Theme**: Dark mode (#0F1419) with light blue accents (#73D3FF)
- **Icons**: Lucide React
- **CSS**: Tailwind CSS v4 with responsive design

## 📁 Project Structure

```
app/                          # Next.js pages
  ├── page.tsx               # Dashboard
  ├── explore/page.tsx       # Browse
  ├── profile/page.tsx       # User profile
  ├── bookings/page.tsx      # Reservations
  ├── league-tables/page.tsx # Rankings
  ├── messages/page.tsx      # Chat
  ├── help/page.tsx          # Support
  ├── layout.tsx             # Root layout
  └── globals.css            # Global styles

components/
  ├── Header.tsx             # Top navigation
  ├── Sidebar.tsx            # Left sidebar
  ├── CourtCard.tsx          # Court component
  ├── PlayerCard.tsx         # Player component
  └── EventCard.tsx          # Event component

tailwind.config.ts            # Tailwind configuration
```

## 🛠️ Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **ESLint** - Code quality

## ⚙️ Key Files

- `tailwind.config.ts` - Theme colors and custom config
- `app/globals.css` - Global styles and utilities
- `app/layout.tsx` - Main layout with Header and Sidebar
- `package.json` - Dependencies and scripts

## 📝 Notes

- All pages use the `'use client'` directive for interactivity
- Custom button styles: `.btn-accent` and `.btn-accent-secondary`
- Components are modular and reusable
- Ready to connect to backend APIs

---

**Ready to develop!** Edit pages in `app/` and components in `components/`.
