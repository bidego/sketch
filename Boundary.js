class Boundary {
    constructor(x,y,w,h,a) {
        this.options = {
            isStatic: true,
            angle: a,
            friction: 0.01,
            restitution: 0
        };
        this.body = Bodies.rectangle(x,y,w,h, this.options);
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
        noStroke();
        fill(45);
        rect(5,5,this.w,this.h);
        fill(90);
        rect(0,0,this.w,this.h);
        pop();
    }
}