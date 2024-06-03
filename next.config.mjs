import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: { remotePatterns: [{ hostname: "i.pravatar.cc" }] },
};

export default nextConfig;
