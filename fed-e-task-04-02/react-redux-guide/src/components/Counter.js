import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.action'
// 创建函数组件
function Counter({count, increment, decrement}) {
  return <div>
    <button onClick={ () => increment(5) }>+</button>
    <span>{count}</span>
    <button onClick={ () => decrement(5) }>-</button>
  </div>
}
const mapStateToProps = state => ({
  count: state.count
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(counterActions, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Counter)