import React from 'react';
import { numberChildren } from '../../util';

export default class BaseComponent extends React.Component {
    constructor(props) {
        // This is bad.
        // super({
        //     ...props,
        //     children: numberChildren(props.id, props.children)
        // });

        super(props);
    }

    render(element, container = true) {
        if (container) {
            return React.cloneElement(element, {
                id: this.props.id + '.1',
                ...element.props,
            });
        } if (typeof element === 'object') {
            return React.cloneElement(element, {
                ...element.props,
                children: numberChildren(this.props.id, element.props.children)
            });
        } else {
            return element;
        }
    }
}