import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import store from './store/index'

// 3. here provide store to index.js and send store to App as props
// 4. then to App.js
ReactDOM.render ( <Provider store={store}><App/></Provider>, document.getElementById ( 'root' ) );
