import React, { useReducer } from 'react'
function TestReducer() {
  // useReducer第一个参数reducer函数，第二个函数是初始值
  const [count, dispatch] = useReducer(reducer,0)
  function reducer(state, action) {
    switch(action.type) {
      case 'decrement':
        return state - 1
      case 'increment':
        return state + 1
      default :
        return state
    }
  }
  return (
  <div>
    <span>{count}</span>
    <button onClick={()=>dispatch({type: 'decrement'})}>-1</button>
    <button onClick={()=> dispatch({type: 'increment'})}>+1</button>
  </div>
  )
}
export default TestReducer