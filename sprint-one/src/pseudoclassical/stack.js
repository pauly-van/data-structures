var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0; 
};

Stack.prototype.push = function(value) {
  this.storage[this.counter++] = value;
};

Stack.prototype.pop = function() {
  if (this.counter === 0) {
    return undefined;
  }
  let objKeys = Object.keys(this.storage);
  let lastElement = objKeys[objKeys.length - 1];
  let poppedElement = this.storage[lastElement];
  this.counter--;
  delete this.storage[lastElement];
  return poppedElement; 
};

Stack.prototype.size = function() {
  return this.counter;
};

var someInstance = new Stack();