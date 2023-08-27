const menu = require('./lib/menu.js');

module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      menu: menu.get('_pages'),
    },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
        };
      }
      return config;
    },
  };
};
