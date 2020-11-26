import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore, compose} from 'redux'
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import 'antd/dist/antd.css';
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import App from './routes/index';
import './index.css'
import { logger } from 'redux-logger';
import IndexReducer from './store/index-reducer'
import IndexSagas from './store/index-sagas'
import registerServiceWorker from './registerServiceWorker';

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();

export const hist = createBrowserHistory();

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/*eslint-enable */
const middleware=[sagaMiddleware,logger]
const store = createStore(
    IndexReducer,
    applyMiddleware(...middleware), // allows redux devtools to watch sagas
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas);


ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
            <Route exact path="/" render={() => (<Redirect to="/list" />)} />
                <Route path="/"  component={App}/>
            </Switch>
        </Router>
    </Provider>
    ,
    document.getElementById('root'),
);


registerServiceWorker();
