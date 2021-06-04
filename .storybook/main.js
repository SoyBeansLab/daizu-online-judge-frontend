const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpack: (config) => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '~': '../components',
      style: './src/styles',
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  }
}
