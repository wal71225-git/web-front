import { createStore, applyMiddleware } from 'redux'
// import reducer from '../store/reducers/count.reducer'
import rootReducer from '../store/reducers/root.reducer'
// import logger from './middleware/logger'
// import thunk from './middleware/thunk'
// import thunk from 'redux-thunk'
import counterSaga from './sagas/counter.saga';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
// store默认接收一个reducer函数
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
export default store
// 启动 counterSaga
sagaMiddleware.run(counterSaga)