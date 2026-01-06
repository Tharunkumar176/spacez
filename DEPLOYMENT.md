# Deployment Guide - Spacez Coupons

## Quick Deployment to Vercel (Recommended - 5 minutes)

### Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it: `spacez-coupons` or any name you prefer
   - Make it **public**
   - Don't initialize with README (we already have one)

2. Push your code:
\`\`\`bash
git remote add origin https://github.com/YOUR_USERNAME/spacez-coupons.git
git branch -M main
git push -u origin main
\`\`\`

### Step 2: Deploy to Vercel

1. Visit https://vercel.com/new
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `spacez-coupons` repository
5. Vercel will automatically detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click **Deploy**
7. Wait 2-3 minutes for deployment
8. You'll get a live URL like: `https://spacez-coupons.vercel.app`

### Step 3: Submit Your Work

Visit: https://savz.live/devnextjsassignmentsubmission

Submit:
- GitHub Repository URL: `https://github.com/YOUR_USERNAME/spacez-coupons`
- Live Website URL: `https://spacez-coupons.vercel.app` (or your custom domain)

---

## Alternative: Deploy to Netlify

### Step 1: Build the Project

\`\`\`bash
npm run build
\`\`\`

### Step 2: Deploy to Netlify

1. Visit https://app.netlify.com/start
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click **Deploy site**
7. You'll get a URL like: `https://random-name-123.netlify.app`
8. You can customize the domain in Site Settings

---

## Troubleshooting

### Issue: Build fails on Vercel/Netlify
**Solution**: Make sure all dependencies are in `package.json` and run `npm install` locally first

### Issue: Page not loading
**Solution**: Check that the build completed successfully and there are no TypeScript errors

### Issue: Images not loading
**Solution**: Make sure all image paths are correct and images are in the `public` folder

---

## Custom Domain (Optional)

### Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

---

## Environment Variables (If needed in future)

For both Vercel and Netlify:
1. Go to Project Settings
2. Find "Environment Variables" section
3. Add your variables
4. Redeploy

---

## Performance Tips

Your site is already optimized with:
- ✅ Next.js App Router (Server Components)
- ✅ Automatic code splitting
- ✅ Image optimization ready
- ✅ CSS optimization with Tailwind
- ✅ TypeScript for type safety

---

## Monitoring Your Site

### Vercel:
- Analytics: Automatic in Vercel dashboard
- Logs: Available in deployment logs
- Performance: Built-in Web Vitals tracking

### Netlify:
- Analytics: Available as add-on
- Logs: Check Functions tab
- Performance: Use Lighthouse in browser

---

## Quick Commands Reference

\`\`\`bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production Build
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Check code quality

# Git Commands
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Push to GitHub
\`\`\`

---

## Support

If you encounter issues:
1. Check the Vercel/Netlify build logs
2. Verify all files are committed to GitHub
3. Ensure Node.js version compatibility (v18+ recommended)
4. Check that all dependencies installed successfully

---

## What's Included

Your deployment includes:
- ✅ Fully responsive coupons page
- ✅ Interactive buttons with success messages
- ✅ Search and filter functionality
- ✅ Copy-to-clipboard feature
- ✅ Modern UI with animations
- ✅ SEO-friendly structure
- ✅ Fast loading times
- ✅ Mobile-optimized design

---

**Good luck with your submission!** 🚀
