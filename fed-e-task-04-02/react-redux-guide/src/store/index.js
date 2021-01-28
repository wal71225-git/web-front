import { createStore } from 'redux'
// import reducer from '../store/reducers/count.reducer'
import rootReducer from '../store/reducers/root.reducer'
// store默认接收一个reducer函数
const store = createStore(rootReducer)
export default store