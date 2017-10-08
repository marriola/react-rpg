import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from './create-store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
    registerServiceWorker();
});    

export function getStore() {
    return store;
}

export default store;