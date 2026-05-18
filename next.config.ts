import type { NextConfig } from "next";

const basePath = "/new-branch";
const nextConfig: NextConfig = {
  ...(basePath && {
    basePath,
    assetPrefix: basePath,
  }),
};

export default nextConfig;

// Enable getCloudflareContext() in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
