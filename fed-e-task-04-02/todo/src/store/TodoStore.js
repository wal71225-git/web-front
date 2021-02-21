import { action, observable, makeObservable } from 'mobx'
class TodoStore {
   @observable todos = []
   constructor() {
     makeObservable(this)
   }
   @action.bound
   addTodos(taskName) {
    this.todos.push({
        taskName
    })
   }
   @action.bound
   deleteTodo(index) {
    this.todos.splice(index, 1)
   }
}
const todo = new TodoStore()
export default todo