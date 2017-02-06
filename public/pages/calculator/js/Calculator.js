'use strict';
/* global Prop */

(function(app) {
    function Calculator() {
        this.foods = new Prop(['avocado']);
    }
    
    app.Calculator = Calculator;
}(app));
