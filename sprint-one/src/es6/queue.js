class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {
    this.storage[this.counter++] = value;  
  }

  dequeue() {
    let refreshOrder = 0;
    if (this.counter === 0) {
      return undefined;
    }
    let objKeys = Object.keys(this.storage);
    let shiftedElement = this.storage[objKeys[0]];
    delete this.storage[objKeys[0]];
    this.counter--;
    for (let key in this.storage) {
      this.storage[refreshOrder++] = this.storage[key];
    }
    return shiftedElement;
  }

  size() {
    return this.counter;
  }
}

var newInstance = new Queue();