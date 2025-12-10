#!/bin/bash
# Cloudflare Pages Deployment Script
# Usage: ./deploy-cloudflare.sh

set -e

echo "🚀 Deploying to Cloudflare Pages..."
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI not found!"
    echo "📦 Installing wrangler..."
    npm install -g wrangler
fi

# Check authentication
echo "🔐 Checking Cloudflare authentication..."
if ! wrangler whoami &> /dev/null; then
    echo "⚠️  Not authenticated with Cloudflare"
    echo "🌐 Opening browser for authentication..."
    wrangler login
fi

# Build the project
echo ""
echo "🔨 Building project for Cloudflare Pages..."
npm run pages:build

# Deploy to Cloudflare Pages
echo ""
echo "☁️  Deploying to Cloudflare Pages..."
wrangler pages deploy .vercel/output/static --project-name=events-88

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site is live at: https://events-88.pages.dev"
