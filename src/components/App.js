import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Viewport from './Toolkit/Viewport';
import MainMenu from './Screens/MainMenu';
import Shop from './Screens/Shop';
import Config from './Screens/Config';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <Viewport>
                        <Switch>
                            <Route exact path="/" component={MainMenu.Menu} />
                            <Route path="/shop" component={Shop} />
                            <Route path="/config" component={Config} />
                        </Switch>
                    </Viewport>
                </BrowserRouter>
            </Provider>
        );
    }
}