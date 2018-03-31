import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './app/App';

const rootDom = document.getElementById('root');

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>
, rootDom);