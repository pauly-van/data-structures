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
 add is a constant complexity. only ever does 1 thing and it sets the item value to 1
 contains is a linear complexity. it loops through so it could potentially loop thru the entire object for worst case.
 remove is a constant complexity it only does 2 actions. check if it contains item. and then deletes it
 */
