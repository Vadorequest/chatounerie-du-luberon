const fs = require('fs');
const path = require('path');
const readdir = require('fs-readdir-promise');
const find = require('lodash.find');

const imagesPath = path.join(__dirname, '../../client/public/images/');

// const lookup = () => {
//   readdir()
// };

const lookupGalleryOffice = (config) => {
  const picturesInConfig = config.galleryOffice.items;
  const folderPath = path.join(imagesPath, 'galleryOffice');
  return readdir(folderPath)
    .then(picturesInFolder => {
      const pictures = [];

      // For every file in the folder, find existing config for this file or create it.
      picturesInFolder.forEach(pic => {
        const existingConfigPicture = find(picturesInConfig, { filename: pic }) || { filename: pic };

        pictures.push(existingConfigPicture);
      });

      // Update the given config.
      config.galleryOffice.items = pictures;

      return config;
    })
    .catch(err => {
      console.error(err);
      return config;
    });
};

module.exports = {
  lookupGalleryOffice,
};
