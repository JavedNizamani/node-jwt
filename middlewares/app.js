const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoute = require('../routes/auth.route');


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/api',authRoute);


module.exports = app;