'use strict';
/* global app */

(function(app){
    const foods = [{"id":"1","name":"cheese","nutrients":[{"type":"protein","amount":22.87},{"type":"fat","amount":33.31},{"type":"carbohydrate","amount":3.09}],"description":"","portion":null},{"id":"2","name":"cheese, edam","nutrients":[{"type":"protein","amount":24.99},{"type":"fat","amount":27.8},{"type":"carbohydrate","amount":1.43}],"description":"","portion":null},{"id":"3","name":"cheese, mozzarella","nutrients":[{"type":"protein","amount":21.6},{"type":"fat","amount":24.64},{"type":"carbohydrate","amount":2.47}],"description":"","portion":null},{"id":"4","name":"cheese, parmesan","nutrients":[{"type":"protein","amount":35.75},{"type":"fat","amount":25.83},{"type":"carbohydrate","amount":3.22}],"description":"","portion":null},{"id":"5","name":"fish, herring","nutrients":[{"type":"protein","amount":16.39},{"type":"fat","amount":13.88},{"type":"carbohydrate","amount":0}],"description":"","portion":null},{"id":"6","name":"fish, mackerel","nutrients":[{"type":"protein","amount":18.6},{"type":"fat","amount":13.89},{"type":"carbohydrate","amount":0}],"description":"","portion":null},{"id":"7","name":"fish, tuna","nutrients":[{"type":"protein","amount":23.33},{"type":"fat","amount":4.9},{"type":"carbohydrate","amount":0}],"description":"","portion":null},{"id":"9","name":"cocoa butter oil","nutrients":[{"type":"protein","amount":0},{"type":"fat","amount":100},{"type":"carbohydrate","amount":0}],"description":"","portion":null},{"id":"10","name":"sunflower oil","nutrients":[{"type":"protein","amount":0},{"type":"fat","amount":100},{"type":"carbohydrate","amount":0}],"description":"","portion":null},{"id":"11","name":"fat, duck","nutrients":[{"type":"protein","amount":0},{"type":"fat","amount":99.8},{"type":"carbohydrate","amount":0}],"description":"","portion":null},{"id":"12","name":"fat, goose","nutrients":[{"type":"protein","amount":0},{"type":"fat","amount":99.8},{"type":"carbohydrate","amount":0}],"description":"","portion":null},{"id":"13","name":"margarine","nutrients":[{"type":"protein","amount":0.16},{"type":"fat","amount":80.71},{"type":"carbohydrate","amount":0.7}],"description":"","portion":null}];
    
    app.db = {
        queryFoods: function(text, callback) {
            const results = [];

            foods.forEach(f => {
                if(new RegExp('^' + text, 'gi').test(f.name)) results.push(f);
            });

            setTimeout(function() {
                callback(results);
            }, 100);
        }
    }
}(app));
