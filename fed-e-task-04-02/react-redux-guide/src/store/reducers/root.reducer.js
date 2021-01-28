import { combineReducers } from 'redux'
import CountReducer from './count.reducer'
import ModalReducer from './modal.reducer'

export default combineReducers({
    counter: CountReducer,
    modal: ModalReducer
})