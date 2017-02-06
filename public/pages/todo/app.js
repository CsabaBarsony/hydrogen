'use strict';
/* global React, ReactDOM, Redux */

const app = {};

function home(app, React, ReactDOM, Redux, todoApp, actionCreators) {
    const store = Redux.createStore(todoApp);

    store.subscribe(() => {
        console.log(store.getState());
    });

    store.dispatch(actionCreators.addTodo('wash the car'));

    app.store = store;

    const Display = React.createClass({
        getInitialState: function() {
            return {
                name: 'Csati'
            };
        },
        render: function() {
            return React.createElement('h1', null, 'Helló ', 'te ', 'majom ', this.props.name, this.state.name);
        }
    });

    ReactDOM.render(
        React.createElement(Display, { name: 'Csati' }),
        document.getElementById('main')
    );
}

document.addEventListener("DOMContentLoaded", function() {
    home(
        app,
        React,
        ReactDOM,
        Redux,
        app.todoApp,
        app.actionCreators
    );
});
