# Gust (WIP)

A minimal cross-platform application for capturing fleeting thoughts and *intentionally* deciding which ones deserve to stay.

Mobile-first capture. Desktop-first reflection.

> [!Note]
>This project is my *portfolio project*, so any contribution to the project will currently not be accepted.
>However, feel free to use all the code to create something from it on your own, you may create something I could only have imagined!
>Just make sure to leave a link to this repo.

## Concept

Gust is built around a simple idea:

> **Not every thought deserves permanent storage, and some deserving it are not captured in time.**

For this reason, Gust is designed to be as frictionless and as easy-to-note-in as possible.

Users quickly capture short thoughts on mobile, later, they can review them on the web page.
Unreviewed notes *visually age* and *expire* unless promoted during a review.

The system encourages *intentional retention* and *cognitive decluttering*, by giving the tools to write something short and fast on the go.

## Core Features (MVP)

- Fast mobile note capture
- Character-limited input
- Automatic timestamping
- Chronological desktop review
- Visual aging of pending notes
- Promote-to-permanent workflow
- Automatic expiration of unpromoted notes (with 7 day grace period)
- Optional account-based sync

## Architecture

You can learn about application architecture in detail using this link: [System Architecture](docs/diagrams/system-architecture.png)

### High-Level Structure

- Mobile App (Expo + React Native)
- Web App (Next.js)
- API (Node.js + Express)
- PostgreSQL database (Drizzle ORM)
- Monorepo managed with pnpm workspaces

## Getting Started
The project is still on very early stages, but you can launch and try separate app parts using the following commands:

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Backend

```bash
pnpm --filter api dev
```

### 3. Start Web App

```bash
pnpm --filter web dev
```

### 4. Start Mobile App

```bash
pnpm --filter mobile start
```

## Tech Stack

### Frontend
- React Native (Expo)
- Next.js
- TypeScript
- TailwindCSS
- Shadcn

### Backend
- Node.js
- Express
- PostgreSQL
- Drizzle ORM

### Dev Tooling
- pnpm workspaces
- ESLint
- Prettier
- Git

## Security (MVP)

- Password hashing
- HTTPS communication
- Encrypted storage at rest

Planned:
- Optional client-side encryption (E2EE)

## Roadmap 

- Export to Markdown
- Weekly summaries
- Optional end-to-end encryption
- Lightweight tagging system with NLP and manually
- Offline-first sync improvements

## Project Goals

- Minimal friction note capture
- Intentional thought preservation
- Clean UX without engagement loops
- Clear architectural structure

## License

MIT License
