import React from 'react';
import * as Layouts from '../Toolkit/Layouts';
import Item from '../Toolkit/Controls/Item';
import Screen from '../Toolkit/Screen';

let ItemList = [
    'Fight',
    'Magic',
    null,
    'Item'
];

export default class BattleScreen extends Screen {
    render() {
        return (
            <Layouts.HLayout align="bottom" style={{ height: "100%" }}>
                <Layouts.HBox style={{ width:  "50%" }}>
                    <Item>
                        hello
                        <Layouts.VPopup>
                            {ItemList.map(item => item
                                ? <Item>{item}</Item>
                                : <br/>
                            )}
                        </Layouts.VPopup>
                    </Item>
                </Layouts.HBox>
                <Layouts.HBox style={{ width: "50%" }}>
                    world
                </Layouts.HBox>
            </Layouts.HLayout>
        );
    }
}