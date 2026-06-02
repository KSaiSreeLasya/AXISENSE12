# Render Deployment Checklist

## ✅ Pre-Deployment Tasks

### Environment Setup
- [x] `.env` file created with Supabase credentials
- [x] `VITE_PUBLIC_SUPABASE_URL` = `https://zmdmpwzdcdngefcwepbg.supabase.co`
- [x] `VITE_PUBLIC_SUPABASE_ANON_KEY` configured
- [x] `render.yaml` configuration file created
- [x] Supabase table `contact_submissions` created in SQL

### Code Quality
- [x] TypeScript type checking: `pnpm typecheck`
- [x] Build works locally: `pnpm build`
- [x] Server starts correctly: `pnpm start`
- [x] No hardcoded secrets in code
- [ ] Tests pass: `pnpm test`
- [ ] All features tested locally

### Git & GitHub
- [ ] Code committed and pushed to GitHub
- [ ] Render can access your repository
- [ ] No uncommitted changes

## 🚀 Deployment Steps

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Add Supabase integration and Render deployment"
git push origin main
```

### 2. Create Render Account
- Go to https://render.com
- Sign up with GitHub (recommended)
- Authorize Render to access your repositories

### 3. Deploy to Render
1. Dashboard → **New +** → **Web Service**
2. Select your GitHub repository
3. Fill in deployment details:
   - **Name**: `axisense-website`
   - **Runtime**: Node
   - **Build**: `pnpm install && pnpm build`
   - **Start**: `pnpm start`
4. Add environment variables (see below)
5. Click **Create Web Service**

### 4. Environment Variables on Render

| Variable | Value | Type |
|----------|-------|------|
| `VITE_PUBLIC_BUILDER_KEY` | Your Builder key | Public |
| `VITE_PUBLIC_SUPABASE_URL` | `https://zmdmpwzdcdngefcwepbg.supabase.co` | Public |
| `VITE_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase key | **Secret** |
| `PING_MESSAGE` | `ping pong` | Public |

## 📊 Post-Deployment

### Verify Deployment
1. ✅ Check build log for errors
2. ✅ Visit your live URL (e.g., `https://axisense-website.onrender.com`)
3. ✅ Test contact form → submits to Supabase
4. ✅ Check animations load correctly
5. ✅ Verify API endpoints work (`/api/ping`, `/api/contact`)

### Monitor Live Site
- **Logs**: Real-time server output
- **Metrics**: CPU, Memory usage
- **Events**: Deployment history
- **Health Check**: Auto-restart if crashed

## 🌐 Custom Domain (Optional)

### Add Your Domain
1. Render Dashboard → Service Settings
2. **Custom Domains** → Add your domain
3. Update DNS provider CNAME:
   ```
   Type: CNAME
   Name: @ (or subdomain)
   Value: axisense-website.onrender.com
   TTL: 3600
   ```
4. SSL certificate auto-provisioned (HTTPS)

## 🔒 Security Checklist

- [x] Supabase credentials in `.env` and as secrets
- [x] No API keys hardcoded in source
- [x] CORS configured in Express
- [x] RLS enabled in Supabase
- [x] Form validation on server-side
- [x] Error messages don't leak sensitive info
- [x] HTTPS enabled (automatic on Render)

## 📈 Performance Tips

### Free Tier Optimization
- [x] Build command optimized
- [x] Dependencies minimal
- [x] TypeScript strict mode enabled

### Upgrade Considerations
- Free: 750 hours/month (spins down after 15 min inactivity)
- Starter: $7/month (24/7 uptime)
- Standard: $12/month (better resources)

## 🐛 Troubleshooting

### Build Fails
```
Error: Command failed
```
**Solution**: Check build logs, verify `pnpm build` works locally

### Service Crashes
```
Error: Cannot find module
```
**Solution**: Ensure all dependencies in `package.json`, run `pnpm install`

### Contact Form Doesn't Submit
```
Error: 500 Internal Server Error
```
**Solution**: Check Supabase table exists, verify credentials in env vars

### CORS Errors
```
Error: Access to XMLHttpRequest blocked
```
**Solution**: CORS already configured in `server/index.ts`, no changes needed

## 📱 Testing Contact Form on Production

1. Navigate to `/contact`
2. Fill in form fields
3. Click "Send Message"
4. Should see: "Message Sent Successfully!"
5. Check Supabase Dashboard → contact_submissions table
6. New entry should appear with your data

## 📊 Key Files for Deployment

| File | Purpose |
|------|---------|
| `.env` | Environment variables |
| `render.yaml` | Render deployment config |
| `package.json` | Build & start scripts |
| `vite.config.ts` | Frontend build config |
| `vite.config.server.ts` | Backend build config |
| `server/index.ts` | Express server setup |
| `client/pages/Contact.tsx` | Contact form with Supabase |

## 🎯 Next Steps After Deployment

1. ✅ Verify live site works
2. ✅ Set up custom domain (optional)
3. ✅ Monitor logs for errors
4. ✅ Test all pages and forms
5. ✅ Set up Slack/email alerts (optional)
6. ✅ Plan monitoring/maintenance strategy

## 📞 Support Links

- **Render Docs**: https://render.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Vite Docs**: https://vitejs.dev
- **Express Docs**: https://expressjs.com

## 💾 Quick Reference

### Common Render Commands
```bash
# View logs in real-time
# (done via Dashboard)

# Trigger redeploy
# Push to main branch or click "Manual Deploy" in Dashboard

# Check service status
# Dashboard → Service → Events tab
```

### Local Testing Before Deploy
```bash
pnpm build        # Build both client & server
pnpm start        # Run production server locally
# Visit http://localhost:3000
```

---

**Last Updated**: 2026-06-02
**Status**: Ready for deployment ✅
