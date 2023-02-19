import { observer } from "mobx-react-lite";
import "./App.css";
import counter from "./store/counter";
import todo from "./store/todo";

const App = observer(() => {
  return (
    <div className="App">
      <div className="btns">
        {"Count = " + counter.count}
        <button className="btn" onClick={() => counter.increment()}>
          +
        </button>
        <button className="btn" onClick={() => counter.decrement()}>
          -
        </button>
      </div>
      <div>
        {todo.todos.map((td) => (
          <div key={td.id}>
            <input
              type="checkbox"
              checked={td.completed}
              onChange={() => todo.completeTodo(td.id)}
            />
            {td.title}
            <button onClick={() => todo.removeTodo(td.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default App;
