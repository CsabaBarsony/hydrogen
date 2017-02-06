'use strict';

(function(w) {
    function Prop(initialValue) {
        this.value = initialValue;
        this.callbacks = [];
    }
    
    Prop.prototype.get = function() {
        return this.value;
    };
    
    Prop.prototype.set = function(value) {
        this.value = value;
        this.callbacks.forEach(c => c(value));
    };
    
    Prop.prototype.subscribe = function(callback) {
        this.callbacks.push(callback);
    };
    
    w.Prop = Prop;
}(window));
