import { createStore } from 'redux'
import reducer from '../store/reducers/count.reducer'
// store默认接收一个reducer函数
const store = createStore(reducer)
export default store