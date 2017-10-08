import React from 'react';
import BaseComponent from '../BaseComponent';
import { connect } from '../../../decorators';
import autobind from 'autobind-decorator';

import './Textbox.css';

@autobind
export default class Textbox extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    handleChange(e) {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }

        this.setState({ value: e.target.value });
    }

    render() {
        let { type, min, max, rows, cols, width, style } = this.props;

        switch (type) {
            case 'multiline':
                return super.render(
                    <textarea style={style} rows={rows} cols={cols} onChange={this.handleChange}>{this.state.value}</textarea>
                );

            case 'number':
                return super.render(
                    <input style={style} type="number" min={min} max={max} value={this.state.value} onChange={this.handleChange} />
                );
            
            default:
                return super.render(
                    <input style={style} type="text" value={this.state.value} onChange={this.handleChange} />
                );
        }
    }
}