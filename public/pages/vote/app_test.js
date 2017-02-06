'use strict';
/* global app, describe, it, xit, expect, Immutable */

describe('app', function() {
    it('setEntries', function() {
        const state = Immutable.Map();
        const entries = ['Trainspotting', '28 Days Later'];
        const nextState = app.setEntries(state, entries);

        expect(nextState.equals(Immutable.Map({
            entries: Immutable.List.of('Trainspotting', '28 Days Later')
        }))).toBeTruthy();
    });

    it('next', function() {
        const state = Immutable.Map();
        state.set('entries', Immutable.List(['Trainspotting', '28 Days Later', 'Sunshine']));
        debugger
        const nextState = app.next(state);

        expect(nextState).toEqual({
            entries: ['Sunshine'],
            vote: {
                pair: ['Trainspotting', '28 Days Later']
            }
        });
    });
});
