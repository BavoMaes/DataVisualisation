const express = require('express')
const request = require('request');
const app = express();
const port = 3000

let data;

app.use('/', express.static(__dirname));

app.listen(port, () => console.log(`SkipEhB is now running on localhost:${port}!`));