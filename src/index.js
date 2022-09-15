import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import myLogger from "./middlewares/myLogger";
import logger from 'redux-logger';


// applyMiddleware()를 통해 미들웨어를 적용시킴
const store = createStore(rootReducer,applyMiddleware(logger));  // 여러 개의 미들웨어를 적용할 수 있습니다.

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();