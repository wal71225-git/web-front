import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
@inject('todo')
@observer
class TodoList extends Component {
  render() {
    const { todos, deleteTodo} = this.props.todo
    return <section className="main">
    <input className="toggle-all" type="checkbox" />
    <ul className="todo-list">
        {
          todos.map((todo, index) => {
            return (
              <li key={todo.taskName}>
              <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.taskName}</label>
                  <button onClick={() => deleteTodo(index)} className="destroy"></button>
              </div>
              <input className="edit" />
             </li>
            )
          })
        }
    </ul>
   </section>
  }
}
export default TodoList