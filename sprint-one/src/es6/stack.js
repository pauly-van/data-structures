class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter++] = value;
  }

  pop() {
    let refreshOrder = 0;
    if (this.counter === 0) {
      return undefined;
    }
    let objKeys = Object.keys(this.storage);
    let lastElement = objKeys[objKeys.length - 1];
    let poppedElement = this.storage[lastElement];
    delete this.storage[lastElement];
    this.counter--;
    return poppedElement;
  }

  size() {
    return this.counter;
  }
}

var newInstance = new Stack();