// model
import TodoListModel from "./model/TodoList";
// view
import TodoForm from "./view/TodoForm";

import "../scss/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  const todoForm = new TodoForm({
    formEl: "#todo-form",
    todoInputEl: ".new-todo"
  });

  const todoListModel = new TodoListModel();

  console.log("todoListModel", todoListModel);
  console.log("todoInputView", todoForm);
});
