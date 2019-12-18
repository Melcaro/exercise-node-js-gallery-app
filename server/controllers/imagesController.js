const ImagesStore = require('./../stores/images');

const listOfImages = async (req, res) => {
  try {
    const result = await ImagesStore.getListOfImages();

    const list = result.map(item => {
      return { name: item.name, isFile: item.isFile() };
    });
    console.log(result);
    console.log(list);
    res.send(list);
  } catch (exception) {
    res.status(500).send(exception);
    console.error(exception);
  }
};

module.exports = { listOfImages };
