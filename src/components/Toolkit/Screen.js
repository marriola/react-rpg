import React from 'react';
import BaseComponent from './BaseComponent';
import AC from '../../action-creators';
import autobind from 'autobind-decorator';

@autobind
export default class Screen extends BaseComponent {
    constructor(props, name) {
        super(props);

        this.name = `screens.${name}`;
    }

    // Sets the value of a screen property
    set(prop, value) {
        AC.Storage.storeProp(this.name, prop, value);
    }

    // Gets a screen property's value
    get(prop) {
        let storage = this.props.storage[this.name];
        return storage && storage[prop];
    }

    // Generates props to bind an element to a screen property
    //
    // name         The name of the screen property
    // valueProp    The name of the prop on the element that sets its value
    bindTo(name, valueProp) {
        return {
            __name: name,
            __set: this.set,
            [valueProp]: this.get(name)
        };
    }

    // Returns an object containing get, set and bind bound to the component calling it,
    // allowing them to be passed to child components.
    pass() {
        return {
            get: this.get,
            set: this.set,
            bindTo: this.bindTo
        };
    }
}