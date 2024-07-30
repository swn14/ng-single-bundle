const path = require('path');

module.exports = {
  optimization: {
    runtimeChunk: false, // Disable runtime chunk
    splitChunks: {
      chunks: 'all', // Disable code splitting
      cacheGroups: {
        default: false,
        vendors: false
      }
    }
  },
  entry: ['./src/polyfills.ts', './src/main.ts'], // Combine polyfills and main entry points

};
