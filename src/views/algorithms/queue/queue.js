export default class Queues {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    let first = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return first;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let str = this.items[this.lowestCount] + '';
    for (let index = this.lowestCount + 1; index < this.count; index++) {
      str = str + ',' + this.items[index];
    }
    console.log(str);
    return str;
  }
}
