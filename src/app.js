const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

require('dotenv').config()

//Database connect
//require('./db/con_db')

//Define port
var port = process.env.PORT || 8999

//Use apps
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

//Router
const services = require('./router/routes');
app.use('/api', services);

// Port listening
app.listen(port)
    console.log('API listening in the port: ' + port);

module.exports = {
    app
};