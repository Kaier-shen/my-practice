export default class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    let last = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return last;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let str = this.items[0] + '';
    for (let index = 1; index < this.count; index++) {
      str += this.items[index];
    }
    console.log(str);
    return str;
  }
}
