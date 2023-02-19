import React from "react";
import todo from "./store/todo";
import { observer } from "mobx-react-lite";

const Todo = observer(() => {
  return (
    <div>
      {todo.todos.map((td) => (
        <div>
          <input type="checkbox" />
          {td.title}
          <button>x</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
