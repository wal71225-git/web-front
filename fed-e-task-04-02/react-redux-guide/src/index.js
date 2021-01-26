import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App'
// const initState = {
//   count: 0
// }
// /**
//  * 
//  * @param {*} state 状态
//  * @param {*} action 状态描述
//  */
// function reducer(state = initState, action) {
//   switch(action.type) {
//     case 'increment':
//     return {
//       count: state.count +1
//     }
//     case 'decrement':
//     return {
//       count: state.count - 1
//     }
//     default:
//       return state
//   }
// }
// // store默认接收一个reducer函数
// const store = createStore(reducer)

// const increment = { type : 'increment' }
// const decrement = { type : 'decrement' }
// 创建函数组件
// function Counter() {
//   return <div>
//     <button onClick={() => { store.dispatch(increment)}}>+</button>
//     <span>{store.getState().count}</span>
//     <button onClick={() => { store.dispatch(decrement)}}>-</button>
//   </div>
// }
// store.subscribe(() => {
//   console.log(store.getState())
//   ReactDOM.render( 
//     <Counter />,
//     document.getElementById('root')
//   )
// })
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
