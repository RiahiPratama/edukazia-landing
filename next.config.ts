import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sembunyikan "X-Powered-By: Next.js" header — kurangi tech fingerprint
  poweredByHeader: false,

  // Compress responses (gzip/brotli)
  compress: true,

  // Custom security headers (juga improve SEO/audit scores)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
