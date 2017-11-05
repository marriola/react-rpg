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
            if (action.propValues) {
                let newState = { ...state };

                for (let pv of action.propValues) {
                    newState[pv.prop] = pv.value;
                }

                return newState;
            } else {
                return {
                    ...state,
                    [action.key]: {
                        ...state[action.key],
                        [action.prop]: action.value
                    }
                };
            }
        }
    }
});