class Constraint {
    constructor(bodyA, bodyB, rest, strength,damp){
        this.options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: rest,
            stiffness: strength,
            damping: damp
        };
        this.constraint = Matter.Constraint.create(this.options);
        World.add(world,this.constraint);
    }
    show() {
        let bodyA = this.options.bodyA;
        let bodyB = this.options.bodyB;
        stroke(188);
        strokeWeight(1);
        line(bodyA.position.x, bodyA.position.y, bodyB.position.x, bodyB.position.y);
        noStroke();
    }
}