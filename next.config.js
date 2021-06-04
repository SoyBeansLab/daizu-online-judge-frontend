const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '~': '.',
      style: './src/styles',
    });

    return config;
  }
};
