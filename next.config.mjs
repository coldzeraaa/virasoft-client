import { resolveExtensions } from "./node_modules/simple-helper-fns/dist/index.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  transpilePackages: ["lodash-es", "rc-field-form"],
  webpack: (config) => {
    config.resolve.extensions = resolveExtensions(config, process.env);
    return config;
  },
};

export default nextConfig;
