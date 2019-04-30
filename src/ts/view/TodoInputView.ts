class TodoInputView {
  el: HTMLElement;
  constructor({ selector: string }) {
    this.el = document.querySelector(selector);
  }
}

export default TodoInputView;
