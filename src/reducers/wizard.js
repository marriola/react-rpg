import createReducer from '../reducer';

export default createReducer({
    name: 'wizard',

    defaultValue: {
    },

    actions: {
        init: function(state, action) {
            return {
                ...state,
                [action.id]: {
                    length: action.length,
                    step: action.step
                }
            };
        },

        step: function(state, action) {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    step: action.step,
                    screen: action.screen
                }
            };
        },

        stepFirst: function(state, action) {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    step: 0,
                    screen: action.screen
                }
            };
        },

        stepBack: function(state, action) {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    step: Math.max(0, state[action.id].step - 1),
                    screen: action.screen
                }
            };
        },

        stepNext: function(state, action) {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    step: Math.min(state[action.id].length - 1, state[action.id].step + 1),
                    screen: action.screen
                }
            };
        },

        stepLast: function(state, action) {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    step: state[action.id].length - 1,
                    screen: action.screen
                }
            };
        }
    }
});