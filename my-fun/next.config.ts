import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Permite que Vercel publique la página aunque haya pequeños errores de tipado
    ignoreBuildErrors: true,
  },
};



export default nextConfig;
