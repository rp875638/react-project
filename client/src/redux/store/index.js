import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from '../reducers/RootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
const saga = createSagaMiddleware()

export const store = compose(applyMiddleware(saga),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore)(rootReducer);
saga.run(rootSaga);