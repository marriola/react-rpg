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
        if (this.props.__set) {
            this.props.__set(this.props.__name, e.target.value);
        }

        this.setState({ value: e.target.value });
    }

    render() {
        let {
            type, min, max, rows, cols, width, style,
            defaultValue = ''
        } = this.props;

        switch (type) {
            case 'multiline':
                return super.render(
                    <textarea style={style} rows={rows} cols={cols} onChange={this.handleChange} value={this.state.value || defaultValue}></textarea>
                );

            case 'number':
                return super.render(
                    <input style={style} type="number" min={min} max={max} onChange={this.handleChange} value={this.state.value || defaultValue} />
                );
            
            default:
                return super.render(
                    <input style={style} type="text" value={this.state.value || defaultValue} onChange={this.handleChange} />
                );
        }
    }
}