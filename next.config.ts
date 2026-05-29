import type { NextConfig } from 'next';

import nextra from 'nextra';

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
});

const nextConfig: NextConfig = withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // ts-morph (via reablocks-docs-theme/tsdoc) is Node-only; keep it out of the
  // RSC/edge bundler so optional `p-support` etc. don't trigger build warnings.
  serverExternalPackages: ['ts-morph', '@ts-morph/common'],
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    // ts-morph's @ts-morph/common references `source-map-support` as an
    // optional dep; webpack warns when it can't resolve it. Stub it out.
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'source-map-support': false,
    };

    return config;
  },
});

export default nextConfig;
