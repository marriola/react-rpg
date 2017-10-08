import createReducer from '../reducer';

export default createReducer({
    name: 'ui',

    defaultValue: {
        menus: {}
    },

    actions: {
        setMenu: function(state, action) {
            let menus = {
                ...state.menus,
                [action.id]: action.state
            };

            if (state) {
                for (let key in state.menus) {
                    if (action.id.startsWith(key + '.')) {
                        menus[key] = true;
                    } else if (key != action.id) {
                        menus[key] = false;
                    }
                }
            }

            return {
                ...state,
                menus
            };
        },

        closeAll: function(state, action) {
            let menus = {};
            for (let key in state.menus) {
                menus[key] = false;
            }

            return {
                ...state,
                menus
            }
        },

        toggleMenu: function(state, action) {
            return {
                ...state,
                menus: {
                    ...state.menus,
                    [action.id]: !state.menus[action.id]
                }
            }
        }
    }
});