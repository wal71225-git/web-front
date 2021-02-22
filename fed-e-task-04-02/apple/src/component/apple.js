import React, { Component } from "react"
import '../css/apple.css'
import { observer, inject } from "mobx-react"
@inject('apple')
@observer
class AppleItem extends Component {
  render() {
    const { eatApple, apple,index } = this.props
    return (
      <div className="appleItem">
          <div className="apple"><img src={require('../images/apple.png')} alt=""/></div>
          <div className="info">
          <div className="name">红苹果 - {apple.id}号</div>
          <div className="weight">{apple.weight}克</div>
          </div>
          <div className="btn-div">
              <button onClick={() => eatApple(index)}> 吃掉 </button>
          </div>
      </div>
    )
  }
}
export default AppleItem