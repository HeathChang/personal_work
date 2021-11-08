import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers/index';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
  //document.querySelector('#root')
);
