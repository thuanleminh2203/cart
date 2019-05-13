import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import appReducers from './reducers/index'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';


const store = createStore(
    appReducers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,
 document.getElementById('root'));


serviceWorker.unregister();
