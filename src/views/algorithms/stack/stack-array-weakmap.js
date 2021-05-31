const items = new WeakMap();
export default class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const d = items.get(this);
    d.push(element);
  }

  pop() {
    const d = items.get(this);
    return d.pop();
  }

  peek() {
    const d = items.get(this);
    return d[d.length - 1];
  }

  isEmpty() {
    const d = items.get(this);
    return d.length === 0;
  }

  clear() {
    items.set(this, []);
  }

  size() {
    const d = items.get(this);
    return d.length;
  }
}
