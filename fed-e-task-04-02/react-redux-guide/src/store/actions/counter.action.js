import { INCREMENT, DECREMENT } from "../const"
export const increment = payLoad => ({ type : INCREMENT, payLoad })
export const decrement = payLoad => ({ type : DECREMENT, payLoad })

export const increment_async = payLoad => dispatch => {
    setTimeout(() => {
      dispatch(increment(payLoad))
    }, 2000)
}