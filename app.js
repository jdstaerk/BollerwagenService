const config = require('./config');
const express = require('express');
const app = express();

app.use(express.static('./frontend/dist'))

app.get('/api/v1/data-combined', (req, res) => {

});

app.listen(config.http.port, () => console.log('Bollerwagen Web Service is running on :' + config.http.port))
