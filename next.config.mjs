/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Keep this for better performance
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "i.scdn.co", // Spotify images
    ],
  },
};

export default nextConfig;
