import React from 'react';
import BaseComponent from '../BaseComponent';
import AC from '../../../action-creators';
import { connect } from '../../../decorators';

@connect('wizard')
class Wizard extends BaseComponent {
    constructor(props) {
        super(props);

        AC.Wizard.init(props.id, props.children.length);
    }

    render() {
        let { children, id, wizard } = this.props;

        if (Object.getOwnPropertyNames(wizard).length == 0) {
            wizard = {
                [id]: { step: 0 }
            };
        }

        let { screen, step: currentStep } = wizard[id];

        children = React.Children.map(children.slice(0, currentStep + 1),
            x => React.cloneElement(x, {
                ...x.props,
                screen
            })
        );

        return super.render(
            <div style={{ width: '100%', height: '100%' }}>
                {children}
            </div>, false
        );
    }
}

Wizard.Step = class extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { children, screen, noMouse } = this.props;
        let child;

        if (Array.isArray(children)) {
            child = children.filter(x => children.length == 1 || x.props.name == screen)[0];
        } else if (children) {
            child = children;
        }

        if (noMouse) {
            child = React.cloneElement(child, { noMouse });
        }

        return super.render(child);
    }
};

export default Wizard;