# Colin Yang Real Estate Website

## Project Overview
Next.js 14 website for Colin Yang, a bilingual luxury real estate agent in Dallas-Fort Worth. Features a dark luxury theme with Bray Real Estate Group branding.

**Live Site:** https://colinyang.com
**Vercel URL:** https://colin-yang-website.vercel.app
**GitHub:** https://github.com/coliny61/colinyang

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Formspree (forms → colin@brayreg.com)
- Vercel (hosting)

## Design
- Dark luxury theme (background: #0a0a0a)
- Accent color: Bray Real Estate red (#D52E28)
- Languages: English only (no Chinese text)

## Site Structure
```
/                      → Homepage (hero, services, testimonials, stats)
/about-colin           → Bio, services, testimonials
/portfolio             → Property listings grid (11 properties)
/portfolio/[slug]      → Individual property pages with gallery
/new-client-inquiry    → Client intake form (buy/sell/lease)
/apartment-locating    → Apartment/lease contact form
/land-farm-ranch       → Land/farm/ranch inquiry form
/lets-connect          → General contact page
```

## Contact Info (Colin Yang)
- Phone: (469) 256-1088
- Email: colin@brayreg.com
- Texas License: #815417
- Instagram: @colinyang61
- LinkedIn: linkedin.com/in/colinyang61

## Brokerage
Bray Real Estate Group
3130 Harvard Ave, Ste. B, Dallas, TX 75205

## Key Components
- `components/Header.tsx` - Navigation with logo and headshot
- `components/Footer.tsx` - Footer with TREC compliance links
- `components/QuickContact.tsx` - Floating call/text buttons
- `components/PropertyGallery.tsx` - Image gallery with lightbox

## Forms
All forms use Formspree ID: `xqebdqqw`
Submissions go to: colin@brayreg.com

Form pages:
- `app/new-client-inquiry/page.tsx`
- `app/apartment-locating/page.tsx`
- `app/land-farm-ranch/page.tsx`
- `app/lets-connect/page.tsx`

## SEO
- `app/sitemap.ts` - Dynamic sitemap generation
- `public/robots.txt` - Search engine directives
- `app/layout.tsx` - JSON-LD structured data for RealEstateAgent

## Images
All images stored in `/public/images/`:
- `colin-headshot.jpg` - Main headshot
- `hero.jpeg` - Homepage hero
- `portfolio/[property-slug]/` - Property photos

## Commands
```bash
npm run dev    # Start dev server (port 3001)
npm run build  # Build for production
npm run start  # Start production server
```

## Deployment
- Hosted on Vercel (cy61biz@gmail.com account)
- Push to `main` branch triggers automatic deploy
- Domain: colinyang.com (DNS configured to Vercel)

## DNS Configuration
- A record: @ → 76.76.21.21
- CNAME: www → cname.vercel-dns.com
