class Drop {
    
    constructor(x, y, width, height, speed, color, gravity, vialWidth, sketch) {
        this.x = sketch.random(x - 15, x + 15);
        this.y = sketch.random(y - 1000, y);
        this.width = sketch.random(width - (vialWidth / 2), width + (vialWidth / 2));
        this.height = sketch.random(height - 10, height + 10);
        this.speed = sketch.random(speed - 4, speed + 4);
        this.originalspeed = speed;
        this.color = color;
        this.gravity = sketch.random(gravity - 0.05, gravity + 0.05);
        this.history = [];
        this.opacity = sketch.random(0.4,0.9) * 255;
        this.vialWidth = vialWidth;
        this.sketch = sketch;
    }
    
    fall() {
        let currentLocation = this.sketch.createVector(this.x - (this.width / 2), this.y - 20);
        this.history.push(currentLocation);
        
        if (this.history.length > 10) {
            this.history.splice(0,1);
        }
        
        this.y += this.speed;
        this.speed += this.gravity;
        if (this.y > 600) {
            this.y = 0;
            this.speed = this.originalspeed;
        }
    }
    
    show() {
        this.sketch.noStroke();
        this.sketch.fill(this.color[0], this.color[1], this.color[2], this.opacity);
        this.sketch.rect(this.x - (this.width / 2), this.y, this.width, this.height, 25);
        for (let i = 0; i < this.history.length; i++) {
            this.sketch.fill(this.color[0], this.color[1], this.color[2], 5 + i)
            let pos = this.history[i];
            this.sketch.rect(this.history[i].x, this.history[i].y, this.width, this.height, 25);
        }
    }
    
}