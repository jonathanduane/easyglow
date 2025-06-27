# EasyGlow - Premium Smokeless Coal Delivery

A modern, responsive e-commerce website for EasyGlow, a premium smokeless coal and solid fuels company based in Ireland.

## Features

- Modern React frontend with TypeScript
- Express.js backend API
- Contact form with database storage
- Responsive design with Tailwind CSS
- Cozy fire-themed branding
- Product showcase with pricing
- Shipping information for Ireland

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from this directory:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import this repository
4. Vercel will automatically detect the configuration from `vercel.json`
5. Click "Deploy"

### Environment Variables

If you're using a database, you'll need to set these environment variables in Vercel:

- `DATABASE_URL` - Your PostgreSQL connection string

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5000](http://localhost:5000)

## Build

```bash
npm run build
```

This builds both the frontend (React) and backend (Express) for production.

## Project Structure

- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas
- `api/` - Vercel serverless functions
- `dist/` - Built application files

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel
- **Build Tools**: Vite, esbuild