import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import  createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/root.saga'
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)