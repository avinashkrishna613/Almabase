const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');

const app = express();
const indexRouter = require('./routes/index');

app.use(bodyParser())
app.use("/", indexRouter);

const port = process.env.PORT || 3000;

app.listen(port);






