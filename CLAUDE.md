# Colin Yang Real Estate Website

## Project Overview
Next.js 14 website for Colin Yang's real estate business in Dallas-Fort Worth.

**Live Site:** https://colinyang.com
**GitHub:** https://github.com/coliny61/colinyang

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Formspree (forms)
- Vercel (hosting)

## Site Structure
```
/                      → Homepage
/new-client-inquiry    → Client intake form
/apartment-locating    → Apartment/lease contact form
/about-colin           → Bio, services, testimonials
/portfolio             → Property listings (11 properties)
/land-farm-ranch       → Land/farm/ranch inquiry form
```

## Contact Info
- Phone: (469) 256-1088
- Email: colin@brayreg.com
- License: #815417
- Instagram: @colinyang61
- LinkedIn: linkedin.com/in/colinyang61

## Brokerage
Bray Real Estate Group
3130 Harvard Ave, Ste. B, Dallas, TX 75205

## Commands
```bash
npm run dev    # Start dev server
npm run build  # Build for production
npm run start  # Start production server
```

## Deployment
Hosted on Vercel. Push to main branch to deploy.

## Forms
Forms use Formspree. Update the form ID in:
- `app/new-client-inquiry/page.tsx`
- `app/apartment-locating/page.tsx`
- `app/land-farm-ranch/page.tsx`
