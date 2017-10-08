import ui from '../reducers/ui';
import { ActionCreator } from '../action-creators';

export default new ActionCreator({
    setMenu: function(id, state) {
        return ui.action('setMenu', { id, state });
    },

    closeAll: function() {
        return ui.action('closeAll');
    },

    toggleMenu: function(id) {
        return ui.action('toggleMenu', { id });
    }
});