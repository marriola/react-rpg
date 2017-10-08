import React from 'react';
import Screen from '../Toolkit/Screen';
import * as Layouts from '../Toolkit/Layouts';
import Item from '../Toolkit/Controls/Item';
import RadioGroup from '../Toolkit/Controls/RadioGroup';
import CheckItem from '../Toolkit/Controls/CheckItem';
import Textbox from '../Toolkit/Controls/Textbox';
import Wizard, { Step } from '../Toolkit/Controls/Wizard';
import { connect } from '../../decorators';
import autobind from 'autobind-decorator';
import { range } from '../../util';

@connect('storage')
@autobind
export default class Config extends Screen {
    constructor(props) {
        super(props, 'config');
    }

    toppings = [
        { name: 'Pepperoni', id: 'pepperoni' },
        { name: 'Green peppers', id: 'peppers' },
        { name: 'Mushrooms', id: 'mushrooms' },
        { name: 'Olives', id: 'olives' },
        { name: 'Chives', id: 'chives' }
    ];

    render() {
        return super.render(
            <Layouts.VBox id="config" stretch={true}>
                {this.toppings.map((topping, i) =>
                    <CheckItem {...this.bindTo(topping.id, 'checked')} key={'configt' + i}>
                        {topping.name}
                    </CheckItem>
                )}
                <br/>
                <Layouts.HLayout>
                    Battle Speed
                    <RadioGroup {...this.bindTo('speed', 'checked')}>
                        {range(1, 5).map((x, i) =>
                            <Item key={'configs' + i}>{x}</Item>
                        )}
                    </RadioGroup>
                </Layouts.HLayout>
                <br/>
                <Textbox {...this.bindTo('number', 'value')} type="number" />
                <br/>
                <Item route="/">Exit</Item>
            </Layouts.VBox>
        );
    }
}