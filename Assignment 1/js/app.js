let data;
// let currentTime = Math.round((new Date()).getTime() / 1000);
let currentTime = 1547711940;
console.log('Current time: ', currentTime);

let xhttp = new XMLHttpRequest();
xhttp.open('GET', '/data');
xhttp.onload = function () {
    data = removeDelayed(JSON.parse(this.response));
    let myp5 = new p5(s);
    console.log(data);
}
xhttp.send();

function removeDelayed(data) {
    for (let i = data.length - 1; i > 0; i--) {
        if (data[i].time < currentTime - 60 || data[i].platform == '?') {
            data.splice(i,1);
        }
    }
    return data;
} 

let s = function(sketch) {
    //Declare environment variables
    let canvas, width, height, gravity, vialWidth, spacing, currentTime, scheduler;

    //Declare colors
    let colors = [];
    let red, orange, yellow, green, teal, blue, purple, pink;

    //Declare Trains
    let amount;
    let trains = [];

    sketch.setup = function() {
        //Initialize environment variables
        gravity = 0.45;
        width = 1200;
        height = 600;
        amount = 21;
        vialWidth = width / amount - 10;
        vialHeight = 40;
        spacing = ((width / amount) - vialWidth);
        scheduler = 0;

        //Initialize canvas
        sketch.createCanvas(width, height);

        //Apple Interface Guideline Colors
        red = [255, 59, 48];
        orange = [255, 149, 0];
        yellow = [255, 204, 0];
        green = [76, 217, 100];
        teal = [90, 200, 255];
        blue = [0, 122, 255];
        purple = [88, 86, 214];
        pink = [255, 45, 85];
        colors.push(red, orange, yellow, green, teal, blue, purple, pink);

        for (let i = 0; i < data.length; i++) {
            let train = new Train(vialWidth / 2 + ((parseInt(data[i].platform) - 1) * vialWidth) + ((parseInt(data[i].platform) - 1) * spacing + (spacing / 2)), (height / 2) + (1.5 * vialHeight), vialWidth, vialHeight, data[i].time, colors[i % colors.length], sketch);
            trains.push(train);
        }

        // currentTime = Math.round((new Date()).getTime() / 1000);
        currentTime = 1547711940;
    }

    sketch.draw = function() {
        currentTime += 2;
        sketch.background(0);
        sketch.textSize(16);
        sketch.fill(255, 255, 255);
        sketch.noStroke();

        let counter = 0;
        for (let i = scheduler; i < scheduler + 5; i++) {
            if (i < data.length) {
                sketch.textAlign(sketch.RIGHT);
                sketch.text(data[i].platform, width / 2 - 50, height - 100 + (counter * 20));
                sketch.textAlign(sketch.LEFT);
                sketch.text(data[i].readableTime, width / 2 - 25, height - 100 + (counter * 20));
                sketch.text(data[i].name, width / 2 + 50, height - 100 + (counter * 20));
            }
            counter++;
        }

        for (let i = trains.length - 1; i >= 0; i--) {
            if (trains[i].time <= currentTime - 60) {
                trains[i].show();
            }
            if (trains[i].vial1.opacity <= 0) {
                trains.splice(i, 1);
                scheduler++;
            }
        }
    }
}