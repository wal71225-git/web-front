
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
// TinyReact.render(virtualDOM, app)

// 函数类型虚拟dom
const Heart = (props) => {
return <div>{props.title}&hearts;</div>
}
TinyReact.render(<Heart title='react virtualDOM'/>, app)


// 类组件
class Alert extends TinyReact.Component {
  constructor(props) {
    super(props)
  }
  render() {
  return <div>{this.props.name}hello render</div>
  }
}
TinyReact.render(<Alert name="levy"/>, app)