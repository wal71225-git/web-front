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
      <input id="toggle-all" class="toggle-all"  type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="todo in todos"
          :key="todo"
          :class="{ 'editing': todo === editingTodo }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.text }}</label>
            <button class="destroy" @click="remove(todo)"></button>
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
    <footer class="footer" >
      <!-- <span class="todo-count">
        <strong>{{ remainingCount }}</strong> {{ remainingCount > 1 ? 'items' : 'item' }} left
      </span>
      <ul class="filters">
        <li><a href="#/all">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="count > remainingCount">
        Clear completed
      </button> -->
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
    if(text.length === 0 ) return
      todos.value.unshift({
        text,
        completed: false
      })
      input.value = ''
  }
  return {
    input,
    addTodo
  }
}

// 2.移除待办事项
const removeTodo = todos => {
  const remove = todo => {
    const index = todos.value.indexOf(todo)
    todos.value.splice(index,1)
  }
  return {
    remove
  }
}

// 3.修改待办事项
const editTodos = () => {
  let beforeEditValue = '' // 记录初始值
  const editingTodo = ref(null) // 是否在修改中
  const editTodo = todo => {
    beforeEditValue = todo.text
    editingTodo.value = todo
  }
  return {
    editingTodo,
    editTodo
  }
} 
export default {
  name: 'App',
  setup() {
    const todos = ref([])
    return {
      todos,
      ...useAdd(todos),
      ...removeTodo(todos),
      ...editTodos()
    }
  }
}
</script>
