const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

module.exports = withCSS(withImages({
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) {
      return defaultPathMap;
    }
    await copyFile(join(dir, 'static/robots.txt'), join(outDir, 'robots.txt'));

    return defaultPathMap;
  },
}));
