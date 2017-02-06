'use strict';
/* global Immutable */

const app = {};

function vote(app, List, Map) {
    app.setEntries = function(state, entries) {
        return state.set('entries', List(entries));
    };

    app.next = function(state) {
        const nextState = {
            entries: update(state, { entries: { $splice: [[1, 2]] } }),
            vote: {
                pair: update(state, { entries: {  } })
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    vote(
        app,
        Immutable.List,
        Immutable.Map
    );
});
