import { createStore, applyMiddleware } from 'redux'
// import reducer from '../store/reducers/count.reducer'
import rootReducer from '../store/reducers/root.reducer'
import logger from './middleware/logger'
// store默认接收一个reducer函数
const store = createStore(rootReducer, applyMiddleware(logger))
export default store