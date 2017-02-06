'use strict';

(function(app, actions, actionCreators, filters) {
    function todos(state = [], action) {
        switch (action.type) {
            case actions.ADD_TODO:
                return [
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ];
            case actions.TOGGLE_TODO:
                return state.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                });
            default:
                return state;
        }
    }

    function visibilityFilter(state = filters.SHOW_ALL, action) {
        switch (action.type) {
            case actions.SET_VISIBILITY_FILTER:
                return action.filter;
            default:
                return state;
        }
    }

    function todoApp(state = {}, action) {
        return {
            visibilityFilter: visibilityFilter(state.visibilityFilter, action),
            todos: todos(state.todos, action)
        };
    }
    
    app.todoApp = todoApp;
    
}(app, app.actions, app.actionCreators, app.filters, update));
