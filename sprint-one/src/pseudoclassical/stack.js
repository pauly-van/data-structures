var Stack = function(stor, cnt) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = stor;
  this.counter = cnt;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter++] = value;
};

Stack.prototype.pop = function() {
  if (this.counter === 0) {
    return undefined;
  }
  let objKeys = Object.keys(this.storage);
  let lastElement = this.storage[objKeys.length - 1];
  delete this.storage[lastElement];
  this.counter--;
  return lastElement;
};

Stack.prototype.size = function() {
  return this.counter;
};

var someInstance = new Stack({}, 0);

