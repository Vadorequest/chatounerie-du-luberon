const fs = require('fs');
const path = require('path');
const readdir = require('fs-readdir-promise');
const find = require('lodash.find');

const imagesPath = path.join(__dirname, '../../old-client/public/images/');

const lookupFolder = (config, key) => {
  const picturesInConfig = config[key].items;
  const folderPath = path.join(imagesPath, key);

  return readdir(folderPath)
    .then(picturesInFolder => {
      const pictures = [];

      // For every file in the folder, find existing config for this file or create it.
      picturesInFolder.forEach(pic => {
        const existingConfigPicture = find(picturesInConfig, { filename: pic }) || { filename: pic };

        pictures.push(existingConfigPicture);
      });

      // Update the given config.
      config[key].items = pictures;

      return config;
    })
    .catch(err => {
      console.error(err);
      return config;
    });
};

const lookupGalleryOffice = (config) => {
  return lookupFolder(config, 'galleryOffice');

};

const lookupGalleryCats = (config) => {
  return lookupFolder(config, 'galleryCats');
};

const lookupCovers = (config) => {
  return lookupFolder(config, 'covers');
};

module.exports = {
  lookupGalleryOffice,
  lookupGalleryCats,
  lookupCovers,
};
