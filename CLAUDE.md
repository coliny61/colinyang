# Colin Yang Real Estate Website

## Project Overview
This is a Next.js 14 website migrated from Squarespace for Colin Yang's real estate business in Dallas-Fort Worth.

**GitHub:** https://github.com/coliny61/colinyang
**Original Site:** https://www.colinyang.com/realty (Squarespace)

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Formspree (for forms - needs setup)

## Site Structure
```
/                      → Homepage (hero, services, testimonials, CTA)
/new-client-inquiry    → Client intake form (buy/sell/lease)
/apartment-locating    → Apartment/lease contact form
/about-colin           → Bio, services, testimonials
/portfolio             → Property listings (11 properties)
/land-farm-ranch       → Land/farm/ranch inquiry form
/lets-connect          → General contact page
```

## Key Files
- `app/globals.css` - Squarespace-like styling with Montserrat/Lato fonts
- `components/Header.tsx` - Navigation with logo
- `components/Footer.tsx` - Footer with TREC compliance
- `public/images/` - All images downloaded from Squarespace

## Contact Info (hardcoded in site)
- Phone: (469) 256-1088
- Email: colin@hugginsrealty.com
- License: #815417
- Instagram: @bundlbook

## TODO
1. **Set up Formspree** - Replace `YOUR_FORMSPREE_ID` in:
   - `app/new-client-inquiry/page.tsx`
   - `app/apartment-locating/page.tsx`
   - `app/land-farm-ranch/page.tsx`
   - `app/lets-connect/page.tsx`

2. **Deploy to Vercel** - https://vercel.com/new → Import coliny61/colinyang

3. **Configure domain** - Add colinyang.com in Vercel settings

## Commands
```bash
npm run dev    # Start dev server (port 3000 or 3001)
npm run build  # Build for production
npm run start  # Start production server
```

## Notes
- All images are stored locally in `/public/images/`
- Styling matches original Squarespace site
- Forms use native HTML forms with Formspree action URLs
