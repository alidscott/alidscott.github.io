/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tenor.com'],
    remotePatterns: [
        {
          protocol: "https",
          hostname: "**", //
        },
    ]
  },
};

export default nextConfig;
