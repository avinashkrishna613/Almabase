const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');

const app = express();
const indexRouter = require('./routes/index');

app.use(bodyParser())
app.use("/", indexRouter);

app.listen(3000);






