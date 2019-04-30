// model
import TodoListModel from "./model/TodoList";
// view
import TodoInputView from "./view/TodoInputView";

import "../scss/app.scss";

const todoInputView = new TodoInputView(".new-todo");

const todoListModel = new TodoListModel();

console.log("todoListModel", TodoListModel);
