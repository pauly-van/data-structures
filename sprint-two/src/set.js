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


/*
 * Complexity: What is the time complexity of the above functions?
 add is a constant complexity
 contains is a linear complexity
 remove is a constant complexity
 */
