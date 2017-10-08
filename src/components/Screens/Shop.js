import React from 'react';
import Screen from '../Toolkit/Screen';
import * as Layouts from '../Toolkit/Layouts';
import Item from '../Toolkit/Controls/Item';
import RadioGroup from '../Toolkit/Controls/RadioGroup';
import Textbox from '../Toolkit/Controls/Textbox';
import Wizard from '../Toolkit/Controls/Wizard';
import AC from '../../action-creators';
import autobind from 'autobind-decorator';
import { connect } from '../../decorators';

const Screens = {
    Home: 'home',
    Buy: 'buy',
    Sell: 'sell'
};

@connect('storage')
@autobind
export default class Shop extends Screen {
    constructor(props) {
        super(props, 'screen');

        this.state = {
            ...this.state,
            currentScreen: Screens.Home,
            item: null,
            gil: 1250
        };
    }

    selectScreen(screen) {
        AC.Wizard.step('wizShop', 1, screen);
    }

    selectBuy = this.selectScreen.bind(this, Screens.Buy)
    selectSell = this.selectScreen.bind(this, Screens.Sell)

    selectItem(item) {
        this.setState({ item });
        AC.Wizard.step('wizShop', 2, 'buy');
    }

    items = [ 
        { name: 'Potion', price: 50 },
        { name: 'Phoenix Down', price: 150 },
        { name: 'Antidote', price: 50 },
        { name: 'Soft', price: 100 }
    ]

    buy() {
        let count = this.get('purchaseCount');
        let cost = count * this.state.item.price;

        if (cost > this.state.gil) {
            alert('Too expensive!');
        } else {
            this.setState({
                gil: this.state.gil - cost
            });
            AC.Wizard.step('wizShop', 1, Screens.Buy);
        }
    }

    cancelBuy() {
        AC.Wizard.step('wizShop', 1, Screens.Buy);
    }

    render() {
        let { gil, item, currentScreen: screen } = this.state;

        return super.render(
            <Wizard id="wizShop">
                <Wizard.Step>
                    <Layouts.HBox stretch={true}>
                        <RadioGroup>
                            <Item id="rdoBuy" onClick={this.selectBuy}>Buy</Item>
                            <Item id="rdoSell" onClick={this.selectSell}>Sell</Item>
                            <Item route="/">Exit</Item>
                        </RadioGroup>
                    </Layouts.HBox>
                </Wizard.Step>
                <Wizard.Step>
                    <Layouts.HBox name={Screens.Buy}>
                        <Layouts.VLayout style={{ width: "50%" }}>
                            {this.items.map(item =>
                                <Item onClick={() => this.selectItem(item)}>
                                    {item.name}
                                </Item>
                            )}
                        </Layouts.VLayout>
                        {gil + ' gil'}
                    </Layouts.HBox>
                    <Layouts.VLayout name={Screens.Sell}>
                        Sell
                    </Layouts.VLayout>
                </Wizard.Step>
                <Wizard.Step>
                    <Layouts.VBox name={Screens.Buy} style={{ width: "50%" }}>
                        <Layouts.VLayout>
                            { item ?
                                <Layouts.HLayout>
                                    <Layouts.VLayout>
                                        {item.name}<br/>
                                        {item.price} gil
                                    </Layouts.VLayout>
                                    <Layouts.VLayout style={{ width: "100%" }}>
                                        <Textbox {...this.bindTo('purchaseCount', 'value')}
                                                style={{ marginLeft: "100%", width: 40 }}
                                                type="number" min="1" max="99" />
                                        <span style={{ marginLeft: "100%" }}>
                                            {(this.get('purchaseCount') || 0) * item.price}
                                        </span>
                                    </Layouts.VLayout>
                                </Layouts.HLayout>
                                : null
                            }
                            <Item onClick={this.buy}>Buy</Item>
                            <Item onClick={this.cancelBuy}>Cancel</Item>
                        </Layouts.VLayout>
                    </Layouts.VBox>
                </Wizard.Step>
            </Wizard>
        );
    }
}