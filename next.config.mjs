// next.config.mjs
import { defineConfig } from 'next';

export default defineConfig({
  images: {
    domains: ['your-project.supabase.co'], // Add Supabase CDN
  },
  env: {
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    REDIS_URL: process.env.REDIS_URL,
  },
});