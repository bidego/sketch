class Ball {
    constructor(x,y,r,f) {
        this.init(x,y,r,f);
    }
    init(x,y,r,f) {
        this.buildOptions(f);
        this.body = Bodies.circle(x,y,r, this.options);
        this.r = r;
        this.color = [ random(255),random(255),random(255) ];
        World.add(world, this.body);
    }
    buildOptions(f) {
        this.options = {
            friction: 0,
            restitution: 0.5,
            isStatic: f
        };
    }
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(...this.color);
        ellipse(0,0,this.r*2);
        pop();
    }
    outOfBounce() {
        let pos = this.body.position;
        return pos.y > height;
    }
    removeFromWorld() {
        World.remove(world,this.body);
    }
}