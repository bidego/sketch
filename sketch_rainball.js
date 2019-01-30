function rainballSetup() {
    rectMode(CENTER);
    createCanvas(600,600);
    engine = new Engine.create();
    world = engine.world;
    boundaries.push(
        new Boundary(width/4*3,height/5,300,60,-0.3),
        new Boundary(width/4,height/4*2,300,20, 0.3),
        new Boundary(width/4*2.8,height/4*3,300,20, -0.3)
    );

    mousePressed = function() {
        balls.push(new Ball(mouseX,mouseY,random(5,20)));
    }
}

function rainballDraw() {
    Engine.update(engine);
    frameRate(30);
    if (frameCount % 30 == 0)
        balls.push(new Ball(width -80,0,random(5,20)));
    background(51);
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
    for ( let boundary of boundaries)
        boundary.show();

    textSize(14);
    noStroke();
    fill(255);
    text("My Balls: " + balls.length,20,20);
    text("Wd Balls: " + (world.bodies.length-boundaries.length),20,40);
}