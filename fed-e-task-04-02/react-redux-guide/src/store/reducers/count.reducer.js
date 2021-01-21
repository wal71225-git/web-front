import { INCREMENT, DECREMENT } from '../const/index'
const initState = {
  count: 0
}
/**
 * 
 * @param {*} state 状态
 * @param {*} action 状态描述
 */
const reducer = (state = initState, action) => {
  switch(action.type) {
    case INCREMENT:
    return {
      count: state.count +1
    }
    case DECREMENT:
    return {
      count: state.count - 1
    }
    default:
      return state
  }
}
export default reducer