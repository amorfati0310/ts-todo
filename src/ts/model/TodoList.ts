interface Todo {
  title: string;
  completed: boolean;
  detail: object;
  createdAt: string;
  dueDate: string;
  remainTime: string;
}

class TodoListModel {
  todoList: Array<Todo>;
  constructor() {
    this.todoList = [];
  }
  addTodo() {
    this.todoList.push();
  }
}
export default TodoListModel;
