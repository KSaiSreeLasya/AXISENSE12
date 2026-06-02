# Quick Deploy to Render (5 Minutes)

## Your Credentials (Already Configured)
```
Supabase URL: https://zmdmpwzdcdngefcwepbg.supabase.co
Supabase Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...RcGBvUoETHAk-H0IpvZQcruUEpNHFdT8M7hXeIqG9gE
```

## Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Add Supabase contact form and Render deployment"
git push origin main
```

## Step 2: Go to Render (1 minute)
1. Visit https://render.com/dashboard
2. Click **"New +"** → **"Web Service"**
3. Click **"Connect a repository"**
4. Select `KSaiSreeLasya/AXISENSE12`

## Step 3: Configure Service (2 minutes)
- **Name**: `axisense-website`
- **Runtime**: Node
- **Build Command**: `pnpm install && pnpm build`
- **Start Command**: `pnpm start`

## Step 4: Add Environment Variables (1 minute)
Click **"Add Environment Variable"** and add:

```
VITE_PUBLIC_SUPABASE_URL = https://zmdmpwzdcdngefcwepbg.supabase.co
VITE_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...RcGBvUoETHAk-H0IpvZQcruUEpNHFdT8M7hXeIqG9gE [MARK AS SECRET]
VITE_PUBLIC_BUILDER_KEY = __BUILDER_PUBLIC_KEY__
PING_MESSAGE = ping pong
```

## Step 5: Deploy (1 minute)
Click **"Create Web Service"**

Wait 3-5 minutes for build to complete. You'll see:
```
✓ Build successful
✓ Service live at: https://axisense-website.onrender.com
```

## Test Your Live Site
1. Open: https://axisense-website.onrender.com/contact
2. Fill & submit the form
3. See success message
4. Check Supabase Dashboard → contact_submissions table

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Check logs, ensure pnpm build works locally |
| Service crashes | Verify PORT env var, check error logs |
| Form doesn't submit | Confirm Supabase table exists, verify API route |
| CORS errors | Already configured, clear browser cache |

## Get Help
- **Render Status**: https://status.render.com
- **Logs**: Service Dashboard → Logs tab
- **Docs**: https://render.com/docs

---
✅ **Deployment Complete!** Your site is now live.
