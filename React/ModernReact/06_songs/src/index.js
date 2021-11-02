import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import { createStore } from 'redux';

//////////////////////////////////
import App from './components/App';
import reducers from './reducers'


ReactDOM.render(
    <Provider store={createStore}>
        <App />
    </Provider>,
     document.querySelector('#root'));

