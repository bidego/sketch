let focusCube;

function tetrisSetup() {
    rectMode(CENTER);
    createCanvas(windowWidth,windowHeight);
    engine = new Engine.create();
    world = engine.world;
    boundaries.push(
        new Boundary(width/3/2,height/2,width/3,height,0),
        new Boundary(width/3*2-width/3/2,height/5*4+50,width/3,height/5*1.5, 0),
        new Boundary(width-width/3/2,height/2,width/3,height, 0)
    );

    mousePressed = function() {
        cubes.push(new Cube(mouseX,mouseY));
    }
}

function tetrisDraw() {
    Engine.update(engine);
    frameRate(30);
    if (frameCount % 60 == 0) {
        focusCube = new Cube(width/2,0);
        cubes.push(focusCube);
    }
    background(51);
    for ( let i = 0; i < cubes.length; i++) {
        let cube = cubes[i];
        if (cube.outOfBounce()) {
            cube.removeFromWorld();
            cubes.splice(i,1);
            i--;
        } else {
            cube.show();
        }
    }
    for ( let boundary of boundaries)
        boundary.show();

    textSize(14);
    noStroke();
    fill(255);
    text("My Cube: " + cubes.length,20,20);
    text("Wd Cube: " + (world.bodies.length-boundaries.length),20,40);
}

document.addEventListener('keydown',userMove);

function userMove(e) {
	switch(e.code) {
		case "ArrowLeft":
			focusCube.left();
			break;
		case "ArrowRight":
            focusCube.right();
			break;
		case "ArrowUp":
            focusCube.rotate();
			break;
		case "ArrowDown":
            focusCube.applyForce(createVector(0,0.05));
			break;
	}
}