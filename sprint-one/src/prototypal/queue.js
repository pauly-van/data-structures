var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(queueMethods);
  instance.storage = {};
  instance.counter = 0;
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter++] = value; 
};

queueMethods.dequeue = function() {
  let resetCnter = 0;
  if (this.counter === 0) {
    return undefined;
  }
  let objKeys = Object.keys(this.storage);
  let shiftedElement = this.storage[objKeys[0]];
  delete this.storage[objKeys[0]];
  this.counter--;
  for (let key in this.storage) {
    this.storage[resetCnter++] = this.storage[key];
  }
  return shiftedElement;
};

queueMethods.size = function() {
  return this.counter;
};


