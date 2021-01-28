import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../store/actions/modal.actions'
function Modal({showState, showModal, hideModal}) {
  const styles = {
    width: 200,
    height: 200,
    left: '50%',
    top: '50%',
    position: 'absolute',
    background: 'red',
    display: showState ? 'block' : 'none'
  }
  return <div>
    <button onClick={showModal}>显示</button>
    <button onClick={hideModal}>隐藏</button>
    <div style={styles}></div>
  </div>
}
const mapStateToProps = ({ modal }) => ({
  showState: modal.show
})
const mapDispatchToProps = dispatch => bindActionCreators(modalActions,dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Modal)