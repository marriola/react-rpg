import React from 'react';
import BaseComponent from '../Toolkit/BaseComponent';
import * as Layouts from '../Toolkit/Layouts';
import RadioGroup from '../Toolkit/Controls/RadioGroup';
import Item from '../Toolkit/Controls/Item';
import CheckItem from '../Toolkit/Controls/CheckItem';
import Sprite from '../Toolkit/Sprite';
import Screen from '../Toolkit/Screen';
import { connect } from '../../decorators';
import * as Sheets from '../../SpriteSheets';

const Characters = [
    { name: 'Butz', sheet: Sheets.Characters.Butz, sprite: "Normal", frame: 0 },
    { name: 'Lenna', sheet: Sheets.Characters.Lenna, sprite: "Normal", frame: 0 },
    { name: 'Galuf', sheet: Sheets.Characters.Galuf, sprite: "Normal", frame: 0 },
    { name: 'Cara', sheet: Sheets.Characters.Cara, sprite: "Normal", frame: 0 },
    { name: 'Faris', sheet: Sheets.Characters.Faris, sprite: "Normal", frame: 0 }
];

const Letters = Array.from('ABCD');
const Numbers = Array.from('1234');

@connect('storage')
class Menu extends Screen {
    constructor(props) {
        super(props, 'main');
    }

    render() {
        return super.render(
            <Layouts.VLayout id="main">
                <MainMenu.Top {...this.pass()} />
                <MainMenu.Side />
            </Layouts.VLayout>
        );
    }
}

const MainMenu = {
    Character: class extends BaseComponent {
        render() {
            let { sheet, name, sprite, frame } = this.props.character;

            return super.render(
                <Item>
                    <Sprite sheet={sheet} name={sprite} frame={frame} />
                    <Layouts.HLayout>
                        <Layouts.VLayout style={{ width: 50 }}>
                            {name}
                        </Layouts.VLayout>
                        <Layouts.VLayout>
                            100 / 100 HP<br/>
                            0 / 0 MP
                        </Layouts.VLayout>
                    </Layouts.HLayout>
                </Item>
            );
        }
    },

    Top: class extends BaseComponent {
        render() {
            return super.render(
                <Layouts.HBox stretch={true} style={{ position: 'relative' }}>
                    <Item>
                        Equip
                        <Layouts.VPopup>
                            {Letters.map(letter =>
                                <Item key={'eq' + letter}>
                                    {letter}
                                    <Layouts.HPopup>
                                        <RadioGroup {...this.props.bindTo('rb' + letter, 'checked')}>
                                            {Numbers.map(num =>
                                                <Item key={'rb' + letter + num}>{num}</Item>
                                            )}
                                        </RadioGroup>
                                    </Layouts.HPopup>
                                </Item>
                            )}
                        </Layouts.VPopup>
                    </Item>
                    <Item>
                        Remove
                        <Layouts.HPopup>
                            <RadioGroup>
                                <Item>A</Item>
                                <Item>B</Item>
                                <Item>C</Item>
                                <Item>D</Item>
                            </RadioGroup>
                        </Layouts.HPopup>
                    </Item>
                    <Item>
                        Optimize
                    </Item>
                    <Item>
                        Clear
                    </Item>
                </Layouts.HBox>
            );
        }
    },

    Side: class extends BaseComponent {
        render() {
            return super.render(
                <Layouts.HLayout stretch={true} style={{ width: 400 }}>
                    <Layouts.VBox stretch={true} style={{ flexGrow: 2 }}>
                        {Characters.map(x =>
                            <MainMenu.Character key={x.name} character={x} />
                        )}
                    </Layouts.VBox>
                    <Layouts.VLayout>
                        <Layouts.VBox>
                            <Item route="/shop">Shop</Item>
                            <Item>Magic</Item>
                            <Item>Stats</Item>
                            <Item route="/config">Config</Item>
                            <Item>Item</Item>
                        </Layouts.VBox>
                        <Layouts.VBox align="right" stretch={true} style={{ fontSize: 'small' }}>
                            00:00<br/>
                            3 gil
                        </Layouts.VBox>
                    </Layouts.VLayout>
                </Layouts.HLayout>
            );
        }
    },

    MenuScreen: Menu
};

export default MainMenu;