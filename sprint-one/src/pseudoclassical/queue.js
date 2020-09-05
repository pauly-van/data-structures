var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter++] = value; 
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.counter;
};

var someInstance = new Queue();
