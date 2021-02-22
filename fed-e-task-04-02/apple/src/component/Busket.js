import React, { Component } from "react";
import '../css/basket.css'
import { observer, inject } from "mobx-react"
import Apple from './apple'
@inject('apple')
@observer
class Basket extends Component {
  render() {
    const { pickApple, apples,eatApple, status } = this.props.apple
    const { appleNow, appleEaten } = status
    return (
      <div className="appleBusket">
          <div className="title">苹果篮子</div>
          <div className="stats">
              <div className="section">
                  <div className="head">当前</div>
                    <div className="content">{appleNow.quantity}个苹果，{appleNow.weight}克
                  </div>
              </div>
              <div className="section">
                  <div className="head">已吃掉</div>
                  <div className="content">{appleEaten.quantity}个苹果，{appleEaten.weight}克</div>
              </div>
          </div>

          <div className="appleList">
              {
                apples.map((apple,index) => {
                  if(!apple.isEaten) {
                  return (<Apple apple ={apple} index= {index} eatApple = {eatApple} key={index} />)
                  }
                })
              }
          </div>

          <div className="btn-div">
              <button onClick={pickApple}>采摘</button>
          </div>
      </div>
    )
  }
}
export default Basket