import React from 'react';

export default class Sprite extends React.Component {
    constructor(props) {
        super();
        this.sheet = props.sheet;
        this.sprite = this.sheet.glyphs[props.name];

        if (typeof props.frame !== 'undefined') {
            this.sprite = this.sprite[props.frame];
        }

        this.state = {
            classes: [
                'sprite'
            ],
            style: this.sprite.getStyle()
        };

        if (props.newline) {
            this.state.classes.push('newline');
        }

        if (props.flip) {
            this.state.classes.push('flip');
        }
    }

    render() {
        return <span className={this.state.classes.join(' ')} style={this.state.style} />;
    }
}