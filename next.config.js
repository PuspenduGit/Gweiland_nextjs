/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        options.defaultLoaders.babel,
        { loader: "file-loader", options: { esModule: false } },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
