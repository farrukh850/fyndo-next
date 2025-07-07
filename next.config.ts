/** @type {import('next').NextConfig} */
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
  webpack(config: any) {
        // Add video file handling
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      type: 'asset/resource',
    });
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "react",
      },
    },
  },
  images: {
    remotePatterns: [],
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
