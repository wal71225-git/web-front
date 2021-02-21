import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
@inject('todo')
@observer
class AddTodo extends Component {
  render() {
    return <header className="header">
				<h1>todos</h1>
				<input onKeyUp={this.addTodo.bind(this)} className="new-todo" placeholder="What needs to be done?" />
		</header>
  }
  addTodo(event) {
    const { addTodos } = this.props.todo
    // 判断点击的是否是enter键
    if(event.key === 'Enter') {
      console.log(event)
      const taskName = event.target.value
      if(taskName.trim().length === 0) {
        return
      }
      addTodos(taskName)
      event.target.value = ''
    }

  }
}
export default AddTodo