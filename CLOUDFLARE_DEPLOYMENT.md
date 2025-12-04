# Cloudflare Pages Deployment Guide for events-88

Your Next.js application is now configured for Cloudflare Pages deployment with unlimited free bandwidth!

## ✅ What's Been Configured

- ✅ Installed `@cloudflare/next-on-pages` adapter
- ✅ Created `wrangler.toml` configuration file
- ✅ Updated `package.json` with Cloudflare build scripts
- ✅ Built and tested the application successfully
- ✅ Pushed configuration to GitHub repository

---

## 🚀 Method 1: Deploy via Cloudflare Dashboard (Recommended)

This is the easiest method and provides automatic deployments on every git push.

### Step 1: Create a Cloudflare Account (Free)

1. Go to [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up for a free account (no credit card required)
3. Verify your email address

### Step 2: Connect to GitHub

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** in the left sidebar
3. Click **Create application** button
4. Select the **Pages** tab
5. Click **Connect to Git**
6. Click **GitHub** and authorize Cloudflare to access your repositories
7. Select the `88events/events-88` repository

### Step 3: Configure Build Settings

Use these **exact** settings:

```
Project name: events-88
Production branch: main
Build command: npm run pages:build
Build output directory: .vercel/output/static
Root Directory: /
```

**Advanced settings:**
- Node version: `20` or `18`
- Package manager: `npm` (or select `bun` if available)

### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait 2-5 minutes for the first build
3. Your site will be live at: `https://events-88.pages.dev`

### Step 5: Custom Domain (Optional)

1. In your project settings, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `www.88events.com`)
4. Follow the DNS configuration instructions
5. Cloudflare will automatically provision SSL certificates

---

## 🔧 Method 2: Deploy via CLI (Alternative)

Use this method for manual deployments or CI/CD pipelines.

### Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
# or
bun install -g wrangler
```

### Step 2: Authenticate

```bash
wrangler login
```

This will open your browser for OAuth authentication.

**OR** use an API token (for CI/CD):

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Use the **Edit Cloudflare Workers** template
4. Under **Account Resources**, select your account
5. Under **Zone Resources**, select **All zones**
6. Click **Continue to summary** → **Create Token**
7. Copy the token and save it securely

Set the token as an environment variable:
```bash
export CLOUDFLARE_API_TOKEN="your-token-here"
```

### Step 3: Build and Deploy

```bash
cd events-88
npm run pages:build
wrangler pages deploy .vercel/output/static --project-name=events-88
```

Your site will be deployed to: `https://events-88.pages.dev`

---

## 📦 Build Scripts

The following scripts are now available in `package.json`:

```json
"pages:build": "@cloudflare/next-on-pages"  // Build for Cloudflare Pages
"preview": "npm run pages:build && wrangler pages dev"  // Local preview
"deploy": "npm run pages:build && wrangler pages deploy"  // Deploy via CLI
```

---

## 🌐 Expected Deployment URLs

After deployment, your site will be available at:

- **Production**: `https://events-88.pages.dev`
- **Preview (branches)**: `https://[branch-name].events-88.pages.dev`
- **Custom domain**: Your own domain (if configured)

---

## ⚡ Features of Cloudflare Pages

- ✅ **Unlimited bandwidth** (Free)
- ✅ **Unlimited requests** (Free)
- ✅ **Automatic HTTPS** with SSL certificates
- ✅ **Global CDN** with 200+ data centers
- ✅ **Automatic deployments** on git push
- ✅ **Preview deployments** for every branch/PR
- ✅ **Built-in analytics**
- ✅ **DDoS protection**
- ✅ **Fast builds** (usually 2-5 minutes)

---

## 🔍 Troubleshooting

### Build fails with "Module not found"
- Make sure all dependencies are in `package.json`
- Clear build cache in Cloudflare Dashboard

### Images not loading
- Ensure image domains are configured in `next.config.js`
- Cloudflare Pages supports the Next.js Image Optimization

### API Routes not working
- Cloudflare Pages supports Next.js API routes via Edge Runtime
- Check the [compatibility docs](https://developers.cloudflare.com/pages/framework-guides/nextjs/)

### Build command errors
- Ensure you're using the correct build command: `npm run pages:build`
- Check that `@cloudflare/next-on-pages` is installed

---

## 📚 Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Pages Pricing](https://pages.cloudflare.com/) (Free tier is unlimited)

---

## 🎯 Quick Start Summary

**Fastest path to deployment:**

1. Sign up at [Cloudflare Dashboard](https://dash.cloudflare.com/sign-up)
2. Workers & Pages → Create application → Pages → Connect to Git
3. Select `88events/events-88` repository
4. Build command: `npm run pages:build`
5. Build output: `.vercel/output/static`
6. Click **Save and Deploy**
7. Done! Your site is live at `https://events-88.pages.dev`

---

**Total deployment time**: ~5-7 minutes (including account setup)

**Cost**: $0/month with unlimited bandwidth and requests

**Performance**: Global CDN with <50ms response times worldwide
