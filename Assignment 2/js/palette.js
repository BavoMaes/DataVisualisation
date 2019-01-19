let sketch1 = function (sketch) {
    let palette1;
    let width;
    let height;
    let pixelD;
    let paletteSize;

    sketch.preload = function () {
        img = sketch.loadImage("img/monet.jpg");
    }

    sketch.setup = function () {
        setCanvasSize();
        sketch.background(0);
        pixelD = sketch.pixelDensity();
        paletteSize = 8;
        sketch.noStroke();
        sketch.noLoop();
    }

    sketch.draw = function () {
        sketch.image(img, 0, 0);
        sketch.loadPixels();
        getPalettes();
        drawPalettes();
    }

    function setCanvasSize() {
        width = img.width;
        height = img.height;
        sketch.createCanvas(width, height + 25);
    }

    function getPalettes() {
        let popularity = new PopularityQuantization(sketch.pixels, width, height, pixelD, paletteSize);
        palette1 = popularity.getPalette();
        visualise(palette1);
    }

    function drawPalettes() {
        for (let i = 0; i < palette1.length; i++) {
            sketch.fill(palette1[i][0], palette1[i][1], palette1[i][2]);
            // sketch.rect(i * 20, height + 5, 20, 20);
        }
    }
}