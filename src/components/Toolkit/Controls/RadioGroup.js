import React from 'react';
import BaseComponent from '../BaseComponent';
import { numberChildren } from '../../../util';
import autobind from 'autobind-decorator';

@autobind
export default class RadioGroup extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            checked: null
        };
    }

    check(id) {
        if (this.props.__set) {
            this.props.__set(this.props.__name, id);
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
                check: this.check,
                selected: elt.props.id == checked
            }));

        return super.render(
            <div className="flex">
                {children}
            </div>, false
        );
    }
}