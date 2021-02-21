import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
@inject('todo')
@observer
class TodoExtra extends Component {
  render() {
    return <footer classNameName="footer">
      <span className="todo-count"><strong>0</strong> item left</span>
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      
      <button className="clear-completed">Clear completed</button>
    </footer>
  }
}
export default TodoExtra