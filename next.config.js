const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
    openAnalyzer: false,
});

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
