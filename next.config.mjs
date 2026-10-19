/** @type {import('next').NextConfig} */
const nextConfig = {
  // The home page reads this file at runtime when it revalidates, so ship it with the server bundle.
  outputFileTracingIncludes: {
    "/": ["./content/**"],
  },
  images: {
    unoptimized: true, // Keep this for better performance
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

export default nextConfig;
