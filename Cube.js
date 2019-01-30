class Cube {
    constructor(x,y) {
        this.init(x,y);
    }
    init(x,y) {
        this.buildOptions();
        this.top = Matter.Bodies.rectangle(x, y-10, 20, 20, this.options)
        this.base = Matter.Bodies.rectangle(x, y, 60, 20, this.options)
        this.color = [ random(255),random(255),random(255) ];
        World.add(world, this.top);
        World.add(world, this.base);
    }
    buildOptions() {
        this.options = {
            friction: 1,
            restitution: 1,
            isStatic: false
        };
    }
    show() {
        let pos = this.base.position;
        let angle = this.base.angle;
    
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(...this.color);
        beginShape();
        vertex(-30, 0);
        vertex(-10, 0);
        vertex(-10, 20);
        vertex(10, 20);
        vertex(10, 0);
        vertex(30, 0);
        vertex(30, -20);
        vertex(-30, -20);
        vertex(-30, 0);
        endShape();
        pop();
    }
    outOfBounce() {
        let pos = this.base.position;
        return pos.y > height;
    }
    removeFromWorld() {
        World.remove(world,this.top);
        World.remove(world,this.base);
    }
    applyForce(e) {
        Body.applyForce( this.base, {x: this.base.position.x, y: this.base.position.y}, {x: e.x, y: e.y});
        Body.applyForce( this.top, {x: this.top.position.x, y: this.top.position.y}, {x: e.x, y: e.y});
    }
    left() {
        Body.translate( this.base, {x: -20, y: 0});
        Body.translate( this.top, {x: -20, y: 0});
    }
    right() {
        Body.translate( this.base, {x: 20, y: 0});
        Body.translate( this.top, {x: 20, y: 0});
    }
    rotate() {
        Body.rotate( this.base, 2);
        Body.rotate( this.top, 2);
    }
}