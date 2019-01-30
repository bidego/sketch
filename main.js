var { Engine,Render,World,Bodies,Mouse,MouseConstraint, Body } = Matter;
var engine,world,ground;
var { cubes,balls,boundaries,constraints } = [];
var mousePressed;

function goSketch(e) {
    new SketchFactory(e);
}

function draw() {};

function resetAll() {
    Engine = Matter.Engine;
    //Render = Matter.Render,
    World =  Matter.World;
    Bodies = Matter.Bodies;
    Mouse = Matter.Mouse;
    MouseConstraint = Matter.MouseConstraint;
    engine = null;
    world = null;
    ground = null;
    cubes = [];
    balls = [];
    boundaries = [];
    constraints = [];
    mousePressed = null;
}

document.addEventListener('keypress', function(e) {
    switch (e.code) {
        case 'KeyS':
            noLoop(); break;
        case 'KeyP':
            loop(); break;
    }
});
document.addEventListener('keypress', goSketch);

const Range = function(n) {
    let arr = new Array();
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}