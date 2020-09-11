var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  for (let key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if ( this.contains(item) ) {
    delete this._storage[item];
  }
};

let freshSet = new Set();

/*
 * Complexity: What is the time complexity of the above functions?
 */
