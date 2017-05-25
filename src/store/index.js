import { createStore, applyMiddleware, compose } from 'redux'
import loggerMiddleware from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducer'

export const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware,
      sagaMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer)
}
