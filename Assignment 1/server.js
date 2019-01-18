const express = require('express')
const request = require('request');
const app = express();
const port = 3000

let data;

app.use('/', express.static(__dirname));

app.get('/data', function (req, res) {
    data = [];
    request('http://api.irail.be/liveboard/?id=008814001&arrdep=departure&format=json', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            let arrivals = JSON.parse(body)['departures']['departure'];
            for (let i = 0; i < arrivals.length; i++) {
                let obj = new Object();
                obj.name = arrivals[i]['stationinfo'].name;
                obj.time = arrivals[i]['time'];
                obj.platform = arrivals[i]['platform'];
                let dt = new Date(arrivals[i]['time'] * 1000);
                let hr = dt.getHours();
                let m = "0" + dt.getMinutes();
                let s = "0" + dt.getSeconds();
                obj.readableTime = hr + ":" + m.substr(-2) + ":" + s.substr(-2);
                data.push(obj);
            }
            res.send(data);
        } else {
            res.sendStatus(response.statusCode);
        }
    })
});

app.listen(port, () => console.log(`Traindrops is now running on localhost:${port}!`));