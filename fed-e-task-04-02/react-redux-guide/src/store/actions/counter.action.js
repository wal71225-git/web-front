import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from "../const"
export const increment = payLoad => ({ type : INCREMENT, payLoad })
export const decrement = payLoad => ({ type : DECREMENT, payLoad })

// export const increment_async = payLoad => dispatch => {
//     setTimeout(() => {
//       dispatch(increment(payLoad))
//     }, 2000)
// }

export const increment_async = payLoad => ({type: INCREMENT_ASYNC, payLoad})