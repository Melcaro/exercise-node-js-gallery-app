const axios = require('axios');
const fs = require('fs');

const URL = 'http://localhost:5000/';

const getListOfImages = async path => {
  try {
    const listOfImages = await new Promise((resolve, reject) => {
      fs.readdir(`./images/${path}`, { withFileTypes: true }, (err, items) => {
        if (err) {
          return reject(err);
        }
        return resolve(items);
      });
    });
    return listOfImages;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getListOfImages };
