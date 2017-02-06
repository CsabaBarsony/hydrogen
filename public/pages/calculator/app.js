'use strict';

const app = {};

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('my_button');
    button.addEventListener('click', function() {
        app.db.queryFoods('c', function(foods) {
            calculator.foods.set(foods);
        });
    });

    const calculator = new app.Calculator();
    
    calculator.foods.subscribe(foods => console.log(foods));

    app.calculator = calculator;
});
