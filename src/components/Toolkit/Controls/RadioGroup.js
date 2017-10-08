import React from 'react';
import BaseComponent from '../BaseComponent';
import { numberChildren } from '../../../util';

export default class RadioGroup extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            checked: null
        };
    }

    check(id) {
        if (this.props.onChange) {
            this.props.onChange(id);
        }

        this.setState({ checked: id });
    }

    render() {
        let { children, checked } = this.props;

        if (this.state.checked !== null) {
            checked = this.state.checked;
        }

        children = numberChildren(this.props.id, children);

        children = React.Children.map(children, elt =>
            React.cloneElement(elt, {
                ...elt.props,
                check: this.check.bind(this, elt.props.id),
                selected: elt.props.id == checked
            }));

        return super.render(
            <div className="flex">
                {children}
            </div>, false
        );
    }
}