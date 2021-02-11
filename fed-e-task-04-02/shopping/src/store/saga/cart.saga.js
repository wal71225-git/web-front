import { takeEvery, put, actionChannel} from 'redux-saga/effects'
import { addProductToCart } from '../actions/cart.actions'
import axios from 'axios'
function* handleAddProductToCart(action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload})
  console.log('action.payload', action.payload)
  console.log('data', data)
}
export default function* cartSaga() {
  yield takeEvery(addProductToCart, handleAddProductToCart)
}