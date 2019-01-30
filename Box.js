class Box {
    constructor(x,y,w,h) {
        this.options = {
            friction: 0.001,
            restitution: 0.01
        };
        this.body = Bodies.circle(x,y,w,h, this.options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(185);
        ellipse(0,0,this.w,this.h);
        pop();
    }
}