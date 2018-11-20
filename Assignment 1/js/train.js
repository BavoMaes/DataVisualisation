class Train {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.drops = [];
        this.vial1 = new Vial(x, y, this.width, 0, color);
        for (let i = 0; i < 20; i++) {
            let drop = new Drop(x, 0, 5, 20, 5, color, 0.10, 5);
            this.drops.push(drop);
        }
    }
    
    show() {
        this.vial1.show();
        for (let i = 0; i < this.drops.length; i++) {
            this.drops[i].show();
            this.drops[i].fall();
        }
        this.deleteDrops();
    }
    
    deleteDrops() {
        for (let i = 0; i < this.drops.length; i++) {
            if ( this.drops[i].y >= this.y - ((20 - this.drops.length) * 4) - 40) {
                this.drops.splice(i,1);
                this.vial1.grow();
            }
        }
    }
}