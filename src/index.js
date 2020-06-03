
require('dotenv').config()

const express = require ('express');
const path = require('path')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))
app.use("/files", express.static(path.resolve(__dirname,'..', 'tmp', 'uploads')))
require('./app/controller/index')(app);

app.listen(3400)
