/** @type {import('next').NextConfig} */

// Yang Productions (the producing platform) is a SEPARATE Next app deployed at
// yang-productions.vercel.app. We surface it under colinyang.com via rewrites so
// the producer-facing surfaces live on the apex domain without merging the two
// codebases. Only the routes that app actually owns are proxied:
//   /production(/*)         — public productions surface
//   /prodadmin(/*)          — authenticated admin (gated by that app's own auth)
//   /login                  — admin sign-in (top-level; its server action posts here)
//   /api/productions(/*)    — that app's ONLY api namespace (the AI assistant
//                             generation route; auth + a server-side flag gate it).
//                             Deliberately narrow: NOT /api/:path* — this site may
//                             grow its own /api routes.
// The proxied app sets assetPrefix to its own host, so its /_next assets load
// directly from yang-productions.vercel.app and DON'T need a rewrite here (and
// won't collide with this site's own /_next).
const YANG_PRODUCTIONS_ORIGIN = "https://yang-productions.vercel.app";

const nextConfig = {
  async rewrites() {
    return [
      { source: "/production", destination: `${YANG_PRODUCTIONS_ORIGIN}/production` },
      { source: "/production/:path*", destination: `${YANG_PRODUCTIONS_ORIGIN}/production/:path*` },
      { source: "/prodadmin", destination: `${YANG_PRODUCTIONS_ORIGIN}/prodadmin` },
      { source: "/prodadmin/:path*", destination: `${YANG_PRODUCTIONS_ORIGIN}/prodadmin/:path*` },
      { source: "/login", destination: `${YANG_PRODUCTIONS_ORIGIN}/login` },
      { source: "/api/productions/:path*", destination: `${YANG_PRODUCTIONS_ORIGIN}/api/productions/:path*` },
    ];
  },
};

module.exports = nextConfig;
