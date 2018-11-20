//Declare environment variables
let canvas, width, height, gravity, vialWidth, spacing;

//Declare colors
let colors = [];
let red, orange, yellow, green, teal, blue, purple, pink;

//Declare gradients
let greenGradient;

//Declare Trains
let amount;
let trains = [];

function setup() {
    //Initialize environment variables
    gravity = 0.45;
    width = 1200;
    height = 600;
    amount = 21;
    vialWidth = width / amount - 10;
    vialHeight = 40;
    spacing = ((width / amount) - vialWidth);
    
    //Initialize canvas
    canvas = createCanvas(width, height);
    
    //Apple Interface Guideline Colors
    red = [255,59,48];
    orange = [255, 149, 0];
    yellow = [255,204,0];
    green = [76,217,100];
    teal = [90, 200, 255];
    blue = [0, 122, 255];
    purple = [88, 86, 214];
    pink = [255, 45, 85];
    colors.push(red,orange,yellow, green, teal, blue, purple, pink);
    
    //Gradients
    greenGradient = [color(76,217,100), color(75,255,198)];
    
    for (let i = 0; i < amount; i ++) {
        let train = new Train(vialWidth / 2 + (i * vialWidth) + (i * spacing + (spacing / 2)), (height / 2) + (2 * vialHeight), vialWidth, vialHeight, colors[i % colors.length]);
        trains.push(train);
    }
    
}

function draw() {
    let hours = hour();
    let minutes = minute();
    let seconds = second();
    background(0);
    textSize(32)
    fill(255, 255, 255);
    noStroke();
    text(hours + ':' + minutes + ':' + seconds, width / 2 - (2*32), 50);
    
    for (let i = 0; i < trains.length; i++) {
        trains[i].show()
    }
}