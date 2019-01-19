let myp5 = new p5(sketch1, 'image');
let palette;

function visualise(palette1) {
    palette = palette1;
    let visp5 = new p5(visualisation, 'visualisation');
    paletteToHtml(palette);
}

let visualisation = function(p5) {

    let angle;

    p5.setup = function() {
        p5.createCanvas(600, 400, p5.WEBGL);
        console.log(palette);
        angle = 0;
    }

    p5.draw = function() {
        p5.translate(0, 0, -300);
        p5.rotateX(p5.PI - 0.2);
        p5.translate(0, -50, 0);
        p5.rotateY(p5.QUARTER_PI + angle);
        p5.background(0);
        p5.stroke(255);
        p5.strokeWeight(3);
        p5.line(0,0,0,255,0,0);
        p5.line(0,0,0,0,255,0);
        p5.line(0,0,0,0,0,255);

        p5.stroke(128);
        p5.strokeWeight(0.5);
        p5.fill('rgba(255,255,255, 0.03)');
        p5.translate(128, 128, 128);
        p5.box(255);
        p5.translate(-128, -128, -128);
        
        p5.noStroke();
        p5.fill(0,0,255);
        p5.translate(0,0,255);
        p5.sphere(10);
        p5.translate(0, 0, -255);
       
        p5.fill(0, 255, 0);
        p5.translate(0,255,0);
        p5.sphere(10);
        p5.translate(0, -255, 0);
        
        p5.fill(255, 0, 0);
        p5.translate(255, 0 ,0 );
        p5.sphere(10);
        p5.translate(-255, 0, 0);

        for (let i = 0; i < palette.length; i++) {
            p5.fill(palette[i][0], palette[i][1], palette[i][2]);
            p5.translate(palette[i][0], palette[i][1], palette[i][2]);
            p5.sphere(8);
            p5.translate(-palette[i][0], -palette[i][1], -palette[i][2]);
        }

        angle = angle + 0.01;
    }
}

function paletteToHtml(palette) {
    let colorList = '<ul>';
    palette.forEach(element => {
        colorList += '<li><div class="palette" style="background-color:#' + rgbToHex(element) + '"></div><p>#' + rgbToHex(element) + '</li>'
    });
    document.getElementById('palette').innerHTML = colorList;
}

function rgbToHex(rgb) {
    let hex = "";
    for (let i = 0; i < 3; i ++) {
        let temp = Number(rgb[i]).toString(16);
        if (temp.length < 2) {
            temp = "0" + temp;
        }
        hex += temp;
    }
    return hex;
};