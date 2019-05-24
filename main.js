var { Engine,Render,World,Bodies,Mouse,MouseConstraint, Body } = Matter;
var engine,world,ground;
var { cubes,balls,boundaries,constraints } = [];
var mousePressed;

var { goSketch, draw, resetAll, Range, addListeners } = {
    goSketch:function(e) {
        new SketchFactory(e);
    },

    draw: function() {},

    resetAll: function() {
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
    },

    Range: function(n) {
        let arr = new Array();
        for (let i = 0; i < n; i++) {
            arr.push(i);
        }
        return arr;
    },

    initialize: function() {
        let { addEventListener:AddListener } = document;
        AddListener('keypress', function(e) {
            switch (e.code) {
                case 'KeyS':
                    noLoop(); break;
                case 'KeyP':
                    loop(); break;
            }
        });
        AddListener('keypress', function(e) {
            new SketchFactory(e);
        });   
    }()
}