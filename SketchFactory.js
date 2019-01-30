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
        this.sketches.set('Digit1', rainballDraw);
        this.sketches.set('Digit2', chainsDraw);
        this.sketches.set('Digit3', tetrisDraw);
    }
    goStrategy(code) {
        switch (code) {
            case 'Digit1':
                rainballSetup();
                draw = function() { rainballDraw(); };
                break;
            case 'Digit2':
                chainsSetup();
                draw = function() { chainsDraw(); };
                break;
            case 'Digit3':
                tetrisSetup();
                draw = function() { tetrisDraw(); };
                break;
        }
    }
}