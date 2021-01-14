import React, { render, Component } from "./react"
const root = document.getElementById("root")
const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hi Fiber</p>
  </div>
)
// render(jsx, root)

// 类组件
class Alert extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h6>222222</h6>
        <h6>333333</h6>
      </div>
    )
  }
}
// render(<Alert />, root)

// 函数组件
function FnComponent() {
  return (<div>nComponent</div>)
}
render(<FnComponent />, root)