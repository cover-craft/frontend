module.exports = {
    images: {
        loader: "imgix",
        path: ["https://cover-craft.github.io/frontend/"],
    },
};
const { imageOptimizer } = require("next/dist/server/image-optimizer");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
    openAnalyzer: false,
});

const repository = "https://cover-craft.github.io/frontend";

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: repository,
    swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
