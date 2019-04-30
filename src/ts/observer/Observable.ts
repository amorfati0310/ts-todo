// class Observable {
//   // observers: Map<string, FunctionStringCallback>
//   observers: Array<() => {}>;
//   constructor() {
//     this.observers = [];
//   }
//   subscribe(f: () => {}) {
//     this.observers.push(f);
//   }
//   unsubscribe(f: () => {}) {
//     this.observers = this.observers.filter(subscriber => subscriber !== f);
//   }
//   notify(data:object) {
//     this.observers.forEach(observer => observer(data));
//   }
  //   subscribe(f) {
  //     this.observers.push(f);
  //   }
  //   unsubscribe(f) {
  //     this.observers = this.observers.filter(subscriber => subscriber !== f);
  //   }
  //   notify(data) {
  //     this.observers.forEach(observer => observer(data));
  //   }
}

export default Observable;
