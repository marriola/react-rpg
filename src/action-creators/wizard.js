import wizard from '../reducers/wizard';
import { ActionCreator } from '../action-creators';

export default new ActionCreator({
    init: function(id, length) {
        return wizard.action('init', { id, step: 0, length });
    },

    step: function(id, step, screen) {
        return wizard.action('step', { id, step, screen });
    },

    stepFirst: function(id, screen) {
        return wizard.action('stepFirst', { id, screen });
    },

    stepBack: function(id, screen) {
        return wizard.action('stepBack', { id, screen });
    },

    stepNext: function(id, screen) {
        return wizard.action('stepNext', { id, screen });
    },

    stepLast: function(id, screen) {
        return wizard.action('stepLast', { id, screen });
    }
});