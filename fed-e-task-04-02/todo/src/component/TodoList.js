import React, { Component } from 'react'
class TodoList extends Component {
  render() {
    return <section class="main">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
        <li class="completed">
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>Taste JavaScript</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" />
        </li>
        <li>
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>Buy a unicorn</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" />
        </li>
    </ul>
   </section>
  }
}
export default TodoList