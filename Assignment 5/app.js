const fs = require("fs");
const express = require('express')
const request = require('request');
const app = express();
const port = 3000

let data = require('./data.json');

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', express.static(__dirname));

app.get('/data', function (req, res) {
    res.send(data);
});

app.post('/new', function (req, res) {
    let degree = req.body.degree;
    let course = req.body.course;
    let teacher = req.body.teacher;

    let node1;
    let node2;
    let node3;

    for (let i = 0; i < data['nodes'].length; i++) {
        if (data['nodes'][i].name == course) {
            node1 = data['nodes'][i].node;
        }
        if (data['nodes'][i].name == degree) {
            node2 = data['nodes'][i].node;
        }
        if (data['nodes'][i].name == teacher) {
            node3 = data['nodes'][i].node;
        }
    }

    for (let i = 0; i < data['links'].length; i++) {
        if (data['links'][i].source == node1) {
            if (data['links'][i].target == node2) {
                data['links'][i].value += 1;
            }
        }
        if (data['links'][i].source == node2) {
            if (data['links'][i].target == node3) {
                data['links'][i].value += 1;
            }
        }
    }

    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });

    res.redirect('/');
});

app.listen(port, () => console.log(`SkipEhB is now running on localhost:${port}!`));