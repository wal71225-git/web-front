import AddTodo from "./component/AddTodo";
import TodoExtra from "./component/TodoExtra";
import TodoList from "./component/TodoList";
function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <TodoList></TodoList>
      <TodoExtra></TodoExtra>
    </div>
  );
}

export default App;
