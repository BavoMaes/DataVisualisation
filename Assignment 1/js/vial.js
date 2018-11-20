class Vial {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    show() {
//        let color1 = color(76,217,100);
//        let color2 = color(75,255,198);
//        for (let i = 0; i < 100; i++) {
//            stroke(lerpColor(color1, color2, i / 100))
//            line(this.x, this.y + i, this.x + this.width, this.y + i)
//        }
//        noStroke();
        fill(this.color[0], this.color[1], this.color[2]);
        rect(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height, 10);
    }
    
    grow() {
        this.height = this.height + 6;
        this.y -= 3;
    }
}