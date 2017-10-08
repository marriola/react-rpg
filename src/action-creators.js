import Storage from './action-creators/storage';
import UI from './action-creators/ui';
import Wizard from './action-creators/wizard';

import store from './index';

export function ActionCreator(descriptor) {
    for (let key in descriptor) {
        let action = descriptor[key]
        this[key] = function() { store.dispatch(action.apply(null, arguments)); };
    }
}

export default {
    Storage,
    UI,
    Wizard
};
