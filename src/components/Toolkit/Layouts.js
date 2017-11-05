import React from 'react';
import BaseComponent from './BaseComponent';
import Actions from '../../action-creators';
import { connect } from '../../decorators';
import { joinNonEmpty } from '../../util.js';

import './Layouts.scss';

@connect('ui')
export default class Layout extends BaseComponent {
    constructor(props) {
        super(props);

        if (this.props.type == 'popup') {
            Actions.UI.setMenu(this.props.id, false);
        }
    }

    render() {
        let {
            children,
            type,
            hidden,
            direction,
            style,
            ui,
            toggleOpen,
            noMouse,
            id
        } = this.props;
        
        let classes = joinNonEmpty([
            type,
            direction,
            hidden && 'hidden',
            noMouse && 'no-mouse'
        ]);

        style = {
            ...style,
            ...getStyle(this.props)
        };

        return super.render(
            <div className={classes} style={style}>
                {children}
            </div>, false
        );
    }
}

function getStyle(props) {
    let {
        align,
        center,
        id,
        position,
        stretch,
        type,
        ui
    } = props;

    let display, marginBottom, marginLeft, marginRight, marginTop, alignItems, alignSelf, textAlign;

    if (type == 'popup' && !ui.menus[id]) {
        display = 'none';
    } else {
        switch (position) {
            case 'start':
                marginBottom = 'auto';
                marginRight = 'auto';
                break;
            
            case 'end':
                marginTop = 'auto';
                marginLeft = 'auto';
                break;

            default:
        }

        switch (align) {
            case 'left':
                textAlign = 'left';
            case 'top':
                alignItems = 'flex-start;'
                break;
            
            case 'right':
                textAlign = 'right';
            case 'bottom':
                alignItems = 'flex-end';
            
            default:
        }

        if (center)
            alignSelf = 'center';

        if (stretch)
            alignSelf = 'normal';
    }

    return {
        display,
        align,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        alignItems,
        alignSelf,
        textAlign
    };
}

const HBox = (props) => <Layout { ...props } type="box" direction="horizontal" />;
const VBox = (props) => <Layout { ...props } type="box" direction="vertical" />;

const HPopup = (props) => <Layout { ...props } popup={true} type="popup" direction="horizontal" />;
const VPopup = (props) => <Layout { ...props } popup={true} type="popup" direction="vertical" />;

const HLayout = (props) => <Layout { ...props } type="layout" direction="horizontal" />;
const VLayout = (props) => <Layout { ...props } type="layout" direction="vertical" />;

function isPopup(e) {
    return e.type == HPopup || e.type == VPopup;
}

export { HBox, VBox, HPopup, VPopup, HLayout, VLayout, isPopup };