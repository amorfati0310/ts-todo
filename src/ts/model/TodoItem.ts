interface TodoItem {
  title: string;
  completed: boolean;
  detail: object;
  createdAt: Date;
  dueDate: Date;
  remainTime: number;
}

class TodoItem {
  constructor(title: string) {
    this.title = title;
    this.completed = false;
    this.detail = {};
    this.createdAt = new Date();
  }
  setTitle(title: string) {
    this.title = title;
  }
}

export default TodoItem;
