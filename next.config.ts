import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['your-project.supabase.co'], // Add Supabase CDN
  },
  env: {
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    REDIS_URL: process.env.REDIS_URL,
  },
};

export default nextConfig;