const ImagesStore = require('./../stores/images');

const listOfImages = async (req, res) => {
  const path = req.params['0'];
  console.log(req.params);
  try {
    const result = await ImagesStore.getListOfImages(path);

    const list = result.map(item => {
      return {
        name: item.name,
        isFile: item.isFile(),
        path: `/gallery/${item.name}`,
      };
    });
    res.send(list);
  } catch (exception) {
    res.status(500).send(exception);
    console.error(exception);
  }
};

module.exports = { listOfImages };
