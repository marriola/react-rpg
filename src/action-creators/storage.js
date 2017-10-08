import storage from '../reducers/storage';
import { ActionCreator } from '../action-creators';

export default new ActionCreator({
    store: function(key, value) {
        return storage.action('store', { key, value });
    },

    storeProp: function(key, prop, value) {
        return storage.action('storeProp', { key, prop, value });
    }
});