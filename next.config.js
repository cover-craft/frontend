const withImages = require("next-images");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
    openAnalyzer: false,
});

const repository = "https://cover-craft.github.io/frontend";

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: repository,
    withImages,
    swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
