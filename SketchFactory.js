class SketchFactory {
    constructor(e) {
        if (e.code.search('Digit')==0) {
            this.buildMap();
            this.sketch = this.sketches.get(e.code);
            resetAll();
            this.goStrategy(e.code);
        }
    }
    buildMap() {
        this.sketches = new Map();
        this.sketches.set('Digit1', { setup: rainballSetup, renderer: rainballDraw });
        this.sketches.set('Digit2', { setup: chainsSetup, renderer: chainsDraw });
        this.sketches.set('Digit3', { setup: tetrisSetup, renderer: tetrisDraw });
    }
    goStrategy(code) {
        if (this.sketches.has(code)) {
            let { setup, renderer } = this.sketches.get(code);
            setup();
            draw = renderer;
        }
    }
}