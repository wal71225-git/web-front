<template>
    <div id="app">
    <section  class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autocomplete="off"
        autofocus
        v-model="input"
        @keyup.enter="addTodo"
        >
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" v-model="allDone" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="todo in todos"
          :key="todo"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.text }}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit"
            v-model="todo.text"
            @keyup.enter="doneEdit(todo)"
            @blur="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
            >
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="count">
      <span class="todo-count">
        <strong>{{ remainingCount }}</strong> {{ remainingCount > 1 ? 'items' : 'item' }} left
      </span>
      <ul class="filters">
        <li><a href="#/all">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="count > remainingCount">
        Clear completed
      </button>
    </footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <!-- Remove the below line ↓ -->
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Created by <a href="https://www.lagou.com">教瘦</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
  </div>
</template>

<script>
import './assets/index.css'
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'
// 1.添加待办事项
const useAdd = todos => {
  const input = ref('')
  const addTodo = () => {
    const text = input.value && input.value.trim()
    console.log(text)
    if(text.length === 0 ) return
    // todos.value.unshift({
    //   text,
    //   completed: false
    // })
    todos.value.unshift({
      text,
      completed: false
    })
    input.value = ''
  }
  console.log(9999999)
  console.log('todos=======',todos)
  return {
    input,
    addTodo
  }
}
export default {
  name: 'App',
  setup() {
    const todos = ref([])
    return {
      todos,
      ...useAdd(todos)
    }
  }
}
</script>
