const express = require('express');
const forecast = require('./forecast');

const app = express();
app.use(forecast);
module.exports = app;
