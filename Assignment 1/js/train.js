class Train {
    constructor(x, y, width, height, time, color, sketch) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.time = time;
        this.color = color;
        this.sketch = sketch;
        this.drops = [];
        this.vial1 = new Vial(x, y, this.width, 0, color, sketch);
        for (let i = 0; i < 20; i++) {
            let drop = new Drop(x, 0, 5, 20, 5, color, 0.10, 5, sketch);
            this.drops.push(drop);
        }
    }
    
    show() {
        if (this.vial1.opacity >= 0) {
            this.vial1.show();
            for (let i = 0; i < this.drops.length; i++) {
                this.drops[i].show();
                this.drops[i].fall();
            }
            this.deleteDrops();
            if (this.drops.length <= 0) {
                this.vial1.fadeOut();
            }
        }
    }
    
    deleteDrops() {
        for (let i = this.drops.length - 1; i >= 0; i--) {
            if ( this.drops[i].y >= this.y - ((20 - this.drops.length) * 4) - 40) {
                this.drops.splice(i,1);
                this.vial1.grow();
            }
        }
    }
}