# Render Static Site Deployment Guide

## Overview
This guide walks you through deploying your AxiSense.io website to Render as a static site with full-stack capabilities.

## Prerequisites
- GitHub account with your repository
- Render account (free at https://render.com)
- Project pushed to GitHub

## Quick Start (Recommended Method)

### Step 1: Connect GitHub to Render
1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Select **"Connect a repository"**
4. Authorize Render to access your GitHub account
5. Select your `KSaiSreeLasya/AXISENSE12` repository

### Step 2: Configure the Web Service
1. **Name**: `axisense-website` (or your preferred name)
2. **Runtime**: Node
3. **Build Command**: 
   ```bash
   pnpm install && pnpm build
   ```
4. **Start Command**: 
   ```bash
   pnpm start
   ```
5. **Plan**: Free tier (sufficient for development/testing)

### Step 3: Add Environment Variables
Click **"Environment"** and add:

| Key | Value | Type |
|-----|-------|------|
| `VITE_PUBLIC_BUILDER_KEY` | `__BUILDER_PUBLIC_KEY__` | Public |
| `VITE_PUBLIC_SUPABASE_URL` | `https://zmdmpwzdcdngefcwepbg.supabase.co` | Public |
| `VITE_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | Secret |
| `PING_MESSAGE` | `ping pong` | Public |

**Important**: Mark the Supabase anon key as **Secret** to prevent exposure in logs.

### Step 4: Deploy
1. Click **"Create Web Service"**
2. Render will automatically:
   - Clone your repository
   - Install dependencies with pnpm
   - Build your app (`pnpm build`)
   - Start the server
3. Once the build completes, you'll receive a live URL like: `https://axisense-website.onrender.com`

## Manual Blueprint Method (Using render.yaml)

If you prefer using Infrastructure as Code:

1. The `render.yaml` file in your repository root has already been created
2. Push it to GitHub
3. In Render Dashboard, select **"Blueprint"**
4. Connect your GitHub repo
5. Render will auto-detect and use `render.yaml` for configuration

## Project Structure for Render

```
root/
├── client/               # React SPA frontend
├── server/               # Express backend
├── shared/               # Shared types
├── package.json          # Defines build & start scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
├── .env                  # Environment variables
└── render.yaml           # Render deployment config
```

## Build & Start Scripts

Your `package.json` must include:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "start": "node dist/server/index.js",
    "typecheck": "tsc",
    "test": "vitest"
  }
}
```

## What Happens During Deployment

1. **Install**: `pnpm install` installs dependencies
2. **Build**: `pnpm build` compiles TypeScript and bundles frontend
3. **Run**: `pnpm start` starts the Express server on port 3000
4. **Serve**: Server handles both static assets and API routes

## Custom Domain Setup

To add your custom domain:

1. Go to your Render service settings
2. Scroll to **"Custom Domains"**
3. Click **"Add Custom Domain"**
4. Enter your domain (e.g., `axisense.io`)
5. Update your DNS provider's CNAME record to point to Render:
   ```
   Type: CNAME
   Name: axisense
   Value: axisense-website.onrender.com
   ```
6. Render will automatically provision an SSL certificate (HTTPS)

## Environment Variables in Production

### Public Variables (Safe to expose)
- `VITE_PUBLIC_SUPABASE_URL` - Supabase project URL
- `VITE_PUBLIC_BUILDER_KEY` - Builder.io public key
- `PING_MESSAGE` - Demo variable

### Secret Variables (Keep confidential)
- `VITE_PUBLIC_SUPABASE_ANON_KEY` - JWT token for Supabase
- Database credentials (if added later)
- API keys from third-party services

**Mark secrets as "Secret" in Render Dashboard** - they won't appear in logs or build output.

## Port Configuration

- **Local Development**: Port 8080
- **Render Production**: Port 3000 (automatically assigned)
- **Environment**: Render sets `PORT` env var automatically

If you need to change the port in `server/index.ts`:
```typescript
const port = process.env.PORT || 3000;
app.listen(port);
```

## Monitoring & Logs

After deployment:

1. Click your service in Render Dashboard
2. View **"Logs"** tab for real-time output
3. Check **"Events"** tab for deployment history
4. Monitor **"Metrics"** tab for CPU/Memory usage

## Troubleshooting

### Build Fails
- Check logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation: `pnpm typecheck`

### Service crashes on startup
- Check `pnpm start` command is correct
- Ensure port is set correctly
- Review error logs in Render Dashboard

### Database connection fails
- Verify Supabase URL and key in environment variables
- Check `.env` file is not gitignored
- Ensure Supabase table `contact_submissions` exists

### Build timeout (>15 minutes)
- Render free tier has 15-minute build limit
- Optimize dependencies
- Consider upgrading to paid tier

## Continuous Deployment

Render automatically redeploys when you:
1. Push to your main branch
2. Update environment variables
3. Change the `render.yaml` file

To disable auto-deploy:
- Settings → **"Auto-deploy"** → Toggle OFF

## Performance Tips

1. **Use Render PostgreSQL** for database instead of Supabase (if needed)
2. **Enable compression** in Express for faster transfers
3. **Optimize images** in your static assets
4. **Cache headers** for long-lived assets
5. **Upgrade from free** to paid plan for better performance

## Security Checklist

- ✅ Environment variables marked as secrets
- ✅ No hardcoded credentials in code
- ✅ SSL/HTTPS enabled (automatic)
- ✅ Supabase RLS policies configured
- ✅ CORS properly configured in Express

## Useful Commands

```bash
# Local testing (simulates production)
pnpm build && pnpm start

# Check for build issues
pnpm typecheck

# Run tests
pnpm test
```

## Deployment Limits (Free Tier)

| Limit | Value |
|-------|-------|
| Monthly uptime | 750 hours (covers 1 month) |
| CPU | Shared |
| Memory | 512 MB |
| Storage | None (ephemeral) |
| Build time | 15 minutes max |

**Note**: Free tier spins down after 15 minutes of inactivity. Paid tiers have 24/7 uptime.

## Next Steps

1. Push your code to GitHub
2. Create Render account
3. Follow "Quick Start" steps above
4. Test contact form on live site
5. Set up custom domain (optional)
6. Monitor logs and metrics
7. Consider upgrading to paid for 24/7 uptime

## Support

- Render Docs: https://render.com/docs
- GitHub Integration: https://render.com/docs/deploy-from-github
- Environment Variables: https://render.com/docs/environment-variables

## Files Added

- `.env` - Updated with Supabase credentials
- `render.yaml` - Infrastructure as Code configuration
- This `RENDER_DEPLOYMENT.md` guide
