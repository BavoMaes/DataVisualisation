class Vial {
    constructor(x, y, width, height, color, sketch) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.sketch = sketch;
        this.opacity = 255;
    }
    
    show() {
        this.sketch.fill(this.color[0], this.color[1], this.color[2], this.opacity);
        this.sketch.rect(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height, 10);
    }

    fadeOut() {
        this.opacity -= 3;
        this.y++;
    }
    
    grow() {
        this.height = this.height + 6;
        this.y -= 3;
    }
}