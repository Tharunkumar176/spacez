# Spacez Coupons - Next.js Frontend Assignment

A modern, interactive coupons page built with Next.js, TypeScript, and Tailwind CSS based on Figma design specifications.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with gradient backgrounds and smooth animations
- **Interactive Coupons**: Browse, search, and filter coupons across multiple categories
- **Copy to Clipboard**: One-click coupon code copying with visual feedback
- **Success Messages**: Toast notifications for all interactive actions
- **Category Filtering**: Filter coupons by Electronics, Fashion, Food, Travel, and Services
- **Search Functionality**: Real-time search across coupon titles, descriptions, and codes
- **Featured Deals**: Highlighted premium coupons with special badges
- **Newsletter Subscription**: Interactive email subscription component
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Add new site from Git
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Deploy

## 🎨 Design Features Implemented

- ✅ Hero section with gradient background
- ✅ Search bar with icon
- ✅ Category filter buttons
- ✅ Coupon cards with:
  - Discount badges
  - Featured labels
  - Copy code functionality
  - Expiry dates
  - Terms & conditions
  - Apply and save buttons
- ✅ Newsletter subscription section
- ✅ Comprehensive footer
- ✅ Success toast notifications
- ✅ Smooth hover effects and transitions
- ✅ Responsive grid layout

## 🎯 Interactive Elements

All buttons and interactive elements show success messages:
- Sign In button
- Apply Coupon button
- Copy Code button
- Save to Favorites button
- Newsletter Subscribe button
- Footer navigation links
- Category filter buttons

## 📱 Responsive Design

- Desktop: 3-column grid layout
- Tablet: 2-column grid layout
- Mobile: Single column layout
- Sticky header for easy navigation
- Mobile-optimized spacing and typography

## 🧪 Testing

To test the application:
1. Search for coupons using the search bar
2. Filter by different categories
3. Click "Copy Code" to copy coupon codes
4. Click "Apply Coupon" to see success messages
5. Click "Save to Favorites" (star icon)
6. Subscribe to the newsletter
7. Test all footer links

## 📝 Project Structure

\`\`\`
spacez/
├── app/
│   ├── coupons/
│   │   └── page.tsx          # Main coupons page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page (redirects to /coupons)
├── public/                    # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
\`\`\`

## 🎓 Assignment Requirements Met

- ✅ Recreated coupons page based on Figma design
- ✅ All buttons are interactive and clickable
- ✅ Success messages displayed for all interactions
- ✅ Frontend-only implementation (no backend)
- ✅ Modern Next.js with TypeScript
- ✅ Responsive and accessible design
- ✅ Ready for deployment to Vercel/Netlify

## 📸 Features Showcase

### Implemented Components:
1. **Header**: Sticky navigation with logo and sign-in button
2. **Hero Banner**: Gradient background with promotional text
3. **Search Bar**: Full-width search with icon
4. **Category Filters**: Pill-style buttons with active states
5. **Coupon Cards**: 
   - Featured badges for premium deals
   - Discount percentage/amount
   - Dashed border code container
   - Copy-to-clipboard functionality
   - Expiry countdown
   - Collapsible terms
   - Action buttons (Apply, Save)
6. **Newsletter Section**: Email subscription with gradient background
7. **Footer**: Multi-column layout with links and branding

## 🎨 Color Scheme

- Primary: Purple (#9333EA)
- Secondary: Blue (#2563EB)
- Background: Gradient from purple-50 to blue-50
- Text: Gray scale for hierarchy
- Success: Green (#22C55E)

## ⚡ Performance

- Server-side rendering with Next.js
- Optimized images and assets
- Minimal JavaScript bundle
- Fast page loads
- Smooth animations with CSS

## 🤝 Contributing

This is an assignment submission. For any questions or issues, please contact the developer.

## 📄 License

This project is created as part of a frontend development assignment.

---

**Developer**: Tharun
**Assignment**: Frontend in Next.js from Figma
**Company**: Spacez
**Date**: January 2026
