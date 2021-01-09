
import TinyReact from './TinyReact'
const app = document.getElementById('app')
// babel在转化下面virtualDOM时会主动调用TinyReact.createElement方法
// 普通虚拟dom
const virtualDOM = (
    <div className="container">
      <h1>你好 Tiny React</h1>
      <h2 data-test="test">(编码必杀技)</h2>
      <div>
        嵌套1 <div>嵌套 1.1</div>
      </div>
      <h3>(观察: 这个将会被改变)</h3>
      {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
      {2 == 2 && <div>2</div>}
      <span>这是一段内容</span>
      <button onClick={() => alert("你好")}>点击我</button>
      <h3>这个将会被删除</h3>
      2, 3
      <input type="text" value="13" />
    </div>
)

// 用来验证普通dom修改
const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容改变</span>
    <button onClick={() => alert("你好!!!!!")}>点击我</button>
    <input type="text" value="13" />
  </div>
)
// TinyReact.render(virtualDOM, app)
// setTimeout(() => {
//   TinyReact.render(modifyDOM, app)
// }, 3000)

// 函数类型虚拟dom
// const Heart = (props) => {
// return <div>{props.title}&hearts;</div>
// }
class Heart extends TinyReact.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (<div>{this.props.title}&hearts;</div>)
  }
}
// TinyReact.render(<Heart title='react virtualDOM'/>, app)


// 类组件
class Alert extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'default title'
    }
    // 更改 handleChange 方法中的 this 指向 让 this 指向类实例对象
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    // 调用父类方法改变title
    this.setState({
      title: 'change title'
    })
    console.log(this.input)
    console.log(this.heart)
  }
  render() {
   return ( 
   <div>
     <h1>{this.state.title}</h1>
     {this.props.name}hello render
     <input type="text" ref={input => (this.input = input)} />
     <Heart ref={heart => (this.heart = heart)} title="张三" />
     <button onClick={this.handleChange}>改变title</button>
   </div>)
  }
}
TinyReact.render(<Alert name="levy"/>, app)
// setTimeout(() => {
//   // TinyReact.render(<Heart title='react virtualDOM'/>, app)
//   TinyReact.render(<Alert name="代表"/>, app)
// }, 3000)
