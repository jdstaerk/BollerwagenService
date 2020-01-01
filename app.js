const config = require('./config');
const express = require('express');
const app = express();

app.use(express.static('./frontend/dist'))

app.get('/', (req, res) => {
    res.send('Yes!')
});

app.listen(config.http.port, () => console.log('Bollerwagen Web Service is running on :' + config.http.port))
