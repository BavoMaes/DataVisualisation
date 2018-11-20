class Drop {
    
    constructor(x, y, width, height, speed, color, gravity, vialWidth) {
        this.x = random(x - 15, x + 15);
        this.y = random(y - 1000, y);
        this.width = random(width - (vialWidth / 2), width + (vialWidth / 2));
        this.height = random(height - 10, height + 10);
        this.speed = random(speed - 4, speed + 4);
        this.originalspeed = speed;
        this.color = color;
        this.gravity = random(gravity - 0.05, gravity + 0.05);
        this.history = [];
        this.opacity = random(0.4,0.9) * 255;
        this.vialWidth = vialWidth;
    }
    
    fall() {
        let currentLocation = createVector(this.x - (this.width / 2), this.y - 20);
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
        noStroke();
        fill(this.color[0], this.color[1], this.color[2], this.opacity);
        rect(this.x - (this.width / 2), this.y, this.width, this.height, 25);
        for (let i = 0; i < this.history.length; i++) {
            fill(this.color[0], this.color[1], this.color[2], 5 + i)
            let pos = this.history[i];
            rect(this.history[i].x, this.history[i].y, this.width, this.height, 25);
        }
    }
    
}