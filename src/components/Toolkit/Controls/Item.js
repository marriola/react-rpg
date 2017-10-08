import React from 'react';
import { Link } from 'react-router-dom';
import BaseComponent from '../BaseComponent';
import Actions from '../../../action-creators';
import autobind from 'autobind-decorator';
import { connect } from '../../../decorators';
import { getStore } from '../../../index';
import { isPopup } from '../Layouts';
import { numberChildren } from '../../../util';

import './Item.css';

@connect('ui')
@autobind
export default class Item extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {};

        let { children } = this.props;
        if (children.filter) {
            let numberedChildren = numberChildren(props.id, children);
            let popups = numberedChildren.filter(isPopup);
    
            if (popups) {
                if (popups.length > 1) {
                    throw new Error('No more than one popup menu is allowed.');
                }
    
                this.state.popup = popups[0];
            }
        }
    }

    handleClick(e, id, popup) {
        console.log('clicked', id);
        
        if (this.props.check) {
            this.props.check();
        }

        if (!popup) {
            if (this.props.onClick) {
                this.props.onClick(e);
            }
            Actions.UI.closeAll();
        } else if (getStore().getState().ui.menus[popup.props.id]) {
            Actions.UI.closeAll();
        } else {
            Actions.UI.setMenu(popup.props.id, true);
        }

        e.stopPropagation();
    }

    render() {
        let { id, children, selected, route } = this.props;

        let className = 'item';
        if (selected) {
            className += ' selected';
        }

        let link;
        if (route) {
            link = <Link to={{ pathname: route }}>{children}</Link>;
        }

        return super.render(
            <span className={className} onClick={e => this.handleClick(e, id, this.state.popup)}>
                {link ? link : children}
            </span>, false
        );
    }
}
