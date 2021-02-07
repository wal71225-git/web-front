import { takeEvery, put, delay } from 'redux-saga/effects' // takeEvery 接收action  put触发action delay 延迟
import { INCREMENT_ASYNC } from '../const/index'
import { increment } from '../actions/counter.action'
function* increment_async_fn (action) {
  yield delay(2000)
  yield put(increment(action.payLoad))
}
export default function* counterSaga() {
  // 接受action
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}