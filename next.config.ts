import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Ignora errores de TypeScript en el build
  },
};

export default nextConfig;
