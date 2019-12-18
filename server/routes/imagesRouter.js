const router = require('express').Router();

const ImagesCtrl = require('./../controllers/imagesController');

router.get('/', ImagesCtrl.listOfImages);

module.exports = router;
