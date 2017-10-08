import { createStore, combineReducers, compose } from 'redux'
// You can go and see the code for this middleware, it's not very complicated and makes a good
// exercise to sharpen your understanding on middlewares.
// import promiseMiddleware from './promise-middleware'

import storage from './reducers/storage';
import ui from './reducers/ui';
import wizard from './reducers/wizard';

let reducers = {
    storage,
    ui,
    wizard
};

// The data parameter that we see here is used to initialize our redux store with data. We didn't
// talk about this yet for simplicity but thanks to it your reducers can be initialized
// with real data if you already have some. For example in an isomorphic/universal app where you
// fetch data server-side, serialize and pass it to the client, your Redux store can be
// initialized with that data.
// We're not passing any data here but it's good to know about this createStore's ability.
export default function(data) {
    var reducer = combineReducers(reducers);
    /* var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)*/
    var store = createStore(reducer, data, window.devToolsExtension ? window.devToolsExtension() : f => f);
    // var store = createStore(reducer, data, compose(
    //     applyMiddleware(...promiseMiddleware),
    //     window.devToolsExtension ? window.devToolsExtension() : f => f
    // ));
    return store
}
