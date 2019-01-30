var mOpts, mConstraint;

function chainsSetup() {
    rectMode(CENTER);
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = new Engine.create();
    world = engine.world;
    boundaries.push(new Boundary(width/2,height-30,width,60,0));
    let factor = 18;
    let n = 1;
    for (let i = 0; i < factor*factor; i++) {
        balls.push(new Ball(width/(factor+1) * n,40+random(0,40),random(4,5),isStatic()));
        if (i % factor != 0) {
            constraints.push(new Constraint(
                balls[i].body,
                balls[i-1].body,
                balls[i].r + balls[i-1].r + 5,
                1,
                0.5
            ));
        }
        if (i % factor == 0) n++;
    }

    function isStatic() {
        return balls.length % factor == 0;
    }

    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRation = pixelDensity();
    mOpts = { body: canvasMouse };
    mConstraint = MouseConstraint.create(engine, mOpts);
    World.add(world,mConstraint);

}

function chainsDraw() {
    Engine.update(engine);
    frameRate(16);
    background(51);
    constraints.forEach( c => c.show());
    for ( let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (ball.outOfBounce()) {
            ball.removeFromWorld();
            balls.splice(i,1);
            i--;
        } else {
            ball.show();
        }
    }
    for (let boundary of boundaries)
        boundary.show();

    if (mConstraint.body) {
        let pos = mConstraint.body.position;
        let m = mConstraint.mouse.position;
        stroke(0,255,0);
        strokeWeight(1);
        line(pos.x,pos.y,m.x,m.y);
        noStroke();
    }
    logger();
}

logger = function() {
    textSize(14);
    noStroke();
    fill(255);
    text("My Balls: " + balls.length,20,20);
    text("Wd Balls: " + (world.bodies.length-boundaries.length),20,40);
}