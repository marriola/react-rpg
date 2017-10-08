import React from 'react';
import BaseComponent from '../BaseComponent';
import Item from './Item';
import ui from '../../../action-creators/ui';
import autobind from 'autobind-decorator';
import { connect } from '../../../decorators';

@autobind
export default class CheckItem extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        };
    }

    check() {
        this.setState({
            checked: !this.state.checked
        });
    }

    onChange() {
        window.requestAnimationFrame(() => {
            if (this.props.onChange) {
                this.props.onChange(this.state.checked);
            }
        });
    }

    render() {
        return super.render(
            <Item selected={this.state.checked} check={this.check} onClick={() => this.onChange()}>
                {this.props.children}
            </Item>
        );
    }
}