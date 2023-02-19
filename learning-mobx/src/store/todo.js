import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: "1", completed: false },
    { id: 2, title: "2", completed: false },
    { id: 3, title: "3", completed: false },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.filter((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new Todo();
