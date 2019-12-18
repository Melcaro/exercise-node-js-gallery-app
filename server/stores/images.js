const axios = require('axios');
const fs = require('fs');

const URL = 'http://localhost:5000/';

const getListOfImages = async () => {
  try {
    const listOfImages = await new Promise((resolve, reject) => {
      fs.readdir('./images', { withFileTypes: true }, (err, items) => {
        if (err) {
          return reject(err);
        }
        return resolve(items);
      });
    });
    console.log(listOfImages);
    return listOfImages;
  } catch (err) {
    console.error(err);
  }
};

const getAnimalPicture = query => {
  return `${URL}/${query}.jpg`;
};

module.exports = { getListOfImages, getAnimalPicture };
