'use strict';

(function(app, actions) {
    function setEntries() {
        return update(state, { entries: { $set: entries } });
    }

    app.actionCreators = {
        setEntries: setEntries
    }
}(app, app.actions));
