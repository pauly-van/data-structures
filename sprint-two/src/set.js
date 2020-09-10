var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
};

setPrototype.contains = function(item) {
};

setPrototype.remove = function(item) {
};

let freshSet = new Set();

/*
 * Complexity: What is the time complexity of the above functions?
 */
