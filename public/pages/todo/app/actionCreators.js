'use strict';

(function(app, actions) {
    function addTodo(text) {
        return { type: actions.ADD_TODO, text }
    }

    function toggleTodo(index) {
        return { type: actions.TOGGLE_TODO, index }
    }

    function setVisibilityFilter(filter) {
        return { type: actions.SET_VISIBILITY_FILTER, filter }
    }
    
    app.actionCreators = {
        addTodo:             addTodo,
        toggleTodo:          toggleTodo,
        setVisibilityFilter: setVisibilityFilter
    }
}(app, app.actions));
