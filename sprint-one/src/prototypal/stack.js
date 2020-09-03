var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(stackMethods);
  instance.storage = {};
  instance.counter = 0;
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter++] = value;
};

stackMethods.pop = function() {
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

stackMethods.size = function() {
  return this.counter;
};
