interface todoForm {
  formEl: string;
  todoInputEl: string;
}

class TodoForm {
  formEl: HTMLElement | null;
  todoInputEl: HTMLInputElement | null;
  constructor(todoForm: todoForm) {
    const { formEl, todoInputEl } = todoForm;
    this.formEl = document.querySelector(formEl);
    this.todoInputEl = document.querySelector(todoInputEl);
    this.init();
  }
  init() {
    this.formEl &&
      this.formEl.addEventListener("submit", e => {
        console.log("onSubmit", this);
        e.preventDefault();
        this.onSubmit();
      });
  }
  onSubmit() {
    if (this.todoInputEl) {
      console.log(this.todoInputEl);
      const todoTitle: string = this.todoInputEl.value;
      this.todoInputEl.value = "";
    }
  }
}

export default TodoForm;
