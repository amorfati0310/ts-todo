class TodoInputView {
  el: HTMLElement | null;
  constructor(selector: string) {
    this.el = document.querySelector(selector);
  }
}

export default TodoInputView;
