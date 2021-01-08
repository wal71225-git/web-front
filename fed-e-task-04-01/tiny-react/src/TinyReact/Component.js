import diff from "./diff"
export default class Component {
  constructor(props) {
    this.props = props
  }
  setState(state) {
    // setState 方法被子类调用 此处this指向子类实例对象
    // 所以改变的是子类的 state 对象
    this.state = Object.assign({},this.state, state)
    // 通过调用 render 方法获取最新的 Virtual DOM
    let virtualDOM = this.render()
    // 获取页面中正在显示的 DOM 对象 通过它可以获取其对象的 Virtual DOM 对象
    let oldDom = this.getDom()
    // 获取真实 DOM 对象父级容器对象
    let container = oldDom.parentNode
    // 比对
    diff(virtualDOM, container, oldDom)
  }
  setDom(dom) {
    this._dom = dom
  }
  getDom() {
    return this._dom
  }
}