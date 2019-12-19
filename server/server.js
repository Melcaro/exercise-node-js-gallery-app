const express = require('express');
const cors = require('cors');
const imagesRouter = require('./routes/imagesRouter');
const app = express();

app.use(cors());

app.use('/gallery', express.static('./images'));
app.use('/images', imagesRouter);

app.listen(process.env.PORT || 5000);
