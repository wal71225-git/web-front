import React, { createContext } from 'react'
const countContext = new createContext()
function TestReducer() {
  return (
  <div>
    <span>{count}</span>
    <button onClick={()=>dispatch({type: 'decrement'})}>-1</button>
    <button onClick={()=> dispatch({type: 'increment'})}>+1</button>
  </div>
  )
}
export default TestReducer