import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reactotron from '~/config/reactotron';

import reducers from './ducks';
import sagas from './sagas';

let enhancer = null;
let sagaMonitor = null;

const propsComposer = [];

if (__DEV__) {
  enhancer = reactotron.createEnhancer();
  sagaMonitor = reactotron.createSagaMonitor();
  propsComposer.push(enhancer);
}

const sagaMiddleware = createSagaMiddleware(__DEV__ ? { sagaMonitor } : {});
// const sagaMiddleware = createSagaMiddleware({});

const middlewares = [];
middlewares.push(sagaMiddleware);

propsComposer.push(applyMiddleware(...middlewares));

const composer = compose(...propsComposer);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
