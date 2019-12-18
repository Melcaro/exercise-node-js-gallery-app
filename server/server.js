const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const imagesRouter = require('./routes/imagesRouter');

app.use('/images', imagesRouter);

//app.use('/images', express.static('./images'));

app.listen(process.env.PORT || 5000);
