import createReducer from '../reducer';

export default createReducer({
    name: 'storage',

    defaultValue: {},

    actions: {
        store: function(state, action) {
            return {
                ...state,
                [action.key]: action.value
            };
        },

        storeProp: function(state, action) {
            return {
                ...state,
                [action.key]: {
                    ...state[action.key],
                    [action.prop]: action.value
                }
            };
        }
    }
});