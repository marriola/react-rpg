import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Viewport from './Toolkit/Viewport';
import MainMenu from './Screens/MainMenu';
import ShopScreen from './Screens/Shop';
import ConfigScreen from './Screens/Config';
import BattleScreen from './Screens/Battle';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <Viewport>
                        <Switch>
                            <Route exact path="/" component={MainMenu.MenuScreen} />
                            <Route path="/shop" component={ShopScreen} />
                            <Route path="/config" component={ConfigScreen} />
                            <Route path="/battle" component={BattleScreen} />
                        </Switch>
                    </Viewport>
                </BrowserRouter>
            </Provider>
        );
    }
}