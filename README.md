# 🎨 Slop Swapper

> *The Leading AI Content Laundering Platform™*

**Turn AI Slop Into Human-Made Art** — because nothing says "authentic" like paying a displaced artist to claim your Midjourney output as their own.

## What Is This, Actually?

This is a satirical landing page that parodies the absurd lengths people will go to legitimize AI-generated content. It's a tongue-in-cheek commentary on:

- The commodification of "authenticity" in the AI era
- How artists are being displaced by AI tools
- The performative nature of "human-made" art verification
- The entire industry of making AI output look legitimate

Think of it as **The Onion meets Stripe** — impeccably designed, professionally presented, and completely ridiculous.

## Features

✨ **Fake Artists** — Browse our network of credentialed professionals ready to claim your AI art  
📜 **Fake Certificates** — Get official-looking documentation proving human authorship  
💼 **Fake Testimonials** — Read glowing reviews from made-up clients  
🎭 **100% Satire** — No actual laundering services provided (we're not monsters)

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui components
- **Backend**: Express.js + TypeScript
- **Routing**: Wouter (lightweight React router)
- **State**: TanStack React Query

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/slop-swapper.git
cd slop-swapper

# Install dependencies
npm install

# Run in development
npm run dev
```

Visit `http://localhost:5000` and prepare to question your life choices.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Google Cloud Run

This repo includes a Dockerfile optimized for Google Cloud Run. Deploy with:

```bash
gcloud run deploy slop-swapper \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

Or use the included Dockerfile:

```bash
docker build -t slop-swapper .
docker run -p 8080:8080 slop-swapper
```

## Project Structure

```
├── client/          # React frontend
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── pages/         # Route pages
│       └── lib/           # Utilities
├── server/         # Express backend
│   ├── index.ts    # Server entry
│   ├── routes.ts   # API routes
│   └── static.ts   # Static file serving
├── shared/         # Shared types
└── script/         # Build scripts
```

## Environment Variables

- `PORT` - Server port (default: 5000, Cloud Run uses 8080)
- `NODE_ENV` - Set to `production` for production builds
- `DATABASE_URL` - PostgreSQL connection string (optional, currently uses in-memory storage)

## Contributing

This is a satirical project, but if you want to make it funnier or fix bugs, PRs are welcome! Just remember:

- Keep the satire sharp
- Maintain the professional aesthetic
- Don't actually build a real laundering service (seriously)

## License

MIT — because even satire should be free.

## Support the Creator

If you found this funny and want to support more satirical tech commentary:

- ☕ [Buy me a coffee](https://buymeacoffee.com/robotfuture)
- 📝 [Read my blog](https://www.robot-future.com) for more thoughts on AI, tech, and the future

## Disclaimer

This is **satire**. We do not actually provide AI content laundering services. If you're looking for that, you have bigger problems than we can solve. If you're an artist who's been displaced by AI, we see you, and this project is for you. ❤️

---

*"100% undetectable. SOC 2 Type II Compliant. All artist credentials verified through independent third parties."*
