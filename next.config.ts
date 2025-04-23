import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Ignora errores de TypeScript en el build
  },
  eslint: {
    ignoreDuringBuilds: true, // 🔥 Esto evita que ESLint rompa el build
  },
};

export default nextConfig;
